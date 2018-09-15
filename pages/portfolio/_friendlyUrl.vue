<template>
  <div>
    <h1 class="portfolio-item__title">{{ data.title }}</h1>
    <vue-markdown class="w-block" :source="content"></vue-markdown>
    <portfolio-grid></portfolio-grid>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import VueMarkdown from 'vue-markdown';
import PortfolioGrid from '../../components/PortfolioGrid.vue';

export default {
  components: {
    VueMarkdown,
    PortfolioGrid,
  },
  data() {
    return {
    };
  },
  head() {
    return {
      title: this.data.title,
      description: this.data.description,
      keywords: this.data.keywords,
    };
  },
  computed: {
    ...mapState(['portfolioItems']),
    item() {
      return this.portfolioItems.find(item => item.slug === this.$route.params.friendlyUrl);
    },
    content() {
      return this.item ? this.item.content : '';
    },
    data() {
      return this.item ? this.item.data : {};
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
