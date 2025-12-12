#!/usr/bin/env node

/**
 * Auto-Translation Script
 * 
 * Detects missing translations in BOTH I18N dictionary AND GitHub projects,
 * translates them using MyMemory API (free tier), and saves to JSON file.
 * 
 * Usage: node scripts/auto-translate.js
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// Configuration
const GITHUB_ORG = 'joel-portfolio';
const OUTPUT_FILE = path.join(__dirname, '../assets/data/translations.json');
const CONTROLS_JS = path.join(__dirname, '../assets/js/controls.js');
const RATE_LIMIT_MS = 500; // 500ms between API calls to respect free tier

// MyMemory API (free, no key needed, 5000 words/day)
async function translateText(text, fromLang, toLang) {
    return new Promise((resolve, reject) => {
        const encodedText = encodeURIComponent(text);
        const url = `https://api.mymemory.translated.net/get?q=${encodedText}&langpair=${fromLang}|${toLang}`;

        https.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    if (json.responseData && json.responseData.translatedText) {
                        resolve(json.responseData.translatedText);
                    } else {
                        reject(new Error('Translation failed'));
                    }
                } catch (e) {
                    reject(e);
                }
            });
        }).on('error', reject);
    });
}

// Fetch GitHub projects
async function fetchGitHubProjects() {
    return new Promise((resolve, reject) => {
        const url = `https://api.github.com/orgs/${GITHUB_ORG}/repos?sort=updated&per_page=100`;

        https.get(url, {
            headers: { 'User-Agent': 'Node.js' }
        }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const repos = JSON.parse(data);
                    resolve(repos
                        .filter(r => !r.fork && !r.archived)
                        .map(r => ({
                            name: r.name,
                            description: r.description || ''
                        }))
                    );
                } catch (e) {
                    reject(e);
                }
            });
        }).on('error', reject);
    });
}

// Parse I18N from controls.js (simple extractor)
function parseI18N() {
    const content = fs.readFileSync(CONTROLS_JS, 'utf8');

    const result = { pt: {}, en: {} };

    // Extract PT section
    const ptMatch = content.match(/pt:\s*\{([^}]+(?:\{[^}]*\}[^}]*)*)\}/s);
    if (ptMatch) {
        const ptContent = ptMatch[1];
        const keyRegex = /'([^']+)':\s*'((?:[^'\\]|\\.)*)'/g;
        let match;
        while ((match = keyRegex.exec(ptContent)) !== null) {
            result.pt[match[1]] = match[2].replace(/\\'/g, "'");
        }
    }

    // Extract EN section  
    const enMatch = content.match(/en:\s*\{([^}]+(?:\{[^}]*\}[^}]*)*)\}/s);
    if (enMatch) {
        const enContent = enMatch[1];
        const keyRegex = /'([^']+)':\s*'((?:[^'\\]|\\.)*)'/g;
        let match;
        while ((match = keyRegex.exec(enContent)) !== null) {
            result.en[match[1]] = match[2].replace(/\\'/g, "'");
        }
    }

    return result;
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function main() {
    console.log('🌍 Auto-Translation Script Starting...\n');

    let translations = {
        projects: { pt: {}, en: {} },
        site: { pt: {}, en: {} },
        lastUpdate: null
    };

    if (fs.existsSync(OUTPUT_FILE)) {
        translations = JSON.parse(fs.readFileSync(OUTPUT_FILE, 'utf8'));
        console.log('✓ Loaded existing translations');
    }

    // Parse I18N from controls.js
    console.log('\n📖 Scanning I18N dictionary...');
    const i18n = parseI18N();
    console.log(`✓ Found ${Object.keys(i18n.pt).length} PT keys, ${Object.keys(i18n.en).length} EN keys`);

    let siteTranslations = 0;

    // Find PT keys missing EN translation
    for (const [key, ptText] of Object.entries(i18n.pt)) {
        if (!i18n.en[key] && !translations.site.en[key] && ptText && ptText.trim()) {
            console.log(`\n🔄 Site PT→EN: "${key}"`);
            console.log(`   PT: ${ptText.substring(0, 50)}...`);

            try {
                await sleep(RATE_LIMIT_MS);
                translations.site.en[key] = await translateText(ptText, 'pt', 'en');
                console.log(`   EN: ${translations.site.en[key].substring(0, 50)}...`);
                siteTranslations++;
            } catch (error) {
                console.error(`   ✗ Error: ${error.message}`);
            }
        }
    }

    // Find EN keys missing PT translation
    for (const [key, enText] of Object.entries(i18n.en)) {
        if (!i18n.pt[key] && !translations.site.pt[key] && enText && enText.trim()) {
            console.log(`\n🔄 Site EN→PT: "${key}"`);
            console.log(`   EN: ${enText.substring(0, 50)}...`);

            try {
                await sleep(RATE_LIMIT_MS);
                translations.site.pt[key] = await translateText(enText, 'en', 'pt');
                console.log(`   PT: ${translations.site.pt[key].substring(0, 50)}...`);
                siteTranslations++;
            } catch (error) {
                console.error(`   ✗ Error: ${error.message}`);
            }
        }
    }

    // Fetch and translate GitHub projects
    console.log('\n📦 Fetching GitHub projects...');
    const projects = await fetchGitHubProjects();
    console.log(`✓ Found ${projects.length} projects`);

    let projectTranslations = 0;
    for (const project of projects) {
        const key = project.name;

        if (translations.projects.pt[key] && translations.projects.en[key]) {
            continue;
        }

        if (!project.description || !project.description.trim()) {
            continue;
        }

        console.log(`\n🔄 Project "${key}"`);
        console.log(`   Orig: ${project.description.substring(0, 50)}...`);

        try {
            const isPT = /[áàãâéêíóôõúç]/i.test(project.description);

            if (isPT) {
                translations.projects.pt[key] = project.description;
                await sleep(RATE_LIMIT_MS);
                translations.projects.en[key] = await translateText(project.description, 'pt', 'en');
                console.log(`   EN: ${translations.projects.en[key].substring(0, 50)}...`);
            } else {
                translations.projects.en[key] = project.description;
                await sleep(RATE_LIMIT_MS);
                translations.projects.pt[key] = await translateText(project.description, 'en', 'pt');
                console.log(`   PT: ${translations.projects.pt[key].substring(0, 50)}...`);
            }

            projectTranslations++;
        } catch (error) {
            console.error(`   ✗ Error: ${error.message}`);
        }
    }

    translations.lastUpdate = new Date().toISOString();

    const dir = path.dirname(OUTPUT_FILE);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(translations, null, 2), 'utf8');

    console.log('\n✅ Done!');
    console.log(`   Site translations: ${siteTranslations}`);
    console.log(`   Project translations: ${projectTranslations}`);
    console.log(`   Saved to: ${OUTPUT_FILE}`);
}

main().catch(error => {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
});
