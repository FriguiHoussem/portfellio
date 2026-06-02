<template>
  <section class="section about" id="about">
    <div class="container">
      <div class="section__header">
        <span class="section__number reveal">01</span>
        <h2 class="section__title reveal">Profil</h2>
      </div>
      <div class="about__grid">
        <div class="about__text">
          <p class="about__lead reveal">
            Tech Lead &amp; Développeur Web Full-Stack avec plus de <strong>8 ans d'expérience</strong> dans la conception et le développement de plateformes <strong>SaaS B2B</strong> à forte volumétrie.
          </p>
          <p class="reveal">
            Expert en <strong>Laravel (PHP 8+)</strong> et <strong>Vue.js</strong>, j'interviens sur l'architecture applicative, le développement backend &amp; frontend, l'intégration d'API tierces et l'optimisation des performances.
          </p>
          <p class="reveal">
            Responsable des choix techniques et garant de la qualité du code, j'accompagne les équipes dans la mise en place de bonnes pratiques <em>(Clean Code, SOLID, architecture modulaire)</em> et dans la livraison de solutions robustes, scalables et sécurisées.
          </p>
          <p class="reveal">
            Expérience confirmée dans le développement de CRM multi-utilisateurs, systèmes à forte charge, traitement de données, intégration d'API partenaires et déploiement sur environnements Linux.
          </p>
        </div>
        <div class="about__info reveal">
          <div class="about__photo">
            <img :src="photoUrl" alt="Houssem Frigui">
          </div>
          <div class="about__card">
            <div v-for="stat in stats" :key="stat.label" class="about__stat">
              <span class="about__stat-number" ref="counterEls" :data-count="stat.value">0</span><span class="accent">+</span>
              <span class="about__stat-label">{{ stat.label }}</span>
            </div>
          </div>
          <div class="about__details">
            <div class="about__detail">
              <i class="ph ph-map-pin"></i>
              <span>Monastir, Tunisie</span>
            </div>
            <div class="about__detail">
              <i class="ph ph-envelope"></i>
              <span>sw.friguihoussem@gmail.com</span>
            </div>
            <div class="about__detail">
              <i class="ph ph-phone"></i>
              <span>+216 99 479 871</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import photoUrl from '../assets/img/photo.jpg'

// Statistiques affichées avec compteurs animés
const stats = [
  { value: 8, label: "Années d'expérience" },
  { value: 10, label: 'Plateformes livrées' },
  { value: 6, label: 'Intégrations API' },
]

// Animer les compteurs quand ils entrent dans le viewport
function animateCounter(el, target) {
  let current = 0
  const increment = target / 50
  const stepTime = 1500 / 50
  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      current = target
      clearInterval(timer)
    }
    el.textContent = Math.floor(current)
  }, stepTime)
}

onMounted(() => {
  const counters = document.querySelectorAll('[data-count]')
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.getAttribute('data-count'))
        animateCounter(entry.target, target)
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.5 })
  counters.forEach(el => observer.observe(el))
})
</script>
