<template>
  <section class="section education" id="education">
    <div class="container">
      <div class="section__header">
        <span class="section__number reveal">05</span>
        <h2 class="section__title reveal">Formation</h2>
      </div>
      <div class="education__grid">
        <div v-for="edu in education" :key="edu.year" class="education__card reveal">
          <div class="education__year">{{ edu.year }}</div>
          <h3>{{ edu.title }}</h3>
          <p>{{ edu.school }}</p>
        </div>
      </div>

      <!-- Langues -->
      <div class="languages reveal">
        <h3 class="languages__title">Langues</h3>
        <div class="languages__grid">
          <div v-for="lang in languages" :key="lang.name" class="language-item">
            <span class="language-item__name">{{ lang.name }}</span>
            <span class="language-item__level">{{ lang.level }}</span>
            <div class="language-item__bar">
              <div class="language-item__fill" :style="{ '--fill': lang.fill + '%' }" ref="langFills"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

const education = [
  { year: '2017', title: 'Master en Génie Logiciel', school: "Institut Supérieur d'Informatique et de Mathématiques, Monastir" },
  { year: '2015', title: 'Licence Fondamentale en Informatique', school: "Institut Supérieur d'Informatique et de Mathématiques, Monastir" },
  { year: '2011', title: 'Baccalauréat Technique', school: 'Lycée Fatouma Bourguiba, Monastir' },
]

const languages = [
  { name: 'Arabe', level: 'Langue maternelle', fill: 100 },
  { name: 'Français', level: 'Courant', fill: 90 },
  { name: 'Anglais', level: 'Intermédiaire', fill: 60 },
]

// Animer les barres de langues au scroll
onMounted(() => {
  const fills = document.querySelectorAll('.language-item__fill')
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.5 })
  fills.forEach(el => observer.observe(el))
})
</script>
