<template>
  <section class="section contact" id="contact">
    <div class="container">
      <div class="section__header">
        <span class="section__number reveal">06</span>
        <h2 class="section__title reveal">Contact</h2>
      </div>
      <div class="contact__grid">
        <div class="contact__text reveal">
          <p class="contact__lead">
            Vous avez un projet en tête ou souhaitez collaborer ?<br>
            N'hésitez pas à me contacter.
          </p>
        </div>
        <div class="contact__links reveal">
          <a v-for="item in contacts" :key="item.label" :href="item.href" :target="item.external ? '_blank' : undefined" :rel="item.external ? 'noopener' : undefined" class="contact__item">
            <i :class="'ph ph-' + item.icon"></i>
            <div>
              <span class="contact__item-label">{{ item.label }}</span>
              <span class="contact__item-value">{{ item.value }}</span>
            </div>
            <i class="ph ph-arrow-up-right"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const contacts = [
  { icon: 'envelope', label: 'Email', value: 'sw.friguihoussem@gmail.com', href: 'mailto:sw.friguihoussem@gmail.com' },
  { icon: 'phone', label: 'Téléphone', value: '+216 99 479 871', href: 'tel:+21699479871' },
  { icon: 'linkedin-logo', label: 'LinkedIn', value: 'Houssem Frigui', href: 'https://www.linkedin.com/in/frigui-houssem-4128a2184/', external: true },
]
</script>
