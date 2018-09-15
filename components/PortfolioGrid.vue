<template>
  <div class="grid portfolio-grid">
    <div
      class="grid__item one-third lap--one-half palm--one-whole"
      v-for="item in portfolioItems"
      :key="item.slug">
      <nuxt-link
      class="portfolio-grid__item"
      :to="{ name: 'portfolio-friendlyUrl', params: { friendlyUrl: item.slug } }"
      :style="{backgroundImage: `url(${item.data.thumbnail})`}">
        <span class="portfolio-grid__overlay">
          <span class="portfolio-grid__overlay-text">{{item.data.name}}</span>
        </span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['portfolioItems']),
  },
};
</script>
