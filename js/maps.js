/**
 * Stylized SVG maps — India & regional zones (illustrative, not survey-grade)
 */

const MAP_VIEWBOX = '0 0 360 420';

const REGION_MAP_COLORS = {
  north: '#8B4A9E',
  northeast: '#2A8B7A',
  east: '#8B1A1A',
  central: '#C9A84C',
  west: '#E8871A',
  south: '#1A6B5E',
};

/** Simplified zone paths (illustrative cultural regions) */
const REGION_PATHS = {
  north:
    'M 88 52 L 168 44 L 208 88 L 192 148 L 128 162 L 78 118 Z',
  northeast:
    'M 208 44 L 292 38 L 318 88 L 298 152 L 228 142 L 198 88 Z',
  east:
    'M 192 148 L 298 152 L 312 228 L 268 292 L 198 278 L 168 218 Z',
  central:
    'M 128 162 L 192 148 L 198 278 L 148 312 L 92 272 L 88 210 Z',
  west:
    'M 32 168 L 78 52 L 128 162 L 92 272 L 48 252 L 22 198 Z',
  south:
    'M 92 272 L 198 278 L 218 348 L 172 408 L 108 398 L 68 328 Z',
};

const INDIA_OUTLINE =
  'M 22 198 L 32 168 L 78 52 L 168 44 L 292 38 L 318 88 L 312 228 L 268 292 L 218 348 L 172 408 L 108 398 L 68 328 L 48 252 L 22 198 Z';

const REGION_LABELS = {
  north: 'North',
  northeast: 'N-East',
  east: 'East',
  central: 'Central',
  west: 'West',
  south: 'South',
};

function renderIndiaMap(options = {}) {
  const {
    highlight = null,
    interactive = false,
    className = 'india-map-svg',
    title = 'Map of India by cultural region',
    showLabels = false,
  } = options;

  const regionOrder = ['north', 'west', 'central', 'south', 'east', 'northeast'];

  const zones = regionOrder
    .map((id) => {
      const color = REGION_MAP_COLORS[id];
      const isActive = highlight === id;
      const isDimmed = highlight && highlight !== id;
      const fillOpacity = isActive ? 0.72 : isDimmed ? 0.12 : 0.38;
      const stroke = isActive ? '#f0c96a' : color;
      const strokeWidth = isActive ? 2 : 1;
      const classes = ['map-zone', `map-zone--${id}`];
      if (interactive) classes.push('map-zone--interactive');
      if (isActive) classes.push('map-zone--active');

      const label = showLabels
        ? `<text class="map-zone-label" data-region="${id}"></text>`
        : '';

      return `
        <path
          class="${classes.join(' ')}"
          data-region="${id}"
          d="${REGION_PATHS[id]}"
          fill="${color}"
          fill-opacity="${fillOpacity}"
          stroke="${stroke}"
          stroke-width="${strokeWidth}"
          ${interactive ? `role="button" tabindex="0" aria-label="${REGION_LABELS[id]} India region"` : ''}
        />${label}
      `;
    })
    .join('');

  const interactiveClass = interactive ? ' india-map-svg--interactive' : '';

  return `
    <figure class="india-map-figure${interactive ? ' india-map-figure--interactive' : ''}">
      <svg
        class="${className}${interactiveClass}"
        viewBox="${MAP_VIEWBOX}"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="${title}"
      >
        <defs>
          <filter id="mapGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur"/>
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <path
          class="map-outline"
          d="${INDIA_OUTLINE}"
          fill="rgba(13, 9, 5, 0.5)"
          stroke="#C9A84C"
          stroke-width="1.5"
          stroke-opacity="0.55"
        />
        <g class="map-zones">${zones}</g>
        <path
          class="map-coastline"
          d="${INDIA_OUTLINE}"
          fill="none"
          stroke="#E8871A"
          stroke-width="0.8"
          stroke-opacity="0.35"
          stroke-dasharray="4 6"
        />
      </svg>
      ${options.caption ? `<figcaption class="map-caption">${options.caption}</figcaption>` : ''}
    </figure>
  `;
}

function renderRegionFocusMap(regionId) {
  const color = REGION_MAP_COLORS[regionId] || '#C9A84C';
  const region = typeof REGIONS !== 'undefined' ? REGIONS[regionId] : null;
  const name = region ? region.nameEn : regionId;

  return `
    <figure class="region-focus-map" aria-label="${name} on map of India">
      <svg class="region-focus-map-svg" viewBox="${MAP_VIEWBOX}" xmlns="http://www.w3.org/2000/svg">
        <path class="map-outline" d="${INDIA_OUTLINE}" fill="rgba(13,9,5,0.6)" stroke="#C9A84C" stroke-width="1.2" stroke-opacity="0.4"/>
        ${Object.keys(REGION_PATHS)
          .map((id) => {
            const active = id === regionId;
            return `<path
              d="${REGION_PATHS[id]}"
              fill="${REGION_MAP_COLORS[id]}"
              fill-opacity="${active ? 0.85 : 0.1}"
              stroke="${active ? '#f0c96a' : REGION_MAP_COLORS[id]}"
              stroke-width="${active ? 2.5 : 0.6}"
              filter="${active ? 'url(#mapGlow)' : 'none'}"
            />`;
          })
          .join('')}
      </svg>
      <span class="region-map-badge" style="--badge-color: ${color}">${name}</span>
    </figure>
  `;
}

function bindInteractiveMap(container, onRegionSelect) {
  if (!container) return;

  const zones = container.querySelectorAll('.map-zone--interactive');
  zones.forEach((zone) => {
    const id = zone.dataset.region;

    const activate = () => {
      zones.forEach((z) => z.classList.remove('map-zone--hover'));
      zone.classList.add('map-zone--hover');
    };

    const deactivate = () => zone.classList.remove('map-zone--hover');

    zone.addEventListener('mouseenter', activate);
    zone.addEventListener('mouseleave', deactivate);
    zone.addEventListener('focus', activate);
    zone.addEventListener('blur', deactivate);

    const go = () => onRegionSelect(id);
    zone.addEventListener('click', go);
    zone.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        go();
      }
    });
  });
}

function mountHomeMaps() {
  const heroEl = document.getElementById('hero-india-map');
  if (heroEl && !heroEl.dataset.mounted) {
    heroEl.innerHTML = renderIndiaMap({
      interactive: true,
      caption: '',
      className: 'india-map-svg india-map-svg--hero',
    });
    bindInteractiveMap(heroEl, (id) => {
      if (typeof navigate === 'function') navigate({ page: 'region', id });
    });
    heroEl.dataset.mounted = '1';
  }

  const panelEl = document.getElementById('home-india-map');
  if (panelEl && !panelEl.dataset.mounted) {
    panelEl.innerHTML = renderIndiaMap({
      interactive: true,
      showLabels: false,
      caption: 'Click a region to explore — illustrative cultural zones of India',
      className: 'india-map-svg india-map-svg--panel',
    });
    bindInteractiveMap(panelEl, (id) => {
      if (typeof navigate === 'function') navigate({ page: 'region', id });
    });
    panelEl.dataset.mounted = '1';
  }
}

function getRegionBannerMap(regionId) {
  return `<div class="region-banner-map">${renderRegionFocusMap(regionId)}</div>`;
}
