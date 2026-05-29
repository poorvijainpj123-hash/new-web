/**
 * भारत Cultural Atlas — SPA Router & UI
 */

const REGION_ICONS = {
  north: `<svg class="region-card-icon" viewBox="0 0 56 56" fill="none"><path d="M28 8L38 28H18L28 8Z" stroke="#C9A84C" stroke-width="1.2"/><path d="M12 40h32" stroke="#E8871A" stroke-width="1"/><circle cx="28" cy="44" r="3" fill="#8B1A1A" opacity="0.6"/></svg>`,
  south: `<svg class="region-card-icon" viewBox="0 0 56 56" fill="none"><path d="M28 6v44M14 20h28M18 36h20" stroke="#1A6B5E" stroke-width="1"/><path d="M20 14l16 28M36 14L20 42" stroke="#C9A84C" stroke-width="0.8" opacity="0.6"/></svg>`,
  east: `<svg class="region-card-icon" viewBox="0 0 56 56" fill="none"><path d="M8 32c8-12 32-12 40 0" stroke="#8B1A1A" stroke-width="1.2"/><path d="M14 38h28" stroke="#C9A84C" stroke-width="0.8"/><circle cx="28" cy="24" r="6" stroke="#E8871A" stroke-width="1"/></svg>`,
  west: `<svg class="region-card-icon" viewBox="0 0 56 56" fill="none"><circle cx="28" cy="28" r="18" stroke="#E8871A" stroke-width="1"/><path d="M28 10v36M10 28h36" stroke="#C9A84C" stroke-width="0.6" opacity="0.5"/></svg>`,
  central: `<svg class="region-card-icon" viewBox="0 0 56 56" fill="none"><rect x="14" y="20" width="28" height="24" stroke="#C9A84C" stroke-width="1"/><path d="M14 32h28M28 20v24" stroke="#8B1A1A" stroke-width="0.8" opacity="0.5"/></svg>`,
  northeast: `<svg class="region-card-icon" viewBox="0 0 56 56" fill="none"><path d="M28 8l4 12h12l-10 8 4 12-10-8-10 8 4-12-10-8h12z" stroke="#2A8B7A" stroke-width="1"/></svg>`,
};

const TAB_ICONS = {
  mountain: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 20L12 6l8 14H4z"/></svg>`,
  sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2"/></svg>`,
  lotus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 4c-3 4-3 8 0 12 3-4 3-8 0-12z"/><path d="M6 14c2 2 4 3 6 4 2-1 4-2 6-4"/></svg>`,
  script: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 4h12v16H6z"/><path d="M9 8h6M9 12h6M9 16h4"/></svg>`,
  lamp: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2v4M10 6h4M8 10c0 4 4 6 4 10h0c0-4 4-6 4-10"/><path d="M6 20h12"/></svg>`,
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 12l8-8 8 8v8H4z"/></svg>`,
};

const TAB_KEYS = ['geography', 'climate', 'culture', 'languages', 'traditions', 'lifestyle'];

let scrollObserver;
let sectionObserver;

function parseRoute() {
  const hash = window.location.hash.slice(1) || '/';
  const parts = hash.split('/').filter(Boolean);
  if (parts.length === 0) return { page: 'home' };
  if (parts[0] === 'about') return { page: 'about' };
  if (parts[0] === 'region' && parts[1]) return { page: 'region', id: parts[1] };
  if (parts[0] === 'state' && parts[1]) return { page: 'state', id: parts[1] };
  return { page: 'home' };
}

function navigate(route, push = true) {
  if (push) {
    let hash = '#/';
    if (route.page === 'about') hash = '#/about';
    else if (route.page === 'region') hash = `#/region/${route.id}`;
    else if (route.page === 'state') hash = `#/state/${route.id}`;
    if (window.location.hash !== hash) window.location.hash = hash;
  }
  render(route);
  window.scrollTo({ top: 0, behavior: 'smooth' });
  closeMobileNav();
  updateNavActive(route);
}

function updateNavActive(route) {
  document.querySelectorAll('.main-nav a[data-nav]').forEach((a) => {
    const nav = a.dataset.nav;
    a.classList.toggle('active', (route.page === 'home' && nav === 'home') || (route.page !== 'home' && nav === 'regions' && route.page !== 'about') || (route.page === 'about' && nav === 'about'));
  });
}

