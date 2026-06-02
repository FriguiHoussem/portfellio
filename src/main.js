// Point d'entrée de l'application Vue
import { createApp } from 'vue'
import App from './App.vue'
import './assets/style.css'

const app = createApp(App)

// Directive globale v-reveal : anime les éléments quand ils entrent dans le viewport
app.directive('reveal', {
  mounted(el) {
    el.classList.add('reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' })
    observer.observe(el)
  }
})

// Montage de l'application
app.mount('#app')

// Observer les éléments avec la classe "reveal" (pour le HTML statique dans les templates)
function setupRevealObserver() {
  const reveals = document.querySelectorAll('.reveal')
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' })
  reveals.forEach(el => observer.observe(el))
}

// Attendre que le DOM soit prêt
setTimeout(setupRevealObserver, 200)
