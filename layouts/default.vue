<template>
  <div id="app">
    <main-header></main-header>
    <div class="content">
      <div class="wrapper">
        <nuxt/>
      </div>
    </div>
  </div>
</template>

<script>
import MainHeader from '../components/MainHeader.vue';

export default {
  components: {
    MainHeader,
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