function showPage(name) {
  document.querySelectorAll('.page').forEach((p) => p.classList.remove('active'));
  const map = { home: 'page-home', about: 'page-about', region: 'page-region', state: 'page-state' };
  const el = document.getElementById(map[name]);
  if (el) el.classList.add('active');
}

function renderRegionCards() {
  const grid = document.getElementById('regions-grid');
  if (!grid || grid.children.length) return;

  Object.values(REGIONS).forEach((region) => {
    const card = document.createElement('article');
    card.className = 'region-card';
    card.style.setProperty('--card-gradient', region.gradient);
    card.style.setProperty('--card-accent', region.accent);
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `Explore ${region.nameEn}`);

    card.innerHTML = `
      <div class="region-card-inner">
        ${REGION_ICONS[region.id] || ''}
        <h3>${region.nameEn}</h3>
        <p class="hindi">${region.nameHi}</p>
        <p class="region-descriptor">${region.descriptor}</p>
        <span class="region-arrow">Explore region →</span>
      </div>
    `;

    const go = () => navigate({ page: 'region', id: region.id });
    card.addEventListener('click', go);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        go();
      }
    });
    grid.appendChild(card);
  });
}

function renderRegionPage(regionId) {
  const region = REGIONS[regionId];
  const container = document.getElementById('page-region');
  if (!region || !container) {
    navigate({ page: 'home' }, false);
    return;
  }

  const tabPanels = TAB_KEYS.map((key, i) => {
    const tab = region.tabs[key];
    const icon = TAB_ICONS[tab.icon] || TAB_ICONS.mountain;
    return `
      <div class="tab-panel ${i === 0 ? 'active' : ''}" data-tab="${key}" role="tabpanel">
        <div class="tab-panel-icon">${icon}</div>
        <div class="tab-panel-content">
          <h3>${tab.title}</h3>
          <p>${tab.content}</p>
        </div>
      </div>
    `;
  }).join('');

  const tabButtons = TAB_KEYS.map((key, i) => {
    const tab = region.tabs[key];
    return `<button type="button" class="tab-btn ${i === 0 ? 'active' : ''}" data-tab="${key}" role="tab">${tab.title}</button>`;
  }).join('');

  const stateCards = region.states
    .map((sid) => {
      const s = STATES[sid];
      if (!s) return '';
      return `
        <article class="state-card" data-state="${sid}" role="button" tabindex="0">
          <div class="state-card-header">
            <div>
              <h3>${s.nameEn}</h3>
              <p class="hindi">${s.nameHi}</p>
            </div>
            <span class="state-icon">${s.animal}</span>
          </div>
          <p class="state-capital">Capital — ${s.capital}</p>
          <p class="state-hook">${s.hook}</p>
          <div class="state-card-overlay">Explore →</div>
        </article>
      `;
    })
    .join('');

  const bannerMap = typeof getRegionBannerMap === 'function' ? getRegionBannerMap(regionId) : '';

  container.innerHTML = `
    <header class="region-banner" style="--region-gradient: ${region.gradient}">
      <div class="region-banner-bg"></div>
      <div class="region-banner-layout">
        <div class="region-banner-content">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="#/" data-nav="home">Home</a><span>›</span>
          <a href="#regions">Regions</a><span>›</span>
          <span>${region.nameEn}</span>
        </nav>
        <h1>${region.nameEn}</h1>
        <p class="hindi">${region.nameHi}</p>
        <p class="region-overview">${region.overview}</p>
        </div>
        ${bannerMap}
      </div>
    </header>

    <section class="tabs-section" aria-label="Region information">
      <div class="tab-bar" role="tablist">${tabButtons}</div>
      ${tabPanels}
    </section>

    <section class="states-section">
      <h2>States & Territories of ${region.nameEn}</h2>
      <div class="states-grid">${stateCards}</div>
    </section>

    <footer class="site-footer">
      <p class="footer-bottom">Made with ❤️ for Incredible India</p>
    </footer>
  `;

  container.style.setProperty('--region-gradient', region.gradient);
  bindTabs(container);
  bindStateCards(container);
}

