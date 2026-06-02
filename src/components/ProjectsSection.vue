<template>
  <section class="section projects" id="projects">
    <div class="container">
      <div class="section__header">
        <span class="section__number reveal">04</span>
        <h2 class="section__title reveal">Projets</h2>
      </div>
    </div>
    <div class="projects__showcase">
      <article v-for="project in projects" :key="project.title" class="project-card reveal">
        <div class="project-card__image"></div>
        <div class="project-card__content">
          <div class="project-card__meta">
            <span class="project-card__company">{{ project.company }}</span>
            <span class="project-card__year">{{ project.year }}</span>
          </div>
          <h3 class="project-card__title">
            <span class="project-card__sector-icon" :title="project.sector">
              <i :class="'ph ph-' + project.icon"></i>
            </span>
            {{ project.title }}
          </h3>
          <p class="project-card__desc">{{ project.desc }}</p>
          <ul v-if="project.features?.length" class="project-card__features">
            <li v-for="(f, i) in project.features" :key="i">{{ f }}</li>
          </ul>
          <div class="project-card__stack">
            <span v-for="tech in project.stack" :key="tech">{{ tech }}</span>
          </div>
          <a v-if="project.url" :href="project.url" target="_blank" rel="noopener" class="project-card__link">
            <span>{{ project.linkLabel || 'Visiter le site' }}</span>
            <i class="ph ph-arrow-up-right"></i>
          </a>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: 'Afficonnect',
    company: 'Affinicia',
    year: '2023 — Présent',
    icon: 'headset',
    sector: "Centre d'appel",
    desc: "CRM & Scripteur de vente multi-produits (Énergie et Télécom) utilisé par des centaines d'agents en centres d'appel. Partenariats avec OHM, TotalEnergie, SFR, Orange.",
    features: [
      'Formulaires / scripteur de vente',
      'Gestion call-centers, agents, superviseurs',
      'Gestion fournisseurs / opérateurs',
      "Simulateur d'appel",
      'Gestion des campagnes & documents',
      'Consommation via API Enedis',
    ],
    stack: ['Laravel', 'Vue.js', 'MySQL', 'API REST'],
    url: 'https://afficonnect.fr/',
    linkLabel: 'Visiter le site (accessible en France)',
  },
  {
    title: 'Scribb',
    company: 'Affinicia',
    year: '2023 — Présent',
    icon: 'brain',
    sector: 'Intelligence Artificielle',
    desc: "CRM intégrant l'intelligence artificielle dédiée au contrôle qualité et à l'optimisation des performances en centre d'appel.",
    features: [
      'Solution IA de contrôle qualité des appels',
      'Grilles d\'évaluation multi-critères',
      'Calibrage & entraînement IA',
      'Gestion invitations Google Meet',
      'Gestion campagnes, agents, superviseurs',
    ],
    stack: ['Laravel', 'Vue.js', 'IA', 'Google Meet API'],
    url: 'https://app.scribb.fr/',
  },
  {
    title: 'Console API',
    company: 'Affinicia',
    year: '2023 — Présent',
    icon: 'code',
    sector: 'API & Services',
    desc: 'CRM centralisée exposant des services web mutualisés, consommés par différentes applications métier (Scribb, Afficonnect).',
    features: [
      'Gestion des brokers & campagnes',
      'Permissions & rôles',
      'Traitement factures via IA (Mistral)',
      'Emails via Sweego / Signature CM-Sign',
      'API ENEDIS & éligibilité fibre',
    ],
    stack: ['Laravel', 'Vue.js', 'Mistral IA', 'Sweego', 'CM-Sign'],
    url: 'https://console.affinicia.fr/',
  },
  {
    title: 'Helee',
    company: 'Affinicia',
    year: '2023 — Présent',
    icon: 'funnel',
    sector: 'Leads & Marketing',
    desc: 'CRM dédiée à la vente de leads, permettant de filtrer selon des critères définis par le client : sexe, âge, revenus et type d\'habitat.',
    features: [
      'Gestion utilisateurs, permissions & rôles',
      'Génération & export fichiers CSV',
      'Gestion envoi emails',
      'Calcul & suivi du comptage',
    ],
    stack: ['Laravel', 'Vue.js', 'MySQL'],
    url: 'https://www.helee.com/',
  },
  {
    title: '2L-Courtage',
    company: 'SwConsulting',
    year: '2017 — 2023',
    icon: 'bank',
    sector: 'Banque & Finance',
    desc: 'Plateforme de courtage immobilier multi-agences permettant de négocier des crédits immobiliers avec plus de 15 banques en France.',
    features: [
      'Calcul automatique des propositions bancaires',
      'Simulateur de crédits en ligne',
      'Signature électronique via Yousign',
      'Espace mailing via Nylas',
      'Pipeline & cycle de vie des projets',
      "Système d'assurances multi-partenaires",
    ],
    stack: ['Laravel', 'Vue.js', 'Yousign', 'Nylas', 'SMSBOX'],
    url: 'https://2l-courtage.fr/',
  },
  {
    title: 'Batigo',
    company: 'SwConsulting',
    year: '2017 — 2023',
    icon: 'hammer',
    sector: 'Artisanat & BTP',
    desc: 'Application web & mobile pour les artisans en France. Gestion de chantiers, devis et suivi client.',
    stack: ['Laravel', 'Vue.js', 'Mobile'],
    url: 'https://batigo.fr/',
  },
  {
    title: '2L-Immo',
    company: 'SwConsulting',
    year: '2017 — 2023',
    icon: 'buildings',
    sector: 'Immobilier',
    desc: "Plateforme de vente de biens immobiliers en France. Recherche avancée, gestion d'annonces et suivi des transactions.",
    stack: ['Laravel', 'Vue.js', 'MySQL'],
    url: 'https://www.2l-immo.com/',
  },
  {
    title: 'SMS ProTech',
    company: 'Freelance',
    year: '2024',
    icon: 'gear',
    sector: 'Maintenance Industrielle',
    desc: "Site vitrine dédié à SMS ProTech, entreprise spécialisée dans la maintenance industrielle. Présentation des services techniques, des interventions sur équipements industriels et des solutions de maintenance préventive et corrective.",
    features: [
      'Présentation des services de maintenance',
      'Demande de devis en ligne',
      'Catalogue des interventions techniques',
      'Design responsive & moderne',
    ],
    stack: ['Laravel', 'Vue.js', 'MySQL'],
    url: 'https://www.smsprotech.fr/',
  },
  {
    title: 'Habitat Protect',
    company: 'Affinicia',
    year: 'En cours',
    icon: 'shield-check',
    sector: 'Assurance & Protection',
    desc: "Nouveau type d'assistance en cours d'exécution, dédié à Afficonnect et Affinicia. Module de protection et d'assurance habitat.",
    stack: ['Laravel', 'Vue.js', 'En développement'],
  },
  {
    title: 'Affi+',
    company: 'Affinicia',
    year: 'En cours',
    icon: 'lightning',
    sector: 'Énergie & Télécom',
    desc: "Plateforme proposant les meilleures offres de contrats énergie et télécoms, adaptées à la consommation de l'utilisateur.",
    stack: ['Laravel', 'Vue.js', 'En développement'],
    url: 'https://preprod.affi.plus/',
    linkLabel: 'Voir la préprod',
  },
]
</script>
