<template>
  <section class="section experience" id="experience">
    <div class="container">
      <div class="section__header">
        <span class="section__number reveal">03</span>
        <h2 class="section__title reveal">Expérience</h2>
      </div>
      <div class="timeline">
        <div v-for="exp in experiences" :key="exp.company" class="timeline__item reveal">
          <div class="timeline__marker"></div>
          <div class="timeline__date">{{ exp.date }}</div>
          <div class="timeline__card">
            <div class="timeline__card-header">
              <h3>{{ exp.role }}</h3>
              <span class="timeline__company">{{ exp.company }}</span>
            </div>
            <p class="timeline__desc">{{ exp.desc }}</p>
            <div class="timeline__tags">
              <span v-for="tag in exp.tags" :key="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const experiences = [
  {
    date: 'Fév. 2023 — Présent',
    role: 'Tech Lead',
    company: 'Affinicia Tunisie',
    desc: "Responsable technique de plusieurs plateformes SaaS B2B utilisées par des centaines d'agents en centre d'appel. Architecture, développement, intégration d'API partenaires et supervision des équipes techniques.",
    tags: ['Laravel', 'Vue.js', 'API REST', 'SaaS B2B', 'Claude AI', 'MCP Agents', 'Mistral AI', 'ENEDIS API'],
  },
  {
    date: 'Oct. 2017 — Fév. 2023',
    role: 'Développeur Full-Stack',
    company: 'SwConsulting',
    desc: 'Développement de plateformes de courtage immobilier multi-agences, simulateurs de crédits, intégration de signatures électroniques, systèmes de mailing et gestion documentaire.',
    tags: ['Laravel', 'Vue.js', 'Yousign API', 'Nylas API', 'Google Drive API'],
  },
]
</script>
