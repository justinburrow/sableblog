<template>
  <div class="layout">
      <Header />

    <div class="container">
      <HomeFeatures v-if="$route.fullPath == '/'"/>
      <slot />
    </div>

    <Footer />
  </div>
</template>

<script>
  import Header from '~/components/Header.vue'
  import HomeFeatures from '~/components/HomeFeatures.vue'
  import Footer from '~/components/Footer.vue'

  export default {
    components: {
      Header,
      HomeFeatures,
      Footer
    },
    data() {
      return {
        currentYear: Number,
        searchTerm: ''
      }
    },
    methods: {
      closeMenu(e) {
        if (this.$store.menuOpen == true) {
          this.$actions.closeMenu();
        }
      }
    },
    created() {
      setTimeout(() => {
        this.$flockler;
      }, 2000);
    },
    mounted() {
    }
  }
</script>
