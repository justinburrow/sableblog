<template>
  <div class="layout">
    <Header />
    <HomeFeatured v-if="$route.fullPath == '/'"/>
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