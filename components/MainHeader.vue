<template>
  <header class="header">
    <nuxt-link :to="{ name: 'index' }" class="header__main">
      <img
        class="header__logo"
        width="250"
        height="250"
        src="/images/birb.png" alt="Rebecca Deakin" name="Rebecca Deakin" />
      <h1 class="header__site-name">Rebecca Deakin</h1>
    </nuxt-link>
    <nav class="nav">
      <nuxt-link
        v-for="item in menuItems"
        :key="item.slug"
        class="nav__item" :to="{ name: 'menuItem', params: { menuItem: item.slug } }">
        <span class="nav__item-inner">About</span>
      </nuxt-link>
      <a class="nav__item" href="mailto:beccy.deakin@googlemail.com">Contact</a>
      <a class="nav__item" href="/docs/test.pdf" target="_blank" rel="noopener">CV</a>
      <div class="nav__icons">
        <a class="nav__icon-item" name="Rebecca Deakin on twitter" title="Rebecca Deakin on twitter" href="https://twitter.com/#!/BeccyDeakin" target="_blank" rel="noopener"><i class="fab fa-twitter"></i></a>
        <a class="nav__icon-item" name="Rebecca Deakin on tumblr" title="Rebecca Deakin on tumblr" href="http://rebeccadeakin.tumblr.com/" target="_blank" rel="noopener"><i class="fab fa-tumblr"></i></a>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['menuItems']),
  },
};
</script>
