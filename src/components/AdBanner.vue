<template>
  <div class="ad-banner">
    <div v-show="!isMobile">
      <a href="https://www.portenoire.co.uk" target="_blank"><img src="~@/assets/images/porte-noire-side-banner.jpg" alt="Porte Noire"></a>
    </div>
  </div>
</template>

<script>
import { VueAgile } from 'vue-agile'

export default {
  name: 'AdBanner',
  data() {
    return {
      isMobile: this.$store.isMobile
    }
  }
}
</script>

<style lang="scss" scoped>
  .ad-banner {
    position: absolute;
    top: 0;
    right: -200px;
    width: 161px;
    a {
      cursor: pointer;
      display: block;
    }
    img {
      width: 100%;
      max-width: 100%;
    }
    @media screen and (max-width: 1420px) {
      display: none;
    }
  }
</style>
