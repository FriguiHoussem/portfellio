<template>
  <nav class="nav" :class="{ scrolled: isScrolled }">
    <a href="#hero" class="nav__logo" @click.prevent="scrollTo('hero')">HF<span class="accent">.</span></a>
    <ul class="nav__links">
      <li v-for="link in links" :key="link.id">
        <a :href="'#' + link.id" :class="{ active: activeSection === link.id }" @click.prevent="scrollTo(link.id)">{{ link.label }}</a>
      </li>
    </ul>
    <button class="nav__burger" :class="{ active: menuOpen }" @click="toggleMenu" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </nav>

  <!-- Menu mobile overlay -->
  <div class="mobile-menu" :class="{ open: menuOpen }">
    <ul class="mobile-menu__links">
      <li v-for="link in links" :key="link.id">
        <a :href="'#' + link.id" @click.prevent="scrollTo(link.id); closeMenu()">{{ link.label }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Liens de navigation
const links = [
  { id: 'about', label: 'Profil' },
  { id: 'skills', label: 'Compétences' },
  { id: 'experience', label: 'Expérience' },
  { id: 'projects', label: 'Projets' },
  { id: 'education', label: 'Formation' },
  { id: 'contact', label: 'Contact' },
]

const isScrolled = ref(false)
const menuOpen = ref(false)
const activeSection = ref('')

// Détecter le scroll pour changer le style de la nav
function onScroll() {
  isScrolled.value = window.scrollY > 50
}

// Smooth scroll vers une section
function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
  document.body.style.overflow = menuOpen.value ? 'hidden' : ''
}

function closeMenu() {
  menuOpen.value = false
  document.body.style.overflow = ''
}

// Observer les sections pour souligner le lien actif
let sectionObserver = null
function setupSectionObserver() {
  const sections = document.querySelectorAll('.section, .hero')
  sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.getAttribute('id')
      }
    })
  }, { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' })
  sections.forEach(s => sectionObserver.observe(s))
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  setTimeout(setupSectionObserver, 300)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  if (sectionObserver) sectionObserver.disconnect()
})
</script>
