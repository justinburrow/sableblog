<template>
  <div>
    <div class="home-slider">
      <ClientOnly>
        <carousel :dots="true" :items="1" :nav="false">
          <div class="slide">slide 1</div>
          <div class="slide">slide 2</div>
          <div class="slide">slide 3</div>
        </carousel>
      </ClientOnly>
    </div>
  </div>
</template>


<script>
import carousel from 'vue-owl-carousel'
export default {
  name: 'HeaderSlider',
  components: {
      carousel
    },
  mounted() {

    }
}
</script>

<style lang="scss">
.home-slider {
  margin-bottom: 50px;
  width: 100%;
  &:after {
    content: ' ';
    display: block;
    height: 15px;
    width: 100%;
    margin-bottom: 100px;
    background: black;
  }
  .slide {
    width: 100%;
    height: 100px;
  }
}
    
</style>