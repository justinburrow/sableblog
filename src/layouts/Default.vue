<template>
  <div class="layout">
    <Header />
    <HomeSlider />
    <div class="container">
      <slot/>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import HomeSlider from '~/components/HomeSlider.vue'
export default {
  components: {
    Header,
    HomeSlider
  }
}
</script>