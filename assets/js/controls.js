


(function () {
    'use strict';
    /* Translations */
    const I18N = {
        pt: {
            'hero.badge': 'Estudante de Engenharia Informática',
            'hero.title': 'Estudante de Engenharia Informática | C, Java & JavaScript | Backend & Full-Stack Development',
            'hero.sub': 'Estudante de Engenharia Informática na ESTGV com experiência em desenvolvimento web (Node.js, React) e programação em C e Java. À procura de oportunidades de estágio em backend e full-stack development.',
            'hero.lead': 'Experiência prática em desenvolvimento de projetos académicos com tecnologias web modernas. Notas de excelência em programação: Estruturas de Dados (18/19.5), POO (18), PINT (18). Procuro estágio onde possa continuar a aprender e contribuir para projetos reais.',
            'hero.projects': 'Ver Projetos', 'hero.cv': 'Ver CV', 'hero.contactnote': 'Respondo em 24h via email / LinkedIn • Mangualde, Portugal', 'hero.cvdownload': 'Descarregar CV',
            'cvpreview.title': 'Curriculum Vitae',
            'cvpreview.lead': 'Visualize o meu CV completo abaixo ou descarregue em PDF.',
            'cvpreview.download': 'Descarregar PDF',
            'about.title': 'Sobre Mim',
            'about.p1': 'Estudante de Engenharia Informática na ESTGV (Instituto Politécnico de Viseu), com forte interesse em programação em C e Java e experiência em desenvolvimento web com backend em Node.js/Sequelize e frontend em React. Terminei o ensino profissional em Gestão e Programação de Sistemas Informáticos com 18 valores e um projeto final (PAP - EptoKiosk) avaliado em 20 valores — a melhor nota do curso.',
            'about.p2': 'Na licenciatura tenho mantido excelentes classificações em cadeiras de programação: Estruturas de Dados (18 valores - nota final, 19.5 valores - projeto), Programação Orientada a Objetos (18 valores), e Projeto Integrado do 2.º ano - PINT (18 valores, desenvolvido com backend em Node.js/Sequelize e frontend em React). Tenho também experiência prática em desenvolvimento de software industrial em C# e configuração de redes Ethernet. Estou aberto a oportunidades de estágio onde possa continuar a aprender, contribuir para projetos reais e explorar diferentes áreas dentro da engenharia informática.',
            'about.subtitle': 'Resumo Académico & Formações',
            'edu.institution': 'Instituto Politécnico de Viseu',
            'edu.azure': 'Virtualização, Sistemas Operativos e Redes',
            'edu.pint': 'SPLNET: Software C# para automação industrial, redes Ethernet e videovigilância',
            'resume.title': 'Currículo', 'resume.education': 'Educação', 'resume.education.detail': 'Programação (Java, C/C++), Redes, Bases de Dados, Engenharia de Software.', 'resume.lab.azure': 'Azure Labs: deploy, serverless, bancos de dados', 'resume.lab.devops': 'Workshops: Docker, GitHub Actions, testes', 'resume.experience': 'Experiência', 'resume.position': 'Colaborador académico / Desenvolvedor', 'resume.experience.detail': 'Desenvolvimento de backends, integração com BD e pipelines CI/CD',
            'nav.about': 'Sobre', 'nav.resume': 'Currículo', 'nav.skills': 'Skills', 'nav.projects': 'Projetos', 'nav.contact': 'Contacto', 'nav.cvpreview': 'Ver CV',
            'skill.cjava': 'Linguagens de programação core, estruturas de dados, algoritmos',
            'skill.jsnode': 'Desenvolvimento backend, APIs, Sequelize ORM',
            'skill.react': 'Desenvolvimento de UI baseado em componentes, design responsivo',
            'skill.php': 'Desenvolvimento web, projetos full-stack',
            'skill.csharp': 'Software industrial, comunicação serial/IP, redes Ethernet',
            'filter.technology': 'Tecnologia',
            'filter.origin': 'Origem',
            'filter.clear': 'Limpar filtros',
            'filter.noResults': 'Nenhum projeto encontrado com estes filtros.',
            // Education section
            'edu.ipv.title': 'Licenciatura em Engenharia Informática — IPV',
            'edu.ipv.period': '2023 — Presente',
            'edu.ipv.details': 'Destaques: Estruturas de Dados (18), Programação Orientada a Objetos (18), Projeto Integrado 2.º ano (18)',
            'edu.eptoliva.title': 'Gestão e Programação de Sistemas Informáticos — EPTOLIVA',
            'edu.eptoliva.period': '2020 — 2023',
            'edu.eptoliva.grade': 'Nota final: 18 valores | Nível 4 QNQ/QEQ',
            'edu.eptoliva.pap': 'PAP - EptoKiosk: 20 valores (melhor nota do curso)',
            'edu.eptoliva.certs': 'Certificações: Diploma de Ensino Secundário (Curso Profissional) + Certificado de Qualificações',
            'certifications.title': 'Certificações',
            'edu.graduatestudent.title': 'Graduate Student',
            'edu.graduatestudent.org': 'Instituto Politécnico de Viseu',
            'edu.graduatestudent.period': 'Set 2023 - Presente',
            'edu.graduatestudent.desc': 'Virtualização de desktops, sistemas operativos e infraestruturas de rede.',
            'edu.technic.title': 'Computer and Network Technician (Intern)',
            'edu.technic.org': 'SPLNET, LDA',
            'edu.technic.period': 'Dez 2022',
            'edu.technic.desc': 'Desenvolvi software em C# para controlo industrial de captura 360º com comunicação serial/IP. Instalações de redes Ethernet, videovigilância (NVR/DVR) e acessos remotos.',
            'edu.intern.title': 'Student Intern',
            'edu.intern.org': 'Mixlife - Digital Agency',
            'edu.intern.period': 'Jan-Fev 2022',
            'edu.intern.desc': 'Desenvolvimento web com HTML, CSS, JavaScript e PHP.',
            'edu.student.title': 'Aluno',
            'edu.student.org': 'EPTOLIVA',
            'edu.student.period': 'Jan 2021 - Out 2023',
            'edu.student.desc': 'Formação em Gestão e Programação de Sistemas Informáticos.',
            // Contact section
            'contact.info': 'Informação',
            'contact.email': 'Email:',
            'contact.phone': 'Telefone:',
            'contact.github': 'GitHub:',
            'contact.linkedin': 'LinkedIn:',
            'contact.location': 'Local:',
            'footer.credit': 'Desenvolvido com a ajuda do navegador Comet e da aplicação Antigravity.',
            'cert.verify': 'Verificar no Passaporte Qualifica ↗',
            'project.default': 'Projeto sem descrição',
            'skills.title': 'Skills', 'skills.lead': 'Competências principais com percentagens representadas visualmente.', 'projects.title': 'Projetos', 'projects.lead': 'Projetos académicos e pessoais com foco em backend, APIs e Azure.', 'blog.title': 'Blog & Artigos', 'contact.title': 'Contacto', 'contact.response': 'Respondo em 24h via email/LinkedIn', 'form.name': 'Nome', 'form.email': 'Email', 'form.message': 'Mensagem', 'form.send': 'Enviar', 'form.clear': 'Limpar', 'footer.name': 'Joel Tavares Martins', 'footer.rights': 'Todos os direitos reservados.', 'project.api.title': 'API de Gestão Académica', 'project.api.tech': 'Java (Spring Boot) • PostgreSQL • Docker • Azure WebApp', 'project.pint.title': 'Pipeline PINT / J.A.R.V.I.S.', 'project.pint.tech': 'Node.js • GitHub Actions • Testes • IaC', 'project.auth.title': 'Microserviço de Autenticação', 'project.auth.tech': 'Express.js • JWT • PostgreSQL • Docker', 'project.action.github': 'GitHub', 'project.action.demo': 'Demo', 'blog.search.placeholder': 'Procurar artigos, tutoriais...'
        },
        en: {
            'hero.badge': 'Computer Engineering Student',
            'hero.title': 'Computer Engineering Student | C, Java & JavaScript | Backend & Full-Stack Development',
            'hero.sub': 'Computer Engineering student at ESTGV with experience in web development (Node.js, React) and C and Java programming. Looking for internship opportunities in backend and full-stack development.',
            'hero.lead': 'Practical experience developing academic projects with modern web technologies. Excellence in programming: Data Structures (18/19.5), OOP (18), PINT (18). Looking for internship where I can continue learning and contribute to real projects.',
            'hero.projects': 'View Projects', 'hero.cv': 'View CV', 'hero.contactnote': 'I reply within 24h via email / LinkedIn • Mangualde, Portugal', 'hero.cvdownload': 'Download CV',
            'cvpreview.title': 'Curriculum Vitae',
            'cvpreview.lead': 'View my complete CV below or download as PDF.',
            'cvpreview.download': 'Download PDF',
            'about.title': 'About Me',
            'about.p1': 'Computer Engineering student at ESTGV (Polytechnic Institute of Viseu), with a strong interest in C and Java programming and experience in web development with backend in Node.js/Sequelize and frontend in React. I completed vocational education in IT Systems Management and Programming with a grade of 18 and a final project (PAP - EptoKiosk) graded 20 — the highest grade in the course.',
            'about.p2': 'Throughout my degree, I have maintained excellent performance in programming courses: Data Structures (18 - final grade, 19.5 - project), Object-Oriented Programming (18), and 2nd Year Integrated Project - PINT (18, developed with backend in Node.js/Sequelize and frontend in React). I also have practical experience in industrial software development in C# and Ethernet network configuration. I am open to internship opportunities where I can continue learning, contribute to real projects, and explore different areas within computer engineering.',
            'about.subtitle': 'Academic Summary & Background',
            'edu.institution': 'Polytechnic Institute of Viseu',
            'edu.azure': 'Virtualization, Operating Systems and Networks',
            'edu.pint': 'SPLNET: C# software for industrial automation, Ethernet networks and video surveillance',
            'resume.title': 'Resume', 'resume.education': 'Education', 'resume.education.detail': 'Programming (Java, C/C++), Networks, Databases, Software Engineering.', 'resume.lab.azure': 'Azure Labs: deploy, serverless, databases', 'resume.lab.devops': 'Workshops: Docker, GitHub Actions, testing', 'resume.experience': 'Experience', 'resume.position': 'Academic collaborator / Developer', 'resume.experience.detail': 'Backend development, DB integration and CI/CD pipelines',
            'nav.about': 'About', 'nav.resume': 'Resume', 'nav.skills': 'Skills', 'nav.projects': 'Projects', 'nav.contact': 'Contact', 'nav.cvpreview': 'View CV',
            'skill.cjava': 'Core programming languages, data structures, algorithms',
            'skill.jsnode': 'Backend development, APIs, Sequelize ORM',
            'skill.react': 'Component-based UI development, responsive design',
            'skill.php': 'Web development, full-stack projects',
            'skill.csharp': 'Industrial software, serial/IP communication, Ethernet networks',
            'filter.technology': 'Technology',
            'filter.origin': 'Origin',
            'filter.clear': 'Clear filters',
            'filter.noResults': 'No projects found with these filters.',
            // Education section
            'edu.ipv.title': 'Bachelor in Computer Engineering — IPV',
            'edu.ipv.period': '2023 — Present',
            'edu.ipv.details': 'Highlights: Data Structures (18), Object-Oriented Programming (18), 2nd Year Integrated Project (18)',
            'edu.eptoliva.title': 'IT Systems Management and Programming — EPTOLIVA',
            'edu.eptoliva.period': '2020 — 2023',
            'edu.eptoliva.grade': 'Final grade: 18/20 | Level 4 NQF/EQF',
            'edu.eptoliva.pap': 'Final Project - EptoKiosk: 20/20 (highest grade in the course)',
            'edu.eptoliva.certs': 'Certifications: Professional Secondary Education Diploma + Qualifications Certificate',
            'certifications.title': 'Certifications',
            'edu.graduatestudent.title': 'Graduate Student',
            'edu.graduatestudent.org': 'Polytechnic Institute of Viseu',
            'edu.graduatestudent.period': 'Sep 2023 - Present',
            'edu.graduatestudent.desc': 'Desktop virtualization, operating systems and network infrastructures.',
            'edu.technic.title': 'Computer and Network Technician (Intern)',
            'edu.technic.org': 'SPLNET, LDA',
            'edu.technic.period': 'Dec 2022',
            'edu.technic.desc': 'Developed C# software for industrial 360º capture control with serial/IP communication. Ethernet network installations, video surveillance (NVR/DVR) and remote access.',
            'edu.intern.title': 'Student Intern',
            'edu.intern.org': 'Mixlife - Digital Agency',
            'edu.intern.period': 'Jan-Feb 2022',
            'edu.intern.desc': 'Web development with HTML, CSS, JavaScript and PHP.',
            'edu.student.title': 'Student',
            'edu.student.org': 'EPTOLIVA',
            'edu.student.period': 'Jan 2021 - Oct 2023',
            'edu.student.desc': 'IT Systems Management and Programming training.',
            // Contact section
            'contact.info': 'Information',
            'contact.email': 'Email:',
            'contact.phone': 'Phone:',
            'contact.github': 'GitHub:',
            'contact.linkedin': 'LinkedIn:',
            'contact.location': 'Location:',
            'footer.credit': 'Developed with the help of Comet browser and Antigravity application.',
            'cert.verify': 'Verify on Passaporte Qualifica ↗',
            'project.default': 'Project without description',
            'skills.title': 'Skills', 'skills.lead': 'Core competencies with percentages visualised.', 'projects.title': 'Projects', 'projects.lead': 'Academic and personal projects focused on backend, APIs and Azure.', 'blog.title': 'Blog & Articles', 'contact.title': 'Contact', 'contact.response': 'I reply within 24h via email/LinkedIn', 'form.name': 'Name', 'form.email': 'Email', 'form.message': 'Message', 'form.send': 'Send', 'form.clear': 'Clear', 'footer.name': 'Joel Tavares Martins', 'footer.rights': 'All rights reserved.', 'project.api.title': 'Academic Management API', 'project.api.tech': 'Java (Spring Boot) • PostgreSQL • Docker • Azure WebApp', 'project.pint.title': 'PINT / J.A.R.V.I.S. Pipeline', 'project.pint.tech': 'Node.js • GitHub Actions • Testing • IaC', 'project.auth.title': 'Authentication Microservice', 'project.auth.tech': 'Express.js • JWT • PostgreSQL • Docker', 'project.action.github': 'GitHub', 'project.action.demo': 'Demo', 'blog.search.placeholder': 'Search posts, tutorials...'
        },
        es: {}
    };

    // Expose I18N globally for other scripts
    window.I18N = I18N;

    // Load external translations from JSON file
    async function loadTranslations() {
        try {
            const response = await fetch('assets/data/translations.json');
            if (!response.ok) return;

            const data = await response.json();

            // Merge project translations into I18N
            if (data.projects) {
                Object.entries(data.projects.pt || {}).forEach(([key, value]) => {
                    I18N.pt[`project.${key}`] = value;
                });
                Object.entries(data.projects.en || {}).forEach(([key, value]) => {
                    I18N.en[`project.${key}`] = value;
                });
            }

            // Merge site translations
            if (data.site) {
                Object.assign(I18N.pt, data.site.pt || {});
                Object.assign(I18N.en, data.site.en || {});
            }

            console.log('[i18n] Loaded external translations:',
                Object.keys(data.projects?.pt || {}).length, 'projects');
        } catch (error) {
            console.warn('[i18n] Could not load external translations:', error.message);
        }
    }

    // Load translations before initializing
    loadTranslations().then(() => {
        console.log('[i18n] Ready');
    });

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
        // If mobile overlay exists, update its contents to reflect new language
        try { if (window._updateMobileOverlay) window._updateMobileOverlay(); } catch (e) { /* ignore */ }
        // Update project descriptions
        try { if (window._updateProjectDescriptions) window._updateProjectDescriptions(); } catch (e) { /* ignore */ }
    }
    applyLang(localStorage.getItem(LANG_KEY) || lang);

    /* CV Preview: Update iframe when language changes */
    function updateCVPath() {
        const cvIframe = document.getElementById('cvIframe');
        const cvDownloadBtn = document.getElementById('cvDownloadFromPreview');

        // Set CV path based on current language  
        const cvFile = (lang === 'en') ? 'cv_eng.pdf' : 'cv_pt.pdf';
        const cvPath = `assets/files/${cvFile}`;

        if (cvIframe) cvIframe.setAttribute('src', cvPath);
        if (cvDownloadBtn) cvDownloadBtn.setAttribute('href', cvPath);
    }

    // Call on initial load
    updateCVPath();

    // Expose updateCVPath globally so language toggle can call it
    window.updateCVPath = updateCVPath;

    // Wrap applyLang to also update CV when language changes
    const originalApplyLang = applyLang;
    applyLang = function (l) {
        originalApplyLang(l);
        updateCVPath();
    };

    // Expose applyLang globally for language toggle
    window.applyLang = applyLang;

    // NEW: Setup language buttons (PT | EN)
    (function setupLangToggle() {
        const langButtons = $$('.lang-option');
        if (!langButtons || langButtons.length === 0) return;

        // Update button states based on current language
        function updateLangButtons(currentLang) {
            langButtons.forEach(btn => {
                const btnLang = btn.getAttribute('data-lang');
                const isActive = btnLang === currentLang;
                btn.setAttribute('aria-pressed', String(isActive));
            });
        }

        // Initialize button states
        updateLangButtons(lang);

        // Add click handlers
        langButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const newLang = btn.getAttribute('data-lang');
                if (newLang && (newLang === 'pt' || newLang === 'en')) {
                    applyLang(newLang);
                    updateLangButtons(newLang);
                }
            });
        });
    })();


    /* Theme */
    const THEME_KEY = 'site_theme';
    let theme = localStorage.getItem(THEME_KEY) || 'dark';
    function applyTheme(t) {
        if (t === 'light') document.documentElement.classList.add('light'); else document.documentElement.classList.remove('light');
        // Update both old and new theme toggle buttons
        const dt = $('#darkToggle');
        const tt = $('#themeToggle');
        if (dt) dt.setAttribute('aria-pressed', String(t !== 'light'));
        if (tt) tt.setAttribute('aria-pressed', String(t === 'dark'));
        localStorage.setItem(THEME_KEY, t);
        // update overlay attribute so CSS can react immediately
        try {
            const ov = document.querySelector('.mobile-menu-overlay');
            if (ov) ov.setAttribute('data-theme', document.documentElement.classList.contains('light') ? 'light' : 'dark');
        } catch (e) { /* ignore */ }
        try { if (window._updateMobileOverlay) window._updateMobileOverlay(); } catch (e) { /* ignore */ }
    }
    applyTheme(localStorage.getItem(THEME_KEY) || theme);

    // Handle both old and new theme toggle buttons
    const _hdrThemeBtn = $('#darkToggle') || $('#themeToggle');
    const _newThemeBtn = $('#themeToggle');

    if (_hdrThemeBtn) {
        _hdrThemeBtn.addEventListener('click', () => {
            console.debug('[theme] header toggle clicked');
            theme = document.documentElement.classList.contains('light') ? 'dark' : 'light';
            applyTheme(theme);
            showToast(theme === 'dark' ? 'Modo escuro ativado' : 'Modo claro ativado');
        });
    }

    if (_newThemeBtn && _newThemeBtn !== _hdrThemeBtn) {
        _newThemeBtn.addEventListener('click', () => {
            console.debug('[theme] new toggle clicked');
            theme = document.documentElement.classList.contains('light') ? 'dark' : 'light';
            applyTheme(theme);
            showToast(theme === 'dark' ? 'Modo escuro ativado' : 'Modo claro ativado');
        });
    }

    /* Toast helper */
    function showToast(msg, t = 2000) { const el = $('#toast-instance'); el.style.display = 'block'; el.textContent = msg; el.classList.add('visible'); clearTimeout(el._to); el._to = setTimeout(() => { el.classList.remove('visible'); setTimeout(() => el.style.display = 'none', 260); }, t); }

    /* Year */
    $('#year').textContent = new Date().getFullYear();

    /* Nav mobile toggle: use class-based slide-in so CSS can animate */
    (function setupNavToggle() {
        const btn = $('#navToggle');
        const list = $('#navList');
        const langBtn = $('#langToggle');
        const themeBtn = $('#darkToggle');
        if (!btn || !list) return;

        console.debug('[nav] setupNavToggle init', { btn: !!btn, list: !!list, langBtn: !!langBtn, themeBtn: !!themeBtn });

        // Build full-screen mobile overlay when needed
        function buildOverlay() {
            try {
                const existing = document.querySelector('.mobile-menu-overlay');
                if (existing) return existing;
                const ov = document.createElement('div');
                ov.className = 'mobile-menu-overlay';
                ov.innerHTML = `
                <button class="mobile-close" aria-label="Fechar menu">×</button>
                <nav class="mobile-nav" role="navigation" aria-label="Menu móvel"></nav>
            `;
                document.body.appendChild(ov);
                return ov;
            } catch (err) {
                console.error('[nav] buildOverlay failed', err);
                return null;
            }
        }

        function openMenu() {
            try {
                const ov = buildOverlay();
                if (!ov) {
                    console.warn('[nav] overlay unavailable, falling back to toggling #navList');
                    // fallback: toggle inline navList for older devices
                    list.style.display = list.style.display === 'flex' ? 'none' : 'flex';
                    btn.setAttribute('aria-expanded', list.style.display === 'flex');
                    return;
                }

                // populate nav links by cloning existing navList links
                const nav = ov.querySelector('.mobile-nav');
                nav.innerHTML = '';
                Array.from(list.querySelectorAll('a')).forEach(a => {
                    const link = document.createElement('a');
                    const href = a.getAttribute('href') || '#';
                    link.href = href;
                    // preserve i18n keys so applyLang updates cloned links live
                    const key = a.getAttribute('data-i18n');
                    if (key) link.setAttribute('data-i18n', key);
                    // store a default fallback for immediate visibility
                    link.dataset.i18nDefault = a.textContent.trim() || '';
                    link.setAttribute('data-href', href);
                    link.className = 'mobile-nav-link';
                    // show something until translations are applied
                    link.textContent = a.textContent.trim();
                    nav.appendChild(link);
                });

                ov.classList.add('active');
                document.body.classList.add('nav-open');
                btn.setAttribute('aria-expanded', 'true');

                // wire close and backdrop (remove duplicates first)
                const closeBtn = ov.querySelector('.mobile-close');
                if (closeBtn) {
                    closeBtn.removeEventListener('click', closeMenu);
                    closeBtn.addEventListener('click', closeMenu);
                }
                ov.removeEventListener('click', overlayBackdropHandler);
                ov.addEventListener('click', overlayBackdropHandler);

                // Wire nav links to close and navigate
                // DISABLED: comprehensive-fixes.js handles mobile links now
                /*
                Array.from(nav.querySelectorAll('.mobile-nav-link')).forEach(l => {
                    l.removeEventListener('click', mobileNavLinkHandler);
                    l.addEventListener('click', mobileNavLinkHandler);
                });
                */

                // focus management: move focus to first link
                const first = nav.querySelector('.mobile-nav-link'); if (first) first.focus();

                // ensure overlay texts & toggles reflect current state immediately
                if (window._updateMobileOverlay) window._updateMobileOverlay();

                // ESC to close
                document.addEventListener('keydown', escHandler);
                console.debug('[nav] menu opened');
            } catch (err) {
                console.error('[nav] openMenu error', err);
            }
        }

        function closeMenu() {
            try {
                const ov = document.querySelector('.mobile-menu-overlay');
                if (!ov) return;
                ov.classList.remove('active');
                document.body.classList.remove('nav-open');
                btn.setAttribute('aria-expanded', 'false');
                document.removeEventListener('keydown', escHandler);
                console.debug('[nav] menu closed');
            } catch (err) {
                console.error('[nav] closeMenu error', err);
            }
        }

        function escHandler(ev) { if (ev.key === 'Escape') closeMenu(); }

        function overlayBackdropHandler(ev) { if (ev.target === ev.currentTarget) closeMenu(); }

        function mobileNavLinkHandler(e) {
            // Stop propagation to prevent global anchor handler from interfering
            e.preventDefault();
            e.stopPropagation();

            const h = e.currentTarget.getAttribute('data-href') || e.currentTarget.getAttribute('href');

            console.debug('[nav] mobile nav link clicked:', h);

            // Close menu first
            closeMenu();

            // Then navigate
            if (h && h.startsWith('#') && h !== '#') {
                // Small delay to let menu close smoothly
                setTimeout(() => {
                    const target = document.querySelector(h);
                    if (target) {
                        const top = target.getBoundingClientRect().top + window.scrollY - (16 + 56);
                        window.scrollTo({ top, behavior: 'smooth' });
                    }
                }, 100);
            } else if (h && h !== '#') {
                setTimeout(() => {
                    window.location.href = h;
                }, 100);
            }
        }

        // expose helper to refresh overlay labels and ensure translations update
        window._updateMobileOverlay = function () {
            try {
                const ov = document.querySelector('.mobile-menu-overlay');
                if (!ov) return;
                // update toggles labels to reflect current header state
                const hdrLang = document.getElementById('langToggle');
                const hdrTheme = document.getElementById('darkToggle');
                const mobileLangBtn = ov.querySelector('.mobile-lang');
                const mobileThemeBtn = ov.querySelector('.mobile-theme');
                if (mobileLangBtn && hdrLang) mobileLangBtn.textContent = hdrLang.textContent;
                if (mobileThemeBtn && hdrTheme) mobileThemeBtn.textContent = hdrTheme.textContent || (document.documentElement.classList.contains('light') ? '☀️' : '🌙');
                // ensure overlay carries theme state for CSS selectors
                try { ov.setAttribute('data-theme', document.documentElement.classList.contains('light') ? 'light' : 'dark'); } catch (e) { /* ignore */ }
                // run applyLang to update any elements (cloned anchors carry data-i18n)
                try { applyLang(localStorage.getItem(LANG_KEY) || lang); } catch (e) { /* ignore */ }
            } catch (err) { console.error('[nav] _updateMobileOverlay error', err); }
        };

        btn.addEventListener('click', (e) => {
            // visual flash to confirm click fired (temporary for debugging)
            try { btn.classList.add('clicked-flash'); setTimeout(() => btn.classList.remove('clicked-flash'), 300); } catch (e) { /* ignore */ }
            try { if (document.querySelector('.mobile-menu-overlay')?.classList.contains('active')) closeMenu(); else openMenu(); } catch (err) { console.error('[nav] toggle click error', err); }
        });
    })();

    /* Smooth anchor scrolling with offset */
    const OFFSET = 16 + 56; // 1rem + header
    document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
        // Skip mobile nav links - they have their own handler
        if (a.classList.contains('mobile-nav-link')) return;

        const href = a.getAttribute('href');
        if (!href || href === '#') return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const top = target.getBoundingClientRect().top + window.scrollY - OFFSET;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    }));

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

    /* Contact form handling with Formspree integration */
    const contactForm = $('#contactForm');
    contactForm?.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form values
        const name = this.name.value.trim();
        const email = this.email.value.trim();
        const message = this.message.value.trim();
        const fb = $('#contactFeedback');
        const btn = this.querySelector('button[type="submit"]');

        // Reset feedback styling
        fb.style.color = '';

        // Validation messages (bilingual support)
        const messages = {
            pt: {
                allFields: 'Preencha todos os campos antes de enviar.',
                invalidEmail: 'Por favor insira um email válido.',
                sending: 'A enviar...',
                success: 'Mensagem enviada. Obrigado!',
                error: 'Erro ao enviar. Por favor, tente novamente.'
            },
            en: {
                allFields: 'Please fill in all fields before submitting.',
                invalidEmail: 'Please enter a valid email address.',
                sending: 'Sending...',
                success: 'Message sent. Thank you!',
                error: 'Error sending message. Please try again.'
            }
        };

        // Get current language (default to 'pt' if not set)
        const currentLang = localStorage.getItem('site_lang') || 'pt';
        const msg = messages[currentLang] || messages.pt;

        // Validate required fields
        if (!name || !email || !message) {
            fb.textContent = msg.allFields;
            fb.style.color = 'var(--accent)';
            return;
        }

        // Validate email format
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            fb.textContent = msg.invalidEmail;
            fb.style.color = 'var(--accent)';
            return;
        }

        // Validate Turnstile captcha (if enabled)
        const captchaResponse = document.querySelector('[name="cf-turnstile-response"]');
        if (captchaResponse && !captchaResponse.value) {
            // Captcha not completed
            const captchaMsg = currentLang === 'pt'
                ? 'Por favor, complete a verificação de segurança (captcha).'
                : 'Please complete the security verification (captcha).';
            fb.textContent = captchaMsg;
            fb.style.color = 'var(--accent)';
            btn.disabled = false;
            return;
        }

        // Show sending status
        fb.textContent = msg.sending;
        fb.style.color = '';
        btn.disabled = true;

        // Get Web3Forms endpoint from data attribute
        const endpoint = this.dataset.endpoint || this.action;

        if (endpoint && endpoint.includes('web3forms.com')) {
            console.log('[Contact Form] Submitting to Web3Forms:', endpoint);

            // Use fetch with Accept: application/json header
            // Web3Forms returns JSON response: { success: true/false, message: "..." }
            const formData = new FormData(this);

            fetch(endpoint, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
                .then(response => {
                    console.log('[Contact Form] Response status:', response.status);
                    return response.json();
                })
                .then(data => {
                    console.log('[Contact Form] Response data:', data);

                    if (data.success) {
                        // Success - Web3Forms returns { success: true }
                        console.log('[Contact Form] ✅ Submission successful!');
                        fb.textContent = msg.success;
                        fb.style.color = 'var(--success, #10b981)';

                        // Animate form on success
                        contactForm.animate(
                            [{ transform: 'scale(.995)' }, { transform: 'scale(1)' }],
                            { duration: 300 }
                        );

                        // Clear form fields
                        contactForm.reset();
                    } else {
                        // Web3Forms error response
                        console.error('[Contact Form] ❌ Error from Web3Forms:', data);
                        fb.textContent = data.message || msg.error;
                        fb.style.color = 'var(--accent)';
                    }
                })
                .catch(error => {
                    // Network or parsing error
                    console.error('[Contact Form] ❌ Submission error:', error);
                    fb.textContent = msg.error;
                    fb.style.color = 'var(--accent)';
                })
                .finally(() => {
                    // Re-enable submit button
                    btn.disabled = false;
                });
        } else {
            // Fallback: no endpoint configured (should not happen with proper setup)
            setTimeout(() => {
                fb.textContent = msg.success + ' (simulado - configure o endpoint)';
                fb.style.color = 'var(--muted)';
                contactForm.reset();
                btn.disabled = false;
            }, 900);
        }
    });


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

    /* ========================================
       GITHUB PROJECTS: Dynamic loading & filtering
       ======================================== */

    // Configuration - change this to your GitHub organization
    const GITHUB_ORG = 'joel-portfolio';

    // Utility: Generate a placeholder image based on the project name
    function getProjectPlaceholder(name) {
        const colors = ['1d3557', '457b9d', 'a8dadc', 'e63946', 'f1faee'];
        const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        const color = colors[hash % colors.length];
        return `https://via.placeholder.com/1200x675/${color}/ffffff?text=${encodeURIComponent(name)}`;
    }

    // Generate consistent gradient from project name
    function getProjectGradient(name) {
        const gradients = [
            'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
            'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
            'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
            'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
            'linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%)'
        ];
        const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        return gradients[hash % gradients.length];
    }

    // Determine project type/origin from topics or name
    function getProjectBadge(project) {
        const name = project.name.toLowerCase();
        const topics = project.topics.map(t => t.toLowerCase());

        // Check topics for origin clues
        if (topics.includes('pap') || name.includes('pap')) {
            return 'PAP';
        }
        if (topics.includes('academic') || topics.includes('school') || topics.includes('university')) {
            return 'Académico';
        }
        if (topics.includes('personal') || topics.includes('portfolio')) {
            return 'Pessoal';
        }

        // Check name patterns
        if (name.includes('pint') || name.includes('se-') || name.includes('se_')) {
            return 'Académico';
        }
        if (name.includes('2-ano') || name.includes('ano-lei')) {
            return 'Académico';
        }

        return 'Projeto';
    }

    // Fetch repositories from GitHub organization
    async function fetchGitHubProjects() {
        try {
            const response = await fetch(`https://api.github.com/orgs/${GITHUB_ORG}/repos?sort=updated&per_page=100`);
            if (!response.ok) {
                throw new Error(`GitHub API returned ${response.status}`);
            }
            const repos = await response.json();

            // Transform repos into project objects
            return repos.filter(repo => !repo.fork && !repo.archived).map(repo => ({
                name: repo.name,
                description: repo.description || 'Projeto sem descrição',
                url: repo.html_url,
                homepage: repo.homepage,
                topics: repo.topics || [],
                language: repo.language,
                stars: repo.stargazers_count,
                updated: new Date(repo.updated_at)
            }));
        } catch (error) {
            console.error('[GitHub] Error fetching projects:', error);
            showToast('Erro ao carregar projetos do GitHub', 3000);
            return [];
        }
    }

    // Helper: Get translated project description
    function getProjectDescription(projectName, githubDescription) {
        const key = `project.${projectName}`;
        const fallbackChains = { pt: ['pt', 'en'], en: ['en', 'pt'], es: ['es', 'pt', 'en'] };
        const chain = fallbackChains[lang] || [lang, 'pt', 'en'];

        // Try to find translation
        for (const c of chain) {
            if (I18N[c] && I18N[c][key]) return I18N[c][key];
        }

        // Fallback to GitHub description if available
        if (githubDescription) return githubDescription;

        // Fallback to default message
        const defaultKey = 'project.default';
        for (const c of chain) {
            if (I18N[c] && I18N[c][defaultKey]) return I18N[c][defaultKey];
        }
        return 'Project without description';
    }

    // Render a single project card
    function renderProjectCard(project) {
        const article = document.createElement('article');
        article.className = 'card-item project-card reveal in-view';
        article.dataset.topics = JSON.stringify(project.topics);
        article.dataset.projectName = project.name; // Store for re-rendering on language change
        article.dataset.githubDescription = project.description || ''; // Store GitHub description as fallback

        // Generate gradient, format project name, and get badge
        const gradient = getProjectGradient(project.name);
        const projectName = project.name.replace(/-/g, ' ');
        const projectBadge = getProjectBadge(project);

        // Build tech tags from topics + language (limit to 4, exclude meta topics)
        const excludeTopics = ['pap', 'academic', 'school', 'personal', 'portfolio', 'university'];
        const techItems = [];
        if (project.language) techItems.push(project.language);
        const filteredTopics = project.topics.filter(t => !excludeTopics.includes(t.toLowerCase()));
        techItems.push(...filteredTopics);

        const techTags = techItems.slice(0, 4).map(tag =>
            `<span class="project-tag">${tag}</span>`
        ).join('');

        // Get translated description (with GitHub description as fallback)
        const description = getProjectDescription(project.name, project.description);

        article.innerHTML = `
            <div class="project-header" style="background: ${gradient}">
                <span class="project-name">${projectName}</span>
                <span class="project-badge">${projectBadge}</span>
            </div>
            <div class="project-content">
                <p class="project-description">${description}</p>
                ${techTags ? `<div class="project-tags">${techTags}</div>` : ''}
            </div>
            <div class="project-actions">
                <a class="btn ghost" href="${project.url}" target="_blank" rel="noopener" data-i18n="project.action.github">GitHub</a>
                ${project.homepage ? `<a class="btn primary" href="${project.homepage}" target="_blank" rel="noopener" data-i18n="project.action.demo">Demo</a>` : ''}
            </div>
        `;

        return article;
    }

    // Extract unique topics from all projects
    function extractTopics(projects) {
        const topicsSet = new Set();
        projects.forEach(p => {
            p.topics.forEach(t => topicsSet.add(t));
        });
        return Array.from(topicsSet).sort();
    }

    // Render filter buttons
    function renderFilters(topics) {
        const filtersContainer = $('#projectFilters');
        if (!filtersContainer) return;

        // Clear existing filters except "Todos" button
        filtersContainer.innerHTML = '<button class="btn ghost small filter-btn active" data-filter="all">Todos</button>';

        // Add filter button for each topic
        topics.forEach(topic => {
            const btn = document.createElement('button');
            btn.className = 'btn ghost small filter-btn';
            btn.dataset.filter = topic;
            btn.textContent = topic;
            btn.addEventListener('click', () => filterProjects(topic));
            filtersContainer.appendChild(btn);
        });

        // Add click handler to "Todos" button
        const allBtn = filtersContainer.querySelector('[data-filter="all"]');
        if (allBtn) {
            allBtn.addEventListener('click', () => filterProjects('all'));
        }
    }

    // Filter projects by topic
    function filterProjects(topic) {
        const projectCards = Array.from(document.querySelectorAll('#projectsGrid .card-item[data-topics]'));
        const filterBtns = Array.from(document.querySelectorAll('.filter-btn'));

        // Update active state on buttons
        filterBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === topic);
        });

        // Show/hide projects based on topic
        let visibleCount = 0;
        projectCards.forEach(card => {
            const topics = JSON.parse(card.dataset.topics || '[]');
            const matches = topic === 'all' || topics.includes(topic);
            card.style.display = matches ? '' : 'none';
            if (matches) visibleCount++;
        });

        // Show empty state if no projects match
        const grid = $('#projectsGrid');
        let emptyState = grid.querySelector('.empty-state');
        if (visibleCount === 0) {
            if (!emptyState) {
                emptyState = document.createElement('div');
                emptyState.className = 'card-item empty-state';
                emptyState.style.cssText = 'grid-column: 1 / -1; text-align:center; padding:2rem';
                emptyState.innerHTML = '<p class="muted">Nenhum projeto encontrado com este tópico.</p>';
                grid.appendChild(emptyState);
            }
        } else {
            if (emptyState) emptyState.remove();
        }
    }

    // Main: Load and render GitHub projects
    async function initGitHubProjects() {
        const grid = $('#projectsGrid');
        if (!grid) return;

        try {
            // Fetch projects
            const projects = await fetchGitHubProjects();

            if (projects.length === 0) {
                grid.innerHTML = '<div class="card-item" style="grid-column: 1 / -1; text-align:center; padding:2rem"><p class="muted">Nenhum projeto encontrado na organização GitHub.</p></div>';
                return;
            }

            // Clear loading state
            grid.innerHTML = '';

            // Render each project
            projects.forEach(project => {
                const card = renderProjectCard(project);
                grid.appendChild(card);
            });

            // Extract and render filter buttons
            const topics = extractTopics(projects);
            if (topics.length > 0) {
                window.FacetedFilters?.render(topics);
            }

            console.log(`[GitHub] Loaded ${projects.length} projects with ${topics.length} unique topics`);
        } catch (error) {
            console.error('[GitHub] Failed to initialize projects:', error);
            grid.innerHTML = '<div class="card-item" style="grid-column: 1 / -1; text-align:center; padding:2rem"><p class="muted">Erro ao carregar projetos. Por favor, tente novamente mais tarde.</p></div>';
        }
    }

    // Expose function to update project descriptions on language change
    window._updateProjectDescriptions = function () {
        const projectCards = $$('.card-item[data-project-name]');
        projectCards.forEach(card => {
            const projectName = card.dataset.projectName;
            const githubDescription = card.dataset.githubDescription || '';
            if (!projectName) return;

            const descriptionEl = card.querySelector('.project-description');
            if (descriptionEl) {
                descriptionEl.textContent = getProjectDescription(projectName, githubDescription);
            }
        });
    };

    // Initialize GitHub projects on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initGitHubProjects);
    } else {
        initGitHubProjects();
    }

})();

