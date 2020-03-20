<template>
  <div class="layout">
    <header>
      <Header />
      <HomeFeatured v-if="$route.fullPath == '/'"/>
    </header>
    <div class="container">
      <slot/>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import HomeFeatured from '~/components/HomeFeatured.vue'
export default {
  components: {
    Header,
    HomeFeatured
  }
}
</script>

<style lang="scss" scoped>
  header {
    &:after {
      content: '';
      display: block;
      border-top: 12px solid black;
      padding-top: 45px;
      width: 100%;
    }
  }
</style>