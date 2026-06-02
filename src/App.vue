<template>
  <!-- Grain overlay décoratif -->
  <div class="grain" aria-hidden="true"></div>

  <!-- Curseur custom -->
  <div class="cursor-dot" ref="cursorDot" aria-hidden="true"></div>
  <div class="cursor-ring" ref="cursorRing" :class="{ hover: cursorHover }" aria-hidden="true"></div>

  <!-- Navigation -->
  <NavBar />

  <!-- Sections du portfolio -->
  <HeroSection />
  <AboutSection />
  <SkillsSection />
  <ExperienceSection />
  <ProjectsSection />
  <EducationSection />
  <ContactSection />
  <FooterSection />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import EducationSection from './components/EducationSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'

// --- Curseur custom ---
const cursorDot = ref(null)
const cursorRing = ref(null)
const cursorHover = ref(false)

let mouseX = 0, mouseY = 0
let ringX = 0, ringY = 0
let animId = null

// Mouvement du point (suit la souris directement)
function onMouseMove(e) {
  mouseX = e.clientX
  mouseY = e.clientY
  if (cursorDot.value) {
    cursorDot.value.style.left = mouseX + 'px'
    cursorDot.value.style.top = mouseY + 'px'
  }
}

// L'anneau suit avec un retard fluide (lerp)
function animateCursor() {
  ringX += (mouseX - ringX) * 0.12
  ringY += (mouseY - ringY) * 0.12
  if (cursorRing.value) {
    cursorRing.value.style.left = ringX + 'px'
    cursorRing.value.style.top = ringY + 'px'
  }
  animId = requestAnimationFrame(animateCursor)
}

// Hover sur les éléments interactifs
function setupHoverListeners() {
  const targets = document.querySelectorAll('a, button, .project-card, .skill-card, .education__card')
  targets.forEach(el => {
    el.addEventListener('mouseenter', () => { cursorHover.value = true })
    el.addEventListener('mouseleave', () => { cursorHover.value = false })
  })
}

onMounted(() => {
  document.addEventListener('mousemove', onMouseMove)
  animateCursor()
  // Attendre que tous les composants soient montés
  setTimeout(setupHoverListeners, 500)
})

onUnmounted(() => {
  document.removeEventListener('mousemove', onMouseMove)
  if (animId) cancelAnimationFrame(animId)
})
</script>