/* ================================================================
   COMPREHENSIVE BUG FIXES - With Debug Logging
   Navigation, Mobile Menu, Language, Animations, Scroll Spy
   ================================================================ */

(function ComprehensiveFixes() {
    'use strict';

    console.log('[SCROLL DEBUG] Comprehensive fixes script loaded');

    const $ = s => document.querySelector(s);
    const $$ = s => Array.from(document.querySelectorAll(s));

    /* ============================================================
       FIX 1 & 2: SIMPLIFIED NAVIGATION SCROLL HANDLER
       Direct approach - attach to links immediately
       ============================================================ */

    function setupNavigationScroll() {
        console.log('[SCROLL DEBUG] setupNavigationScroll() called');

        const OFFSET = 72; // Header height

        // Get ALL anchor links immediately
        const allAnchorLinks = document.querySelectorAll('a[href^="#"]');

        console.log('[SCROLL DEBUG] Found', allAnchorLinks.length, 'anchor links');

        if (allAnchorLinks.length === 0) {
            console.warn('[SCROLL DEBUG] NO anchor links found! DOM may not be ready');
            return;
        }

        allAnchorLinks.forEach((link, index) => {
            const href = link.getAttribute('href');
            console.log('[SCROLL DEBUG] Attaching handler to link #' + index + ':', href);


            // Define handler function (shared by both click and touch events)
            const clickHandler = function (e) {
                console.log('[SCROLL DEBUG] ========================================');
                console.log('[SCROLL DEBUG] CLICK EVENT FIRED!');
                console.log('[SCROLL DEBUG] Clicked element:', this);
                console.log('[SCROLL DEBUG] Event:', e);
                console.log('[SCROLL DEBUG] Target href:', href);

                if (!href || href === '#') {
                    console.log('[SCROLL DEBUG] Empty or # href, ignoring');
                    return;
                }

                // Prevent default immediately
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();

                console.log('[SCROLL DEBUG] Default prevented, propagation stopped');

                // Try to find target by ID
                const targetId = href.substring(1); // Remove #
                console.log('[SCROLL DEBUG] Looking for element with ID:', targetId);

                const target = document.getElementById(targetId);
                console.log('[SCROLL DEBUG] Target element found:', target);

                if (!target) {
                    console.error('[SCROLL DEBUG] Target element NOT FOUND for ID:', targetId);
                    return;
                }

                // Close mobile menu if open
                const overlay = document.querySelector('.mobile-menu-overlay');
                if (overlay && overlay.classList.contains('active')) {
                    console.log('[SCROLL DEBUG] Mobile menu is open, closing it');
                    closeMobileMenu();
                }

                // Calculate scroll position
                const targetRect = target.getBoundingClientRect();
                const targetTop = targetRect.top;
                const currentScroll = window.scrollY || window.pageYOffset;
                const targetPosition = targetTop + currentScroll - OFFSET;

                console.log('[SCROLL DEBUG] Target rect top:', targetTop);
                console.log('[SCROLL DEBUG] Current scroll:', currentScroll);
                console.log('[SCROLL DEBUG] Calculated position:', targetPosition);
                console.log('[SCROLL DEBUG] Offset used:', OFFSET);

                // Small delay if menu was closing
                const delay = (overlay && overlay.classList.contains('active')) ? 150 : 0;

                setTimeout(() => {
                    console.log('[SCROLL DEBUG] Using scrollIntoView (bypasses CSS overflow issues)');

                    try {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                            inline: 'nearest'
                        });
                        console.log('[SCROLL DEBUG] scrollIntoView executed successfully');

                        // FORCE CLOSE mobile menu after scroll completes
                        setTimeout(() => {
                            const mobileOverlay = document.querySelector('.mobile-menu-overlay');
                            const navToggle = document.getElementById('navToggle');

                            if (mobileOverlay) {
                                mobileOverlay.classList.remove('active', 'open');
                                console.log('[SCROLL DEBUG] Overlay closed');
                            }
                            if (navToggle) {
                                navToggle.classList.remove('active');
                                navToggle.setAttribute('aria-expanded', 'false');
                            }
                            document.body.classList.remove('nav-open', 'menu-open');
                            console.log('[SCROLL DEBUG] Menu force-closed');
                        }, 300);

                    } catch (error) {
                        console.error('[SCROLL DEBUG] Error during scrollIntoView:', error);
                        // Fallback to instant scroll
                        target.scrollIntoView({ block: 'start' });
                    }
                }, delay);

                console.log('[SCROLL DEBUG] ========================================');
            };

            // Attach both click AND touch event handlers for mobile support
            link.addEventListener('click', clickHandler, true); // Desktop
            link.addEventListener('touchend', clickHandler, true); // Mobile

            console.log('[SCROLL DEBUG] Click + Touch handlers attached to link #' + index);
        });

        console.log('[SCROLL DEBUG] All click handlers attached');
    }

    function closeMobileMenu() {
        const overlay = $('.mobile-menu-overlay');
        const navToggle = $('#navToggle');

        if (overlay) {
            overlay.classList.remove('active');
            document.body.classList.remove('nav-open');
            console.log('[SCROLL DEBUG] Mobile overlay closed');
        }

        if (navToggle) {
            navToggle.setAttribute('aria-expanded', 'false');
            console.log('[SCROLL DEBUG] Nav toggle updated');
        }
    }

    /* ============================================================
       FIX 3: ENHANCED LANGUAGE TOGGLE
       ============================================================ */

    function setupLanguageToggle() {
        console.log('[LANG DEBUG] Setting up language toggle');

        if (window.I18N) {
            if (!window.I18N.pt['nav.about']) {
                window.I18N.pt['nav.about'] = 'Sobre';
                window.I18N.pt['nav.resume'] = 'CV';
                window.I18N.pt['nav.skills'] = 'Skills';
                window.I18N.pt['nav.projects'] = 'Projetos';
                window.I18N.pt['nav.contact'] = 'Contacto';

                window.I18N.en['nav.about'] = 'About';
                window.I18N.en['nav.resume'] = 'Resume';
                window.I18N.en['nav.skills'] = 'Skills';
                window.I18N.en['nav.projects'] = 'Projects';
                window.I18N.en['nav.contact'] = 'Contact';

                console.log('[LANG DEBUG] Navigation keys added');
            }
        }

        const langButtons = $$('.lang-option');
        console.log('[LANG DEBUG] Found', langButtons.length, 'language buttons');

        langButtons.forEach(btn => {
            btn.addEventListener('click', function () {
                const targetLang = this.getAttribute('data-lang');
                console.log('[LANG DEBUG] Language button clicked:', targetLang);

                if (window.applyLang && typeof window.applyLang === 'function') {
                    window.applyLang(targetLang);

                    langButtons.forEach(b => {
                        const isActive = b.getAttribute('data-lang') === targetLang;
                        b.setAttribute('aria-pressed', String(isActive));
                    });

                    console.log('[LANG DEBUG] Language switched to:', targetLang);
                }
            });
        });
    }

    /* ============================================================
       FIX 4: TYPING ANIMATION - SIMPLE FIX
       Just disable wrapping constraints entirely
       ============================================================ */

    function fixTypingAnimation() {
        console.log('[TYPING DEBUG] Fixing typing animation');

        const heroTitle = $('.hero-title');
        if (!heroTitle) {
            console.warn('[TYPING DEBUG] Hero title not found');
            return;
        }

        // Force text to wrap naturally
        heroTitle.style.whiteSpace = 'normal';
        heroTitle.style.overflowWrap = 'break-word';
        heroTitle.style.wordBreak = 'break-word';
        heroTitle.style.minWidth = 'auto';
        heroTitle.style.maxWidth = '100%';
        heroTitle.style.width = 'auto';

        console.log('[TYPING DEBUG] Title styles set to allow wrapping');
    }

    /* ============================================================
       FIX 5: SKILLS PERCENTAGE ANIMATION
       ============================================================ */

    function setupSkillsAnimation() {
        console.log('[SKILLS DEBUG] Setting up skills animation');

        const skillPercentages = $$('.skill-percentage, .skill-text, [data-progress]');
        const animatedSkills = new Set();

        console.log('[SKILLS DEBUG] Found', skillPercentages.length, 'skill elements');

        function animatePercentage(el) {
            if (animatedSkills.has(el)) {
                console.log('[SKILLS DEBUG] Element already animated');
                return;
            }
            animatedSkills.add(el);

            const targetText = el.getAttribute('data-progress') || el.textContent || '0%';
            const target = parseInt(targetText.replace('%', '')) || 0;

            console.log('[SKILLS DEBUG] Animating to', target + '%');

            let current = 0;
            const duration = 1500;
            const startTime = performance.now();

            function animate(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeOut = 1 - Math.pow(1 - progress, 3);
                current = Math.round(target * easeOut);

                el.textContent = current + '%';

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    el.textContent = target + '%';
                }
            }

            requestAnimationFrame(animate);
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log('[SKILLS DEBUG] Element in view, animating');
                    animatePercentage(entry.target);
                }
            });
        }, { threshold: 0.5 });

        skillPercentages.forEach(el => observer.observe(el));
    }

    /* ============================================================
       FIX 8: SCROLL SPY
       ============================================================ */

    function setupScrollSpy() {
        console.log('[SCROLL SPY DEBUG] Setting up scroll spy');

        const sections = $$('section[id]');
        const navLinks = $$('.nav-list a[href^="#"], .mobile-nav a[href^="#"]');

        console.log('[SCROLL SPY DEBUG] Sections:', sections.length);
        console.log('[SCROLL SPY DEBUG] Nav links:', navLinks.length);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    const targetHref = `#${id}`;

                    console.log('[SCROLL SPY DEBUG] Section in view:', id);

                    navLinks.forEach(link => {
                        const href = link.getAttribute('href');
                        if (href === targetHref) {
                            link.classList.add('active');
                        } else {
                            link.classList.remove('active');
                        }
                    });
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: '-72px 0px -50% 0px'
        });

        sections.forEach(section => observer.observe(section));
    }

    /* ============================================================
       INITIALIZATION
       ============================================================ */

    function initializeAllFixes() {
        console.log('[INIT] Initializing all fixes...');
        console.log('[INIT] DOM state:', document.readyState);
        console.log('[INIT] Body children:', document.body.children.length);

        // Run immediately, no delay
        setupNavigationScroll();
        setupLanguageToggle();
        fixTypingAnimation();
        setupSkillsAnimation();
        setupScrollSpy();

        console.log('[INIT] All fixes initialized');
    }

    // Initialize based on DOM state
    if (document.readyState === 'loading') {
        console.log('[INIT] DOM still loading, waiting for DOMContentLoaded');
        document.addEventListener('DOMContentLoaded', initializeAllFixes);
    } else {
        console.log('[INIT] DOM already loaded, initializing immediately');
        initializeAllFixes();
    }

    // Expose functions
    window.closeMenu = closeMobileMenu;

    console.log('[SCROLL DEBUG] Script initialization complete');

})();