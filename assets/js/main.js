/* Main JS: navigation, theme, typed bio, animations, skill SVG animations, blog search, contact form validation */
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const navList = document.getElementById('navList');
  navToggle?.addEventListener('click', () => {
    const isHidden = navList.classList.toggle('hidden');
    const expanded = String(!navList.classList.contains('hidden'));
    navToggle.setAttribute('aria-expanded', expanded);
  });

  // Theme toggle + toast
  const darkToggle = document.getElementById('darkToggle');
  const root = document.documentElement;
  function setTheme(dark) {
    if (!dark) root.classList.add('light'); else root.classList.remove('light');
    if (darkToggle) darkToggle.setAttribute('aria-pressed', String(dark));
    try { localStorage.setItem('themeDark', JSON.stringify(dark)); } catch (e) { }
  }

  function showToast(msg, timeout = 1600) {
    let toast = document.getElementById('siteToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'siteToast';
      toast.setAttribute('role', 'status');
      toast.setAttribute('aria-live', 'polite');
      toast.className = 'site-toast hidden';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.remove('hidden');
    void toast.offsetWidth;
    toast.classList.add('visible');
    if (toast._hideTimeout) clearTimeout(toast._hideTimeout);
    toast._hideTimeout = setTimeout(() => {
      toast.classList.remove('visible');
      setTimeout(() => toast.classList.add('hidden'), 260);
    }, timeout);
  }

  const stored = (() => { try { return localStorage.getItem('themeDark'); } catch (e) { return null; } })();
  const isDark = stored === null ? true : JSON.parse(stored);
  setTheme(isDark);
  darkToggle?.addEventListener('click', () => {
    const currentlyLight = document.documentElement.classList.contains('light');
    setTheme(currentlyLight);
    const isDarkNow = !document.documentElement.classList.contains('light');
    showToast(isDarkNow ? 'Modo escuro ativado' : 'Modo claro ativado');
  });

  // Typed bio (simple, lightweight)
  (function typedBio() {
    const el = document.getElementById('typedBio');
    if (!el) return;
    const phrases = [
      'Sou um desenvolvedor júnior curioso —',
      'Gosto de construir coisas simples e funcionais.',
      'Estou a aprender boas práticas e colaboração em equipa.'
    ];
    const cursor = el.parentElement?.querySelector('.cursor');
    let pi = 0, ci = 0, deleting = false;
    const typeSpeed = 38, deleteSpeed = 26, pause = 1100;
    function tick() {
      const txt = phrases[pi];
      if (!deleting) {
        el.textContent = txt.slice(0, ci + 1);
        ci++;
        if (ci === txt.length) { deleting = true; setTimeout(tick, pause); return; }
      } else {
        el.textContent = txt.slice(0, ci - 1);
        ci--;
        if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; }
      }
      if (cursor) cursor.style.opacity = (Date.now() % 800) < 400 ? '1' : '0.15';
      setTimeout(tick, deleting ? deleteSpeed : typeSpeed);
    }
    tick();
  })();

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (ev) => {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const el = document.querySelector(href);
      if (el) { ev.preventDefault(); el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });

  // Back-to-top button and header shrink on scroll
  const header = document.querySelector('.site-header');
  const backTop = document.getElementById('backTop');
  function onScroll() {
    const y = window.scrollY || window.pageYOffset;
    if (header) header.classList.toggle('scrolled', y > 48);
    if (backTop) backTop.classList.toggle('visible', y > 240);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  backTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Scroll reveals and skill-circle SVG animations
  const revealSelector = '.section, .project-card, .post-card, .hero-left, .skill-card';
  const revealElems = Array.from(document.querySelectorAll(revealSelector));
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealElems.forEach(e => revealObs.observe(e));

  // Skill-circle animation: expects markup with .skill-circle[data-value] and an inner <path class="progress"> path
  const skillCircles = Array.from(document.querySelectorAll('.skill-circle'));
  skillCircles.forEach(card => {
    const svg = card.querySelector('svg');
    const progress = svg?.querySelector('.progress');
    if (!progress) return;
    const total = progress.getTotalLength();
    // Normalize stroke appearance
    progress.style.strokeDasharray = String(total);
    progress.style.strokeDashoffset = String(total);
    progress.style.transition = 'stroke-dashoffset 1000ms cubic-bezier(.2,.9,.2,1)';
    // ensure transform origin for css rotations when used
    svg.style.transform = 'rotate(-90deg)';
    svg.style.overflow = 'visible';
    const pct = Number(card.dataset.value || 0);
    // animate when card is in view
    const obs = new IntersectionObserver(ent => {
      ent.forEach(e => {
        if (e.isIntersecting) {
          const toOffset = Math.max(0, total * (1 - Math.min(100, Math.max(0, pct)) / 100));
          progress.style.strokeDashoffset = String(toOffset);
          const pctSpan = card.querySelector('.pct');
          if (pctSpan) pctSpan.textContent = pct + '%';
          obs.unobserve(card);
        }
      });
    }, { threshold: 0.35 });
    obs.observe(card);
  });

  // Simple blog search/filter (client-side placeholder)
  const posts = Array.from(document.querySelectorAll('.post-card'));
  const search = document.getElementById('blogSearch');
  const category = document.getElementById('blogCategory');
  function filterPosts() {
    const q = (search?.value || '').toLowerCase();
    const cat = (category?.value || 'all');
    posts.forEach(p => {
      const t = p.textContent.toLowerCase();
      const matchesQ = !q || t.includes(q);
      const matchesCat = cat === 'all' || (p.querySelector('.muted')?.textContent || '').toLowerCase().includes(cat);
      p.style.display = (matchesQ && matchesCat) ? '' : 'none';
    });
  }
  search?.addEventListener('input', filterPosts);
  category?.addEventListener('change', filterPosts);

  // Contact form validation and submit (keeps previous behavior)
  const contactForm = document.getElementById('contactForm');
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();
    const feedback = document.getElementById('contactFeedback');
    if (!name || !email || !message) {
      feedback.textContent = 'Preencha todos os campos antes de enviar.';
      return;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) { feedback.textContent = 'Por favor insira um email válido.'; return; }
    feedback.textContent = 'A enviar...';
    const endpoint = contactForm.dataset.endpoint;
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    if (endpoint) {
      submitBtn?.setAttribute('disabled', '');
      const fd = new FormData();
      fd.append('name', name);
      fd.append('email', email);
      fd.append('message', message);
      fetch(endpoint, { method: 'POST', body: fd })
        .then(async res => {
          if (res.ok) {
            feedback.textContent = 'Mensagem enviada. Obrigado!';
            contactForm.reset();
          } else {
            const txt = await res.text().catch(() => res.statusText);
            feedback.textContent = 'Erro ao enviar: ' + (txt || res.statusText || res.status);
          }
        })
        .catch(err => { feedback.textContent = 'Erro ao enviar: ' + (err.message || err); })
        .finally(() => submitBtn?.removeAttribute('disabled'));
    } else {
      setTimeout(() => {
        feedback.textContent = 'Mensagem enviada. Obrigado! (simulado)';
        contactForm.reset();
      }, 900);
    }
  });
});
