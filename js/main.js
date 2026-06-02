/* ============================================================
   HOUSSEM FRIGUI — PORTFOLIO
   Interactions, animations et logique UI
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- CUSTOM CURSOR ---- */
  // On récupère les deux éléments du curseur custom (point + anneau)
  const dot = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');

  // Variables pour stocker la position actuelle du curseur et de l'anneau
  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  // On écoute le mouvement de la souris pour mettre à jour la position
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    // Le point suit directement la souris
    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';
  });

  // L'anneau suit avec un léger retard (effet smooth/fluide)
  function animateCursor() {
    // Interpolation pour un mouvement fluide (lerp)
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Agrandir l'anneau quand on survole un lien ou bouton
  const hoverTargets = document.querySelectorAll('a, button, .project-card, .skill-card, .education__card');
  hoverTargets.forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('hover'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
  });


  /* ---- NAVIGATION : changement de style au scroll ---- */
  const nav = document.getElementById('nav');

  function handleNavScroll() {
    // Si on a scrollé de plus de 50px, on ajoute la classe "scrolled"
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });


  /* ---- MENU BURGER (mobile) ---- */
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');

  // Toggle le menu mobile au clic sur le burger
  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    mobileMenu.classList.toggle('open');
    // Empêcher le scroll quand le menu est ouvert
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });

  // Fermer le menu quand on clique sur un lien
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('active');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });


  /* ---- SCROLL REVEAL : animation d'apparition au scroll ---- */
  const reveals = document.querySelectorAll('.reveal');

  // Utilisation de IntersectionObserver pour détecter quand un élément entre dans le viewport
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Quand l'élément est visible, on ajoute "visible" pour déclencher l'animation CSS
        entry.target.classList.add('visible');
        // On arrête d'observer une fois l'animation déclenchée
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1, // Déclencher quand 10% de l'élément est visible
    rootMargin: '0px 0px -40px 0px' // Léger offset pour déclencher un peu avant
  });

  // Observer chaque élément avec la classe "reveal"
  reveals.forEach(el => revealObserver.observe(el));


  /* ---- COMPTEUR ANIMÉ (section Profil) ---- */
  const counters = document.querySelectorAll('[data-count]');

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-count'));
        animateCounter(el, target);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => counterObserver.observe(el));

  // Fonction pour animer un compteur de 0 à la valeur cible
  function animateCounter(el, target) {
    let current = 0;
    const increment = target / 50; // On divise en 50 étapes
    const duration = 1500; // Durée totale en ms
    const stepTime = duration / 50;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(current);
    }, stepTime);
  }


  /* ---- BARRES DE LANGUES : animation au scroll ---- */
  const languageFills = document.querySelectorAll('.language-item__fill');

  const langObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Ajouter la classe "animate" pour déclencher l'animation CSS de la barre
        entry.target.classList.add('animate');
        langObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  languageFills.forEach(el => langObserver.observe(el));


  /* ---- SMOOTH SCROLL pour les ancres ---- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });


  /* ---- ACTIVE NAV LINK : souligner la section visible ---- */
  const sections = document.querySelectorAll('.section, .hero');
  const navLinks = document.querySelectorAll('.nav__links a');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Retirer "active" de tous les liens
        navLinks.forEach(link => link.classList.remove('active'));
        // Trouver le lien correspondant à la section visible
        const id = entry.target.getAttribute('id');
        const activeLink = document.querySelector(`.nav__links a[href="#${id}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
          // Ajouter un style pour le lien actif
          activeLink.style.color = 'var(--accent)';
        }
        // Retirer le style des autres liens
        navLinks.forEach(link => {
          if (link !== activeLink) {
            link.style.color = '';
          }
        });
      }
    });
  }, {
    threshold: 0.3, // 30% de la section doit être visible
    rootMargin: '-80px 0px -50% 0px'
  });

  sections.forEach(section => sectionObserver.observe(section));


  /* ---- PARALLAX léger pour les shapes du hero ---- */
  const shapes = document.querySelectorAll('.shape');

  window.addEventListener('mousemove', (e) => {
    // Calculer la position relative de la souris (entre -1 et 1)
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;

    // Appliquer un déplacement différent à chaque shape pour l'effet de profondeur
    shapes.forEach((shape, index) => {
      const speed = (index + 1) * 8; // Vitesse différente par shape
      shape.style.transform += ''; // Reset
      shape.style.marginLeft = x * speed + 'px';
      shape.style.marginTop = y * speed + 'px';
    });
  }, { passive: true });

});
