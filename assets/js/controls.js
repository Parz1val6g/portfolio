/* ================================================================
   IMPROVED LANGUAGE SWITCHER & THEME TOGGLE LOGIC
   With localStorage persistence and system preference support
   ================================================================ */

(function initializeControls() {
    'use strict';

    const $ = s => document.querySelector(s);
    const $$ = s => Array.from(document.querySelectorAll(s));

    /* ============================================================
       LANGUAGE SWITCHER - PT | EN
       ============================================================ */
    const LANG_KEY = 'site_lang';
    const SUPPORTED_LANGS = ['pt', 'en'];

    // Get initial language from localStorage or browser/default
    let currentLang = localStorage.getItem(LANG_KEY) ||
        (navigator.language && navigator.language.startsWith('en') ? 'en' : 'pt');

    if (!SUPPORTED_LANGS.includes(currentLang)) currentLang = 'pt';

    function setLanguage(lang) {
        if (!SUPPORTED_LANGS.includes(lang)) return;

        currentLang = lang;
        localStorage.setItem(LANG_KEY, lang);
        document.documentElement.lang = lang === 'pt' ? 'pt-PT' : 'en-US';

        // Update button states
        $$('.lang-option').forEach(btn => {
            const btnLang = btn.getAttribute('data-lang');
            const isActive = btnLang === lang;
            btn.setAttribute('aria-pressed', isActive);

            // Update aria-label for clarity
            if (lang === 'pt') {
                btn.setAttribute('aria-label', btnLang === 'pt' ? 'Português (atual)' : 'English');
            } else {
                btn.setAttribute('aria-label', btnLang === 'pt' ? 'Português' : 'English (current)');
            }
        });

        // Trigger translation update (if you have i18n system)
        // This would call your existing applyLang function
        if (window.applyLang) {
            window.applyLang(lang);
        }

        console.log('[Lang] Switched to:', lang);
    }

    // Initialize language on load
    setLanguage(currentLang);

    // Add click listeners to language buttons
    $$('.lang-option').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    /* ============================================================
       THEME TOGGLE - Dark/Light with System Preference
       ============================================================ */
    const THEME_KEY = 'site_theme';

    // Preference cascade: localStorage > system > default (dark)
    function getInitialTheme() {
        const stored = localStorage.getItem(THEME_KEY);
        if (stored && (stored === 'light' || stored === 'dark')) {
            return stored;
        }

        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            return 'light';
        }

        return 'dark';
    }

    let currentTheme = getInitialTheme();

    function setTheme(theme) {
        if (theme !== 'light' && theme !== 'dark') return;

        currentTheme = theme;
        localStorage.setItem(THEME_KEY, theme);

        // Update HTML class
        if (theme === 'light') {
            document.documentElement.classList.add('light');
        } else {
            document.documentElement.classList.remove('light');
        }

        // Update button state
        const themeToggle = $('#themeToggle');
        if (themeToggle) {
            const isDark = theme === 'dark';
            themeToggle.setAttribute('aria-pressed', isDark);

            // Update aria-label based on current theme
            const label = isDark ? 'Switch to light mode' : 'Switch to dark mode';
            const labelPt = isDark ? 'Mudar para modo claro' : 'Mudar para modo escuro';
            themeToggle.setAttribute('aria-label', currentLang === 'pt' ? labelPt : label);
            themeToggle.setAttribute('title', currentLang === 'pt' ? labelPt : label);
        }

        // Update mobile overlay if it exists
        const overlay = $('.mobile-menu-overlay');
        if (overlay) {
            overlay.setAttribute('data-theme', theme);
        }

        console.log('[Theme] Switched to:', theme);
    }

    // Initialize theme on load
    setTheme(currentTheme);

    // Add click listener to theme toggle
    const themeToggle = $('#themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }

    // Listen for system preference changes (optional but nice)
    if (window.matchMedia) {
        const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
        darkModeQuery.addEventListener('change', (e) => {
            // Only auto-switch if user hasn't set a preference
            if (!localStorage.getItem(THEME_KEY)) {
                setTheme(e.matches ? 'dark' : 'light');
            }
        });
    }

    /* ============================================================
       EXPOSE FUNCTIONS FOR INTEGRATION
       ============================================================ */
    window.setLanguage = setLanguage;
    window.setTheme = setTheme;
    window.currentLang = () => currentLang;
    window.currentTheme = () => currentTheme;

})();
