<template>
  <div class="home-slider">
      <ClientOnly>
        <carousel :dots="false" :items="1" :nav="false" :autoplay="true">
          <div class="slide">
            <g-image src="~/assets/images/slides/slide1.jpg" alt="slide1" width=
            "100%" height="43.5vw"></g-image>
          </div>
          <div class="slide">
            <g-image src="~/assets/images/slides/slide2.jpg" alt="slide2" width=
            "100%" height="43.5vw"></g-image>
          </div>
          <div class="slide">
            <g-image src="~/assets/images/slides/slide3.jpg" alt="slide3" width=
            "100%" height="43.5vw"></g-image>
          </div>
        </carousel>
      </ClientOnly>
  </div>
</template>


<script>
export default {
  name: 'HeaderSlider',
  components: {
      'carousel': typeof window !==  'undefined' ? () => import('vue-owl-carousel') : '',
    },
  mounted() {

    }
}
</script>

<style lang="scss" scoped>
.home-slider {
  margin-bottom: 50px;
  width: 100%;
  height: 500px;
  &:after {
    content: ' ';
    display: block;
    height: 15px;
    width: 100%;
    margin-top: 50px;
    background: black;
    @media screen and (max-width: $breakpoint-md) {
      margin-top: 10vw;
      height: 3vw;
    }
  }
  .slide {
    width: 100%;
    height: 500px;
    img {
      width: 100%;
      max-width: 100%;
      object-fit: cover;
      height: 100%;
    }
  }
}

</style>
