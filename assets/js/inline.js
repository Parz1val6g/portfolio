(function () {
    'use strict';
    /* Translations */
    const I18N = {
        pt: {
            brand: 'Joel Tavares Martins', 'nav.about': 'Sobre', 'nav.resume': 'CV', 'nav.skills': 'Skills', 'nav.projects': 'Projetos', 'nav.blog': 'Blog', 'nav.contact': 'Contacto', 'nav.cta': 'Contactar',
            'hero.badge': 'Estudante • Engenharia Informática — Backend & Cloud', 'hero.title': 'Desenvolvedor Full-Stack em formação | Backend & Cloud', 'hero.sub': 'Construo e estudo aplicações de backend, APIs e soluções cloud.', 'hero.lead': 'Foco em entrega de backends robustos, testes e deploys em Azure. Procuro estágio e projetos colaborativos.', 'hero.projects': 'Ver Projetos', 'hero.cv': 'Ver CV', 'hero.contactnote': 'Respondo em 24h via email / LinkedIn • Mangualde, Portugal', 'hero.cvdownload': 'Descarregar CV',
            'about.title': 'Sobre Mim', 'about.p1': 'Sou estudante de Engenharia Informática no Instituto Politécnico de Viseu (ESTGV/IPV). Interesso-me por desenvolvimento backend, computação em nuvem e integração de sistemas.', 'about.p2': 'Trabalhei em projetos académicos que envolvem APIs REST, pipelines CI/CD e deploy em Azure; foco em testes e documentação.', 'about.subtitle': 'Resumo Académico & Formações', 'edu.institution': 'ESTGV — Instituto Politécnico de Viseu', 'edu.azure': 'Labs Azure: WebApps, Functions, Databases', 'edu.pint': 'PINT / J.A.R.V.I.S. — integrações e documentação',
            'resume.title': 'Currículo', 'resume.education': 'Educação', 'resume.education.detail': 'Programação (Java, C/C++), Redes, Bases de Dados, Engenharia de Software.', 'resume.lab.azure': 'Azure Labs: deploy, serverless, bancos de dados', 'resume.lab.devops': 'Workshops: Docker, GitHub Actions, testes', 'resume.experience': 'Experiência', 'resume.position': 'Colaborador académico / Desenvolvedor', 'resume.experience.detail': 'Desenvolvimento de backends, integração com BD e pipelines CI/CD',
            'skills.title': 'Skills', 'skills.lead': 'Competências principais com percentagens representadas visualmente.', 'projects.title': 'Projetos', 'projects.lead': 'Projetos académicos e pessoais com foco em backend, APIs e Azure.', 'blog.title': 'Blog & Artigos', 'contact.title': 'Contacto', 'contact.response': 'Respondo em 24h via email/LinkedIn', 'form.name': 'Nome', 'form.email': 'Email', 'form.message': 'Mensagem', 'form.send': 'Enviar', 'form.clear': 'Limpar', 'footer.name': 'Joel Tavares Martins', 'footer.rights': 'Todos os direitos reservados.', 'project.api.title': 'API de Gestão Académica', 'project.api.tech': 'Java (Spring Boot) • PostgreSQL • Docker • Azure WebApp', 'project.pint.title': 'Pipeline PINT / J.A.R.V.I.S.', 'project.pint.tech': 'Node.js • GitHub Actions • Testes • IaC', 'project.auth.title': 'Microserviço de Autenticação', 'project.auth.tech': 'Express.js • JWT • PostgreSQL • Docker', 'project.action.github': 'GitHub', 'project.action.demo': 'Demo', 'blog.search.placeholder': 'Procurar artigos, tutoriais...'
        },
        en: {
            brand: 'Joel Tavares Martins', 'nav.about': 'About', 'nav.resume': 'Resume', 'nav.skills': 'Skills', 'nav.projects': 'Projects', 'nav.blog': 'Blog', 'nav.contact': 'Contact', 'nav.cta': 'Contact',
            'hero.badge': 'Student • Computer Engineering — Backend & Cloud', 'hero.title': 'Full-Stack Developer in training | Backend & Cloud', 'hero.sub': 'I build and study backend applications, APIs and cloud solutions.', 'hero.lead': 'Focused on robust backends, testing and Azure deployments. Looking for internships and collaborative projects.', 'hero.projects': 'View Projects', 'hero.cv': 'View CV', 'hero.contactnote': 'I reply within 24h via email / LinkedIn • Mangualde, Portugal', 'hero.cvdownload': 'Download CV',
            'about.title': 'About Me', 'about.p1': 'I am a Computer Engineering student at the Polytechnic Institute of Viseu (ESTGV/IPV). Interested in backend development, cloud computing and system integration.', 'about.p2': 'I worked on academic projects involving REST APIs, CI/CD pipelines and Azure deployments; focused on testing and documentation.', 'about.subtitle': 'Academic Summary & Training', 'edu.institution': 'ESTGV — Polytechnic Institute of Viseu', 'edu.azure': 'Azure Labs: WebApps, Functions, Databases', 'edu.pint': 'PINT / J.A.R.V.I.S. — integrations and documentation',
            'resume.title': 'Resume', 'resume.education': 'Education', 'resume.education.detail': 'Programming (Java, C/C++), Networks, Databases, Software Engineering.', 'resume.lab.azure': 'Azure Labs: deploy, serverless, databases', 'resume.lab.devops': 'Workshops: Docker, GitHub Actions, testing', 'resume.experience': 'Experience', 'resume.position': 'Academic collaborator / Developer', 'resume.experience.detail': 'Backend development, DB integration and CI/CD pipelines',
            'skills.title': 'Skills', 'skills.lead': 'Core competencies with percentages visualised.', 'projects.title': 'Projects', 'projects.lead': 'Academic and personal projects focused on backend, APIs and Azure.', 'blog.title': 'Blog & Articles', 'contact.title': 'Contact', 'contact.response': 'I reply within 24h via email/LinkedIn', 'form.name': 'Name', 'form.email': 'Email', 'form.message': 'Message', 'form.send': 'Send', 'form.clear': 'Clear', 'footer.name': 'Joel Tavares Martins', 'footer.rights': 'All rights reserved.', 'project.api.title': 'Academic Management API', 'project.api.tech': 'Java (Spring Boot) • PostgreSQL • Docker • Azure WebApp', 'project.pint.title': 'PINT / J.A.R.V.I.S. Pipeline', 'project.pint.tech': 'Node.js • GitHub Actions • Testing • IaC', 'project.auth.title': 'Authentication Microservice', 'project.auth.tech': 'Express.js • JWT • PostgreSQL • Docker', 'project.action.github': 'GitHub', 'project.action.demo': 'Demo', 'blog.search.placeholder': 'Search posts, tutorials...'
        },
        es: {}
    };

    const $ = s => document.querySelector(s);
    const $$ = s => Array.from(document.querySelectorAll(s));

    /* Language system */
    const LANG_KEY = 'site_lang';
    let lang = localStorage.getItem(LANG_KEY) || (navigator.language && navigator.language.startsWith('en') ? 'en' : 'pt');
    if (!['pt', 'en', 'es'].includes(lang)) lang = 'pt';
    // store original text as fallback defaults so missing translations don't break content
    $$('[data-i18n]').forEach(el => {
        if (!el.dataset.i18nDefault) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.dataset.i18nDefault = el.placeholder || el.value || '';
            else el.dataset.i18nDefault = el.textContent || '';
        }
    });

    // Apply language with fallback chain to avoid mixed languages when some locales are incomplete.
    function applyLang(l) {
        // Determine effective language: if requested lang isn't available, fall back to pt
        const preferredOrder = ['pt', 'en', 'es'];
        const available = preferredOrder.filter(code => Object.keys(I18N[code] || {}).length > 0);
        const effective = (available.includes(l) ? l : (available[0] || 'pt'));
        lang = effective;
        document.documentElement.lang = (effective === 'pt' ? 'pt-PT' : (effective === 'en' ? 'en-US' : 'es-ES'));

        // Fallback chains: try target locale, then fall back to sensible alternatives
        const fallbackChains = {
            pt: ['pt', 'en'],
            en: ['en', 'pt'],
            es: ['es', 'pt', 'en']
        };

        const chain = fallbackChains[effective] || [effective, 'pt', 'en'];

        $$('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            let translation = null;
            for (const c of chain) {
                if (I18N[c] && I18N[c][key]) { translation = I18N[c][key]; break; }
            }
            const fallback = el.dataset.i18nDefault || '';
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translation || fallback;
            } else {
                el.textContent = translation || fallback;
            }
        });

        const langBtn = $('#langToggle');
        if (langBtn) langBtn.textContent = '🌐 ' + (effective === 'pt' ? 'PT' : (effective === 'en' ? 'EN' : 'ES'));
        localStorage.setItem(LANG_KEY, effective);
        // Re-run hero typing so the title re-types for the selected language
        try { typeHeroTitle(100); } catch (e) { /* ignore */ }
    }
    applyLang(localStorage.getItem(LANG_KEY) || lang);
    // Restore simple cycle toggle (click to rotate languages). Do not show a dropdown.
    (function setupLangToggle() {
        const langBtn = $('#langToggle');
        if (!langBtn) return;
        // Only support Portuguese and English in the cycle to avoid accidental Spanish fallbacks
        const order = ['pt', 'en'];

        // Ensure any previously injected menu is hidden/removed
        try {
            const existing = document.getElementById('langMenu');
            if (existing && existing.parentNode) existing.parentNode.removeChild(existing);
        } catch (e) { /* ignore */ }

        langBtn.setAttribute('aria-haspopup', 'false');
        langBtn.setAttribute('aria-expanded', 'false');

        langBtn.addEventListener('click', (e) => {
            e.preventDefault();
            let idx = order.indexOf(lang);
            if (idx < 0) idx = 0;
            idx = (idx + 1) % order.length;
            applyLang(order[idx]);
        });
    })();

    /* Theme */
    const THEME_KEY = 'site_theme';
    let theme = localStorage.getItem(THEME_KEY) || 'dark';
    function applyTheme(t) { if (t === 'light') document.documentElement.classList.add('light'); else document.documentElement.classList.remove('light'); $('#darkToggle').setAttribute('aria-pressed', String(t !== 'light')); localStorage.setItem(THEME_KEY, t); }
    applyTheme(localStorage.getItem(THEME_KEY) || theme);
    $('#darkToggle').addEventListener('click', () => { theme = document.documentElement.classList.contains('light') ? 'dark' : 'light'; applyTheme(theme); showToast(theme === 'dark' ? 'Modo escuro ativado' : 'Modo claro ativado'); });

    /* Toast helper */
    function showToast(msg, t = 2000) { const el = $('#toast-instance'); el.style.display = 'block'; el.textContent = msg; el.classList.add('visible'); clearTimeout(el._to); el._to = setTimeout(() => { el.classList.remove('visible'); setTimeout(() => el.style.display = 'none', 260); }, t); }

    /* Year */
    $('#year').textContent = new Date().getFullYear();

    /* Nav mobile toggle: use class-based slide-in so CSS can animate */
    (function setupNavToggle() {
        const btn = $('#navToggle');
        const list = $('#navList');
        if (!btn || !list) return;

        // create a close button inside the panel (if not present)
        function ensureCloseBtn() {
            if (list.querySelector('.nav-close')) return;
            const close = document.createElement('button');
            close.className = 'nav-close btn icon';
            close.setAttribute('aria-label', 'Fechar menu');
            close.innerHTML = '×';
            close.style.position = 'absolute';
            close.style.top = '12px';
            close.style.right = '12px';
            list.appendChild(close);
            close.addEventListener('click', closeMenu);
        }

        function openMenu() {
            list.classList.add('open');
            document.body.classList.add('nav-open');
            btn.setAttribute('aria-expanded', 'true');
            // create overlay
            if (!document.querySelector('.nav-overlay')) {
                const ov = document.createElement('div');
                ov.className = 'nav-overlay';
                document.body.appendChild(ov);
                ov.addEventListener('click', closeMenu);
                // small fade-in
                requestAnimationFrame(() => ov.classList.add('visible'));
            }
        }

        function closeMenu() {
            list.classList.remove('open');
            document.body.classList.remove('nav-open');
            btn.setAttribute('aria-expanded', 'false');
            const ov = document.querySelector('.nav-overlay');
            if (ov) { ov.classList.remove('visible'); setTimeout(() => ov.remove(), 320); }
        }

        btn.addEventListener('click', (e) => {
            if (list.classList.contains('open')) closeMenu(); else { ensureCloseBtn(); openMenu(); }
        });

        // close nav when a link is clicked (mobile behavior)
        Array.from(list.querySelectorAll('a')).forEach(a => a.addEventListener('click', (ev) => {
            // if link is anchor to same page we still close menu
            if (list.classList.contains('open')) closeMenu();
        }));

        // support Escape key to close
        document.addEventListener('keydown', (ev) => { if (ev.key === 'Escape' && list.classList.contains('open')) closeMenu(); });
    })();

    /* Smooth anchor scrolling with offset */
    const OFFSET = 16 + 56; // 1rem + header
    document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => { const href = a.getAttribute('href'); if (!href || href === '#') return; const target = document.querySelector(href); if (target) { e.preventDefault(); const top = target.getBoundingClientRect().top + window.scrollY - OFFSET; window.scrollTo({ top, behavior: 'smooth' }); } }));

    /* Header shrink & back-to-top */
    const header = $('.site-header'); const backTop = $('#backTop'); window.addEventListener('scroll', () => { const y = window.scrollY || window.pageYOffset; header.classList.toggle('scrolled', y > 48); backTop.classList.toggle('visible', y > 600); }, { passive: true }); backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    /* IntersectionObserver reveal & active nav */
    const reveals = $$('.reveal');
    const ro = new IntersectionObserver((entries) => {
        entries.forEach(en => {
            if (en.isIntersecting) {
                en.target.classList.add('in-view'); en.target.style.transitionDelay = '0ms';
                Array.from(en.target.querySelectorAll('.card-item, .post-card, .project-media, .skill-card')).forEach((c, i) => { c.style.transitionDelay = (i * 80) + 'ms'; c.classList.add('in-view'); });
                ro.unobserve(en.target);
            }
        });
    }, { threshold: 0.12 });
    reveals.forEach(r => ro.observe(r));

    const sectionEls = ['hero', 'about', 'resume', 'skills', 'projects', 'blog', 'contact'].map(id => document.getElementById(id)).filter(Boolean);
    const navLinks = Array.from(document.querySelectorAll('ul.nav-list a'));
    const secObs = new IntersectionObserver((entries) => { entries.forEach(e => { if (e.isIntersecting) { const id = e.target.id; navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + id)); } }); }, { threshold: 0.45 });
    sectionEls.forEach(s => secObs.observe(s));

    /* Skills circular animation: initialize strokes and animate when the skills section enters view */
    const skillCards = Array.from(document.querySelectorAll('.skill-card'));
    skillCards.forEach(card => {
        const svg = card.querySelector('svg');
        const progress = svg && svg.querySelector('.progress');
        if (!progress) return;
        const len = progress.getTotalLength();
        progress.style.strokeDasharray = len;
        progress.style.strokeDashoffset = len;
        // store length so we can reference later without recalculating
        card.dataset._skillLen = len;
    });

    (function observeSkillsSection() {
        const skillsSection = document.getElementById('skills');
        if (!skillsSection || !skillCards.length) return;
        const skillsObserver = new IntersectionObserver((entries) => {
            entries.forEach(en => {
                if (!en.isIntersecting) return;
                // animate all skill cards once, with a slight stagger for polish
                skillCards.forEach((card, idx) => {
                    if (card.dataset.animated) return;
                    setTimeout(() => {
                        const svg = card.querySelector('svg');
                        const progress = svg && svg.querySelector('.progress');
                        if (!progress) return;
                        const len = parseFloat(card.dataset._skillLen || (progress.getTotalLength()));
                        const pct = Number(card.getAttribute('data-value') || card.dataset.value || 0);
                        const to = Math.max(0, Math.round(len * (1 - Math.min(100, pct) / 100)));
                        requestAnimationFrame(() => { progress.style.strokeDashoffset = to; });
                        const pctEl = card.querySelector('.pct'); if (pctEl) animateNumber(pctEl, pct, 900);
                        card.dataset.animated = '1';
                    }, idx * 120);
                });
                skillsObserver.unobserve(skillsSection);
            });
        }, { threshold: 0.25 });
        skillsObserver.observe(skillsSection);
    })();

    function animateNumber(el, to, duration) { const start = performance.now(); (function tick(now) { const t = Math.min(1, (now - start) / duration); const v = Math.round(t * to); el.textContent = v + '%'; if (t < 1) requestAnimationFrame(tick); })(start); }

    /* Projects/Posts filtering */
    const posts = Array.from(document.querySelectorAll('.post-card'));
    const postsGrid = $('#postsGrid'); const emptyState = $('#emptyState');
    function filterPosts() { const q = ($('#blogSearch')?.value || '').toLowerCase(); const cat = ($('#blogCategory')?.value || 'all'); let visible = 0; posts.forEach(p => { const text = p.textContent.toLowerCase(); const matchesQ = !q || text.includes(q); const matchesCat = cat === 'all' || (p.querySelector('.muted')?.textContent || '').toLowerCase().includes(cat); p.style.display = (matchesQ && matchesCat) ? '' : 'none'; if (matchesQ && matchesCat) visible++; }); emptyState.style.display = visible ? 'none' : 'block'; }
    $('#blogSearch')?.addEventListener('input', filterPosts); $('#blogCategory')?.addEventListener('change', filterPosts);

    /* Contact form handling */
    const contactForm = $('#contactForm'); contactForm?.addEventListener('submit', function (e) { e.preventDefault(); const name = this.name.value.trim(), email = this.email.value.trim(), message = this.message.value.trim(); const fb = $('#contactFeedback'); fb.style.color = ''; if (!name || !email || !message) { fb.textContent = 'Preencha todos os campos antes de enviar.'; fb.style.color = 'var(--accent)'; return; } if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { fb.textContent = 'Por favor insira um email válido.'; fb.style.color = 'var(--accent)'; return; } fb.textContent = 'A enviar...'; const btn = this.querySelector('button[type="submit"]'); btn.disabled = true; const endpoint = this.dataset.endpoint; if (endpoint) { const fd = new FormData(this); fetch(endpoint, { method: 'POST', body: fd }).then(r => { if (r.ok) { fb.textContent = 'Mensagem enviada. Obrigado!'; contactForm.reset(); } else fb.textContent = 'Erro ao enviar.' }).catch(() => fb.textContent = 'Erro ao enviar.').finally(() => btn.disabled = false); } else { setTimeout(() => { fb.textContent = 'Mensagem enviada. Obrigado! (simulado)'; contactForm.animate([{ transform: 'scale(.995)' }, { transform: 'scale(1)' }], { duration: 300 }); contactForm.reset(); btn.disabled = false; }, 900); } });

    /* Accessibility: enlarge icon buttons hit area */
    Array.from(document.querySelectorAll('.btn.icon')).forEach(b => { b.style.minWidth = '44px'; b.style.minHeight = '44px'; });

    /* Image lazy loading */
    Array.from(document.querySelectorAll('img')).forEach(im => { if (!im.hasAttribute('loading')) im.setAttribute('loading', 'lazy'); if (!im.alt) im.alt = 'Imagem'; });

    /* CV download: verify file exists and provide feedback */
    (function setupCVDownload() {
        const cvBtn = document.getElementById('cvDownload');
        if (!cvBtn) return;
        cvBtn.addEventListener('click', function (ev) {
            const href = cvBtn.getAttribute('href');
            if (!href) return;
            // try a HEAD request to check availability (will fail gracefully)
            ev.preventDefault();
            fetch(href, { method: 'HEAD' }).then(res => {
                if (res.ok) {
                    // file exists -> navigate to href to download
                    window.location.href = href;
                } else {
                    showToast('CV não encontrado. Coloque o ficheiro em "assets/files/".');
                }
            }).catch(() => {
                showToast('CV não encontrado. Coloque o ficheiro em "assets/files/".');
            });
        });
    })();

    /* Initial warm reveals */
    let _heroTypeHandle = null;
    function typeHeroTitle(speed = 100) {
        const el = document.querySelector('.hero-title[data-i18n]');
        if (!el) return;
        const key = el.getAttribute('data-i18n');
        // get the current translation for the active language (with fallbacks)
        const chain = (function () {
            const fallbackChains = { pt: ['pt', 'en'], en: ['en', 'pt'], es: ['es', 'pt', 'en'] };
            return fallbackChains[lang] || [lang, 'pt', 'en'];
        })();
        let text = '';
        for (const c of chain) { if (I18N[c] && I18N[c][key]) { text = I18N[c][key]; break; } }
        if (!text) text = el.dataset.i18nDefault || el.textContent || '';

        // Cancel any previous typing run
        if (_heroTypeHandle) { clearTimeout(_heroTypeHandle); _heroTypeHandle = null; }
        el.textContent = '';
        el.classList.add('typing');
        let i = 0;
        const step = () => {
            if (i <= text.length) {
                el.textContent = text.slice(0, i);
                i++;
                _heroTypeHandle = setTimeout(step, speed);
            } else {
                // leave the cursor blinking; remove typing class after a short pause if desired
                _heroTypeHandle = setTimeout(() => { el.classList.remove('typing'); _heroTypeHandle = null; }, 900);
            }
        };
        step();
    }

    window.addEventListener('load', () => {
        document.querySelectorAll('.reveal').forEach((el, i) => setTimeout(() => el.classList.add('in-view'), i * 100));
        // start typing the hero title at ~100ms per character
        try { typeHeroTitle(100); } catch (e) { /* ignore */ }
    });

})();
