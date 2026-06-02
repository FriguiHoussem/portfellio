<template>
  <section class="section skills" id="skills">
    <div class="container">
      <div class="section__header">
        <span class="section__number reveal">02</span>
        <h2 class="section__title reveal">Compétences</h2>
      </div>
      <div class="skills__grid">
        <div v-for="skill in skills" :key="skill.title" class="skill-card reveal">
          <div class="skill-card__icon">
            <i :class="'ph ph-' + skill.icon"></i>
          </div>
          <h3 class="skill-card__title">{{ skill.title }}</h3>
          <ul class="skill-card__list">
            <li v-for="(item, i) in skill.items" :key="i" v-html="item"></li>
          </ul>
          <div class="skill-card__accent"></div>
        </div>
      </div>

      <!-- Tech Marquee -->
      <div class="marquee reveal" aria-hidden="true">
        <div class="marquee__track">
          <template v-for="(tech, i) in [...marqueeItems, ...marqueeItems]" :key="i">
            <span>{{ tech }}</span><span>&bull;</span>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Données des compétences
const skills = [
  {
    icon: 'terminal-window',
    title: 'Backend',
    items: [
      'PHP 8+',
      'Laravel <small>(API REST, Jobs, Queues, Policies, Middleware)</small>',
      'Architecture modulaire',
      'Conception API RESTful',
      "Intégration d'API tierces",
      'Traitement de données &amp; logique métier complexe',
    ],
  },
  {
    icon: 'browser',
    title: 'Frontend',
    items: ['Vue.js 2 / 3', 'JavaScript', 'Axios', 'HTML5, CSS3'],
  },
  {
    icon: 'database',
    title: 'Base de données',
    items: ['MySQL / MariaDB', 'Optimisation des requêtes SQL'],
  },
  {
    icon: 'cloud-arrow-up',
    title: 'DevOps & Outils',
    items: ['Linux / SSH / Déploiement serveur', 'Gestion SSL / Putty', 'GitLab / GitHub'],
  },
  {
    icon: 'brain',
    title: 'IA & Agents',
    items: [
      'Claude AI <small>(Anthropic)</small>',
      'MCP Servers <small>(Model Context Protocol)</small>',
      'Claude Code &amp; Agent SDK',
      'Skills &amp; Plugins MCP',
      'Mistral AI',
      'Automatisation par agents IA',
    ],
  },
]

// Mots-clés du marquee défilant
const marqueeItems = [
  'Laravel', 'Vue.js', 'PHP 8+', 'MySQL', 'API REST',
  'JavaScript', 'Linux', 'Git', 'Clean Code', 'SOLID',
  'Claude AI', 'MCP Agents', 'Mistral AI',
]
</script>