function bindTabs(container) {
  const buttons = container.querySelectorAll('.tab-btn');
  const panels = container.querySelectorAll('.tab-panel');
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.tab;
      buttons.forEach((b) => b.classList.toggle('active', b === btn));
      panels.forEach((p) => p.classList.toggle('active', p.dataset.tab === key));
    });
  });
}

function bindStateCards(container) {
  container.querySelectorAll('.state-card').forEach((card) => {
    const go = () => navigate({ page: 'state', id: card.dataset.state });
    card.addEventListener('click', go);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        go();
      }
    });
  });
}

function renderStatePage(stateId) {
  const state = STATES[stateId];
  const container = document.getElementById('page-state');
  if (!state || !container) {
    navigate({ page: 'home' }, false);
    return;
  }

  const region = REGIONS[state.regionId];
  const navLinks = SECTION_ORDER.map((key) => {
    const sec = state.sections[key];
    return `<a href="#section-${key}" data-section="${key}">${sec.title}</a>`;
  }).join('');

  const sections = SECTION_ORDER.map((key) => {
    const sec = state.sections[key];
    let body = `<p>${sec.content || ''}</p>`;
    if (key === 'places' && sec.places) {
      body = `<div class="places-mini-grid">${sec.places
        .map((p) => `<article class="place-mini-card"><h4>${p.name}</h4><span>${p.type}</span></article>`)
        .join('')}</div>`;
    }
    return `
      <section class="state-section" id="section-${key}" data-section="${key}">
        <div class="state-section-header">
          <span class="icon">${sec.icon}</span>
          <h2>${sec.title}</h2>
        </div>
        ${body}
        <div class="section-divider" aria-hidden="true">
          <span></span>
          <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="#C9A84C" stroke-width="0.8"/></svg>
          <span></span>
        </div>
      </section>
    `;
  }).join('');

  const siblings = region.states.filter((id) => id !== stateId && STATES[id]);
  const suggestChips = siblings
    .map((id) => {
      const s = STATES[id];
      return `<a href="#/state/${id}" class="suggest-chip">${s.nameEn}</a>`;
    })
    .join('');

  container.innerHTML = `
    <header class="state-hero" style="--state-gradient: ${state.gradient}">
      <div class="state-hero-bg">
        <svg class="map-silhouette" viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 120 Q60 40 100 50 T160 80 Q140 130 100 140 T40 120Z" fill="currentColor"/>
        </svg>
      </div>
      <div class="state-hero-content">
        <nav class="breadcrumb">
          <a href="#/" data-nav="home">Home</a><span>›</span>
          <a href="#/region/${state.regionId}">${region.nameEn}</a><span>›</span>
          <span>${state.nameEn}</span>
        </nav>
        <a href="#/region/${state.regionId}" class="back-btn">← Back to ${region.nameEn}</a>
        <h1>${state.nameEn}</h1>
        <p class="hindi">${state.nameHi}</p>
        <div class="facts-strip">
          <div class="fact-item"><strong>Capital</strong>${state.capital}</div>
          <div class="fact-item"><strong>Language</strong>${state.language}</div>
          <div class="fact-item"><strong>Founded</strong>${state.founded}</div>
          <div class="fact-item"><strong>Area</strong>${state.area}</div>
        </div>
      </div>
    </header>

    <div class="state-layout">
      <nav class="state-side-nav" aria-label="Section navigation">${navLinks}</nav>
      <div class="state-sections">${sections}</div>
    </div>

    <section class="suggest-states">
      <h3>Explore Another State</h3>
      <div class="suggest-grid">${suggestChips}</div>
      <p style="text-align:center;margin-top:2rem">
        <a href="#/region/${state.regionId}" class="back-btn">← Back to ${region.nameEn}</a>
      </p>
    </section>

    <footer class="site-footer">
      <p class="footer-bottom">Made with ❤️ for Incredible India</p>
    </footer>
  `;

  bindSectionNav(container);
  observeStateSections(container);
}

function bindSectionNav(container) {
  const links = container.querySelectorAll('.state-side-nav a');
  const sections = container.querySelectorAll('.state-section');

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const id = link.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  if (sectionObserver) sectionObserver.disconnect();

  sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id.replace('section-', '');
          links.forEach((l) => l.classList.toggle('active', l.dataset.section === id));
        }
      });
    },
    { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
  );

  sections.forEach((s) => sectionObserver.observe(s));
}

