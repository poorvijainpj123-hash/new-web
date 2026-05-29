/* India Map Visualization */

function initMaps() {
  const heroMapContainer = document.getElementById('hero-india-map');
  const homeMapContainer = document.getElementById('home-india-map');

  if (heroMapContainer) {
    heroMapContainer.innerHTML = createIndiaMapSVG('hero-map');
  }
  if (homeMapContainer) {
    homeMapContainer.innerHTML = createIndiaMapSVG('home-map');
  }

  // Click handlers for regions
  document.querySelectorAll('[data-region-map]').forEach(element => {
    element.addEventListener('click', () => {
      const regionId = element.getAttribute('data-region-map');
      app?.showRegion(regionId);
    });
  });
}

function createIndiaMapSVG(containerId) {
  return `
    <svg viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg" class="india-map">
      <defs>
        <style>
          .map-region { cursor: pointer; transition: all 0.3s ease; stroke: #C9A84C; stroke-width: 1; }
          .map-region:hover { filter: brightness(1.2); stroke-width: 2; }
          .map-north { fill: #8B4A9E; opacity: 0.7; }
          .map-south { fill: #1A6B5E; opacity: 0.7; }
          .map-east { fill: #8B1A1A; opacity: 0.7; }
          .map-west { fill: #E8871A; opacity: 0.7; }
          .map-central { fill: #C9A84C; opacity: 0.7; }
          .map-northeast { fill: #2A8B7A; opacity: 0.7; }
          .region-label { font-family: var(--font-ui); font-size: 10px; fill: #F2EAD3; text-anchor: middle; pointer-events: none; font-weight: 500; }
        </style>
      </defs>

      <!-- North India -->
      <path class="map-region map-north" data-region-map="north" d="M 150 80 L 240 100 L 260 150 L 200 180 L 140 160 Z"/>
      <text class="region-label" x="190" y="130">North</text>

      <!-- North-East India -->
      <path class="map-region map-northeast" data-region-map="northeast" d="M 280 100 L 350 120 L 360 200 L 280 180 Z"/>
      <text class="region-label" x="320" y="150">NE</text>

      <!-- East India -->
      <path class="map-region map-east" data-region-map="east" d="M 250 180 L 320 200 L 330 320 L 270 340 L 250 280 Z"/>
      <text class="region-label" x="290" y="260">East</text>

      <!-- West India -->
      <path class="map-region map-west" data-region-map="west" d="M 80 200 L 150 220 L 180 380 L 100 390 L 60 300 Z"/>
      <text class="region-label" x="115" y="300">West</text>

      <!-- Central India -->
      <path class="map-region map-central" data-region-map="central" d="M 150 220 L 240 240 L 280 320 L 200 340 L 160 280 Z"/>
      <text class="region-label" x="205" y="290">Central</text>

      <!-- South India -->
      <path class="map-region map-south" data-region-map="south" d="M 150 350 L 280 340 L 290 480 L 200 500 L 130 450 Z"/>
      <text class="region-label" x="210" y="420">South</text>

      <!-- Decorative elements -->
      <circle cx="200" cy="300" r="2" fill="#C9A84C" opacity="0.3"/>
      <circle cx="200" cy="300" r="50" fill="none" stroke="#C9A84C" stroke-width="0.5" opacity="0.2"/>
    </svg>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(initMaps, 100);
});
