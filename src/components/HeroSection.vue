<template>
  <section class="hero" id="hero">
    <!-- Fond tech : grille circuit -->
    <div class="hero__tech-bg" aria-hidden="true">
      <svg class="hero__circuit" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <pattern id="dotGrid" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="1" fill="rgba(56,189,248,0.15)"/>
        </pattern>
        <rect width="100%" height="100%" fill="url(#dotGrid)"/>
        <line x1="0" y1="120" x2="300" y2="120" stroke="rgba(56,189,248,0.08)" stroke-width="1"/>
        <line x1="350" y1="120" x2="500" y2="120" stroke="rgba(167,139,250,0.08)" stroke-width="1"/>
        <line x1="700" y1="200" x2="1200" y2="200" stroke="rgba(56,189,248,0.06)" stroke-width="1"/>
        <line x1="800" y1="400" x2="1100" y2="400" stroke="rgba(167,139,250,0.06)" stroke-width="1"/>
        <line x1="900" y1="520" x2="1200" y2="520" stroke="rgba(52,211,153,0.06)" stroke-width="1"/>
        <line x1="0" y1="600" x2="250" y2="600" stroke="rgba(52,211,153,0.06)" stroke-width="1"/>
        <line x1="300" y1="0" x2="300" y2="120" stroke="rgba(56,189,248,0.08)" stroke-width="1"/>
        <line x1="500" y1="120" x2="500" y2="300" stroke="rgba(167,139,250,0.07)" stroke-width="1"/>
        <line x1="900" y1="200" x2="900" y2="520" stroke="rgba(56,189,248,0.05)" stroke-width="1"/>
        <line x1="1100" y1="400" x2="1100" y2="800" stroke="rgba(167,139,250,0.05)" stroke-width="1"/>
        <line x1="250" y1="600" x2="250" y2="800" stroke="rgba(52,211,153,0.06)" stroke-width="1"/>
        <circle cx="300" cy="120" r="3" fill="rgba(56,189,248,0.2)"/>
        <circle cx="500" cy="120" r="3" fill="rgba(167,139,250,0.2)"/>
        <circle cx="500" cy="300" r="2" fill="rgba(167,139,250,0.15)"/>
        <circle cx="900" cy="200" r="3" fill="rgba(56,189,248,0.15)"/>
        <circle cx="900" cy="520" r="2" fill="rgba(56,189,248,0.15)"/>
        <circle cx="1100" cy="400" r="3" fill="rgba(167,139,250,0.2)"/>
        <circle cx="250" cy="600" r="3" fill="rgba(52,211,153,0.2)"/>
        <text x="850" y="140" font-family="monospace" font-size="11" fill="rgba(56,189,248,0.1)">&lt;/&gt;</text>
        <text x="1050" y="340" font-family="monospace" font-size="11" fill="rgba(167,139,250,0.1)">{ api }</text>
        <text x="150" y="500" font-family="monospace" font-size="11" fill="rgba(52,211,153,0.08)">SELECT *</text>
        <text x="950" y="620" font-family="monospace" font-size="10" fill="rgba(56,189,248,0.08)">npm run build</text>
        <text x="650" y="700" font-family="monospace" font-size="10" fill="rgba(167,139,250,0.07)">php artisan</text>
        <text x="100" y="250" font-family="monospace" font-size="10" fill="rgba(56,189,248,0.07)">git push</text>
        <text x="750" y="80" font-family="monospace" font-size="10" fill="rgba(52,211,153,0.08)">vue create</text>
        <rect x="820" y="260" width="80" height="40" rx="4" fill="none" stroke="rgba(56,189,248,0.06)" stroke-width="1"/>
        <rect x="100" y="380" width="60" height="30" rx="4" fill="none" stroke="rgba(167,139,250,0.05)" stroke-width="1"/>
        <rect x="1000" y="550" width="100" height="35" rx="4" fill="none" stroke="rgba(52,211,153,0.05)" stroke-width="1"/>
      </svg>
    </div>

    <div class="hero__bg-text" aria-hidden="true">FULL-STACK</div>
    <div class="hero__content">
      <p class="hero__greeting reveal">Bonjour, je suis</p>
      <h1 class="hero__name reveal reveal--delay-1">
        Houssem<br><span class="accent">Frigui</span>
      </h1>
      <div class="hero__title reveal reveal--delay-2">
        <span class="hero__line"></span>
        <p>Tech Lead &amp; Développeur Full-Stack</p>
      </div>
      <p class="hero__stack reveal reveal--delay-3">Laravel &bull; Vue.js &bull; SaaS B2B</p>
      <div class="hero__cta reveal reveal--delay-4">
        <a href="#projects" class="btn btn--primary">Voir mes projets</a>
        <a href="#contact" class="btn btn--outline">Me contacter</a>
      </div>
    </div>

    <div class="hero__shapes" aria-hidden="true">
      <div class="shape shape--1"></div>
      <div class="shape shape--2"></div>
      <div class="shape shape--3"></div>
    </div>

    <div class="hero__scroll" aria-hidden="true">
      <span>Scroll</span>
      <div class="hero__scroll-line"></div>
    </div>
  </section>
</template>