function observeStateSections(container) {
  container.querySelectorAll('.state-section').forEach((el) => {
    el.classList.remove('visible');
  });

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  container.querySelectorAll('.state-section').forEach((el) => obs.observe(el));
}

function initScrollReveal() {
  if (scrollObserver) scrollObserver.disconnect();
  scrollObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll('.section-header').forEach((el) => scrollObserver.observe(el));
}

function initQuotes() {
  const idx = new Date().getDate() % CULTURAL_QUOTES.length;
  const q = CULTURAL_QUOTES[idx];
  const daily = document.querySelector('#daily-quote');
  if (daily) {
    daily.querySelector('p').textContent = q.text;
    daily.querySelector('cite').textContent = `— ${q.source}`;
  }
  const footer = document.getElementById('footer-quote');
  if (footer) footer.textContent = `"${q.text}" — ${q.source}`;
}

function createRipple(e, button) {
  const rect = button.getBoundingClientRect();
  const ripple = document.createElement('span');
  ripple.className = 'ripple';
  const size = Math.max(rect.width, rect.height);
  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
  ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
  button.appendChild(ripple);
  ripple.addEventListener('animationend', () => ripple.remove());
}

function bindRipple() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-primary');
    if (btn) createRipple(e, btn);
  });
}

function closeMobileNav() {
  document.querySelector('.main-nav')?.classList.remove('open');
  document.querySelector('.menu-toggle')?.setAttribute('aria-expanded', 'false');
}

function bindGlobalEvents() {
  window.addEventListener('hashchange', () => navigate(parseRoute(), false));

  document.body.addEventListener('click', (e) => {
    const nav = e.target.closest('[data-nav]');
    if (!nav) return;
    e.preventDefault();
    const target = nav.dataset.nav;
    if (target === 'home') navigate({ page: 'home' });
    else if (target === 'about') navigate({ page: 'about' });
    else if (target === 'regions') {
      navigate({ page: 'home' });
      setTimeout(() => document.getElementById('regions')?.scrollIntoView({ behavior: 'smooth' }), 100);
    }
  });

  document.getElementById('hero-cta')?.addEventListener('click', (e) => {
    createRipple(e, e.currentTarget);
    document.getElementById('regions')?.scrollIntoView({ behavior: 'smooth' });
  });

  document.querySelector('.menu-toggle')?.addEventListener('click', () => {
    const nav = document.querySelector('.main-nav');
    const open = nav.classList.toggle('open');
    document.querySelector('.menu-toggle').setAttribute('aria-expanded', open);
  });
}

function updateTitle(route) {
  const base = 'भारत | Bharat Cultural Atlas';
  if (route.page === 'region' && REGIONS[route.id]) {
    document.title = `${REGIONS[route.id].nameEn} — ${base}`;
  } else if (route.page === 'state' && STATES[route.id]) {
    document.title = `${STATES[route.id].nameEn} — ${base}`;
  } else if (route.page === 'about') {
    document.title = `About — ${base}`;
  } else {
    document.title = base;
  }
}

function initHeroParallax() {
  const layout = document.querySelector('.hero-layout');
  const bg = document.querySelector('.hero-bg');
  if (!layout) return;

  const onScroll = () => {
    if (!document.getElementById('page-home')?.classList.contains('active')) return;
    const y = window.scrollY;
    layout.style.transform = `translateY(${y * 0.05}px)`;
    if (bg) bg.style.transform = `translateY(${y * 0.025}px)`;
  };

  window.addEventListener('scroll', onScroll, { passive: true });
}

function render(route) {
  showPage(route.page);
  updateTitle(route);

  if (route.page === 'region') renderRegionPage(route.id);
  else if (route.page === 'state') renderStatePage(route.id);

  if (route.page === 'home') {
    initScrollReveal();
    if (typeof mountHomeMaps === 'function') mountHomeMaps();
  }
}

function init() {
  renderRegionCards();
  initQuotes();
  bindRipple();
  bindGlobalEvents();
  initHeroParallax();
  if (typeof mountHomeMaps === 'function') mountHomeMaps();
  navigate(parseRoute(), false);
}

document.addEventListener('DOMContentLoaded', init);
