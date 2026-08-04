/* भारत Cultural Atlas — Application Logic & Routing */

// Router & Page Management
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

const app = {
  currentPage: 'home',
  currentRegion: null,
  currentState: null,

  init() {
    this.setupNav();
    this.setupRouting();
    this.loadHomePage();
    this.setupScrollObserver();
    this.bindRipple();
    this.initHeroParallax();
    document.getElementById('hero-cta').addEventListener('click', () => this.navigate('regions'));
  },

  createRipple(e, button) {
    const rect = button.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
    button.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
  },

  bindRipple() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.btn-primary');
      if (btn) this.createRipple(e, btn);
    });
  },

  initHeroParallax() {
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
  },

  setupNav() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    menuToggle?.addEventListener('click', () => {
      mainNav.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', mainNav.classList.contains('active'));
    });

    // Nav links
    document.querySelectorAll('[data-nav]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.getAttribute('data-nav');
        this.navigate(page);
      });
    });
  },

  setupRouting() {
    window.addEventListener('hashchange', () => this.handleRoute());
    this.handleRoute();
  },

  handleRoute() {
    const hash = window.location.hash.slice(1) || '/';
    const [page, ...params] = hash.split('/');
    
    if (page === '' || page === '/') this.navigate('home');
    else if (page === 'region') this.showRegion(params[0]);
    else if (page === 'state') this.showState(params[0], params[1]);
    else this.navigate(page);
  },

  navigate(page) {
    this.hideAllPages();
    this.currentPage = page;
    document.querySelector(`#page-${page}`)?.classList.add('active');
    window.location.hash = page === 'home' ? '/' : page;
    document.querySelector('.menu-toggle').setAttribute('aria-expanded', 'false');
    document.querySelector('.main-nav')?.classList.remove('active');
  },

  hideAllPages() {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  },

  loadHomePage() {
    const grid = document.getElementById('regions-grid');
    grid.innerHTML = ATLAS_DATA.regions.map(region => `
      <div class="region-card" style="--region-color: ${region.color}" data-region="${region.id}">
        <div class="region-card-bg"></div>
        <div class="region-card-content">
          ${REGION_ICONS[region.id] || ''}
          <h3>${region.name}</h3>
          <p class="hindi">${region.hindi}</p>
          <p class="descriptor">${region.descriptor}</p>
          <button class="btn-explore">Explore →</button>
        </div>
      </div>
    `).join('');

    grid.querySelectorAll('.region-card').forEach(card => {
      card.addEventListener('click', () => {
        const regionId = card.dataset.region;
        this.showRegion(regionId);
      });
    });

    this.loadQuote();
  },

  showRegion(regionId) {
    const TAB_ICON_MAP = {
    geography: 'mountain',
    climate: 'sun',
    culture: 'lotus',
    languages: 'script',
    traditions: 'lamp',
    lifestyle: 'home'
    };
    const region = ATLAS_DATA.regions.find(r => r.id === regionId);
    if (!region) return;

    this.currentRegion = regionId;
    const page = document.getElementById('page-region');
    
    page.innerHTML = `
      <div class="region-banner" style="--region-color: ${region.color}">
        <nav class="breadcrumb">
        <a href="#/" data-nav="home">Home</a><span>›</span>
        <span>Regions</span><span>›</span>
        <span>${region.name}</span>
        </nav>
        <h1>${region.name}</h1>
        <p class="hindi">${region.hindi}</p>
        <p class="region-overview">${region.overview}</p>
        </div>

      <section class="region-tabs">
        <div class="tabs-header">
          <button class="tab-btn active" data-tab="geography">Geography</button>
          <button class="tab-btn" data-tab="climate">Climate</button>
          <button class="tab-btn" data-tab="culture">Culture</button>
          <button class="tab-btn" data-tab="languages">Languages</button>
          <button class="tab-btn" data-tab="traditions">Traditions</button>
          <button class="tab-btn" data-tab="lifestyle">Lifestyle</button>
        </div>
        <div class="tabs-content">
          ${Object.entries(region.tabs).map(([key, content]) => `
            <div class="tab-pane ${key === 'geography' ? 'active' : ''}" data-tab="${key}">
              <div class="gold-rule"></div>
              <div class="tab-pane-icon">${TAB_ICONS[TAB_ICON_MAP[key]] || ''}</div>
              <p>${content}</p>
            </div>
          `).join('')}
        </div>
      </section>

      <section class="states-section">
        <h2>States & Union Territories</h2>
        <div class="gold-rule"></div>
        <div class="states-grid">
          ${region.states.map(state => `
            <div class="state-card" data-state="${state.id}">
              <div class="state-card-top">
                <h3>${state.name}</h3>
                <p class="hindi">${state.hindi}</p>
              </div>
              <div class="state-card-meta">
                <span class="capital">🏛 ${state.capital}</span>
                <span class="hook">${state.hook}</span>
              </div>
              <button class="btn-explore">Explore →</button>
            </div>
          `).join('')}
        </div>
      </section>

      <footer class="site-footer">
        <p class="footer-bottom">Made with ❤️ for Incredible India</p>
      </footer>
    `;

    // Tab switching
    page.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        page.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        page.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
        e.target.classList.add('active');
        page.querySelector(`[data-tab="${e.target.dataset.tab}"]`).classList.add('active');
      });
    });

    // State card clicks
    page.querySelectorAll('.state-card').forEach(card => {
      card.addEventListener('click', () => {
        const stateId = card.dataset.state;
        this.showState(regionId, stateId);
      });
    });

    this.navigate('region');
  },

  showState(regionId, stateId) {
    const region = ATLAS_DATA.regions.find(r => r.id === regionId);
    const state = region?.states.find(s => s.id === stateId);
    if (!state) return;

    this.currentState = stateId;
    const page = document.getElementById('page-state');

    page.innerHTML = `
      <div class="state-header" style="background: ${state.gradient || 'linear-gradient(135deg, #0D0905 0%, #3d2a1a 100%)'}">
        <nav class="breadcrumb">
          <a href="#/" data-nav="home">Home</a><span>›</span>
          <a href="#region/${regionId}">${region.name}</a><span>›</span>
          <span>${state.name}</span>
        </nav>
        <div class="state-hero">
          <h1>${state.name}</h1>
          <p class="hindi">${state.hindi}</p>
          <div class="quick-facts">
            <span>Capital: <strong>${state.capital}</strong></span>
            <span>Language: <strong>${state.language}</strong></span>
            <span>Area: <strong>${state.area}</strong></span>
            <span>Founded: <strong>${state.founded}</strong></span>
          </div>
        </div>
      </div>

      <nav class="state-nav">
        <button class="state-nav-btn active" data-section="geography">🗺 Geography</button>
        <button class="state-nav-btn" data-section="history">📜 History</button>
        <button class="state-nav-btn" data-section="culture">🎭 Culture</button>
        <button class="state-nav-btn" data-section="traditions">🪘 Traditions</button>
        <button class="state-nav-btn" data-section="artForms">🎨 Art Forms</button>
        <button class="state-nav-btn" data-section="food">🍛 Food</button>
        <button class="state-nav-btn" data-section="festivals">🎉 Festivals</button>
        <button class="state-nav-btn" data-section="clothing">👘 Clothing</button>
        <button class="state-nav-btn" data-section="famousPlaces">🏛 Places</button>
        <button class="state-nav-btn" data-section="modernLife">🌆 Modern Life</button>
      </nav>

      <div class="state-content">
        ${Object.entries(state.content).map(([key, content]) => `
          <section class="state-section ${key === 'geography' ? 'active' : ''}" data-section="${key}">
            <div class="section-divider"></div>
            <h2>${this.sectionTitle(key)}</h2>
            ${key === 'famousPlaces' ? `
              <div class="famous-places-grid">
                ${content.map(place => `
                  <div class="place-card">
                    <h4>${place.name}</h4>
                    <p>${place.type}</p>
                  </div>
                `).join('')}
              </div>
            ` : `<p>${content}</p>`}
          </section>
        `).join('')}
      </div>

      <div class="state-actions">
        <a href="#region/${regionId}" class="btn-secondary">← Back to ${region.name}</a>
        <a href="#/regions" class="btn-secondary">Explore Another Region →</a>
      </div>

      <footer class="site-footer">
        <p class="footer-bottom">Made with ❤️ for Incredible India</p>
      </footer>
    `;

    // Section navigation
    page.querySelectorAll('.state-nav-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const sectionId = e.target.dataset.section;
        page.querySelectorAll('.state-nav-btn').forEach(b => b.classList.remove('active'));
        page.querySelectorAll('.state-section').forEach(s => s.classList.remove('active'));
        e.target.classList.add('active');
        page.querySelector(`[data-section="${sectionId}"]`).classList.add('active');
        page.querySelector('[data-section="' + sectionId + '"]').scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    this.navigate('state');
  },

  sectionTitle(key) {
    const titles = {
      geography: '🗺 Geography',
      history: '📜 History',
      culture: '🎭 Culture',
      traditions: '🪘 Traditions',
      artForms: '🎨 Art Forms',
      food: '🍛 Food',
      festivals: '🎉 Festivals',
      clothing: '👘 Traditional Clothing',
      famousPlaces: '🏛 Famous Places',
      modernLife: '🌆 Modern Life'
    };
    return titles[key] || key;
  },

  loadQuote() {
    const quote = ATLAS_DATA.quotes[Math.floor(Math.random() * ATLAS_DATA.quotes.length)];
    const block = document.getElementById('daily-quote');
    const footer = document.getElementById('footer-quote');
    
    if (block) {
      block.querySelector('p').textContent = quote.text;
      block.querySelector('cite').textContent = `— ${quote.author}`;
    }
    if (footer) {
      footer.textContent = `"${quote.text}" — ${quote.author}`;
    }
  },

  setupScrollObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section, .region-card, .state-card').forEach(el => {
      observer.observe(el);
    });
  }
};

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => app.init());
