<template>
  <div class="layout">
    <header>
      <ClientOnly>
        <Announcements />
      </ClientOnly>
      <Header />
    </header>

    <HomeFeatures v-if="$route.fullPath == '/'" />

    <div class="container">
      <slot />
    </div>

    <Footer />
    <Subscription />
  </div>
</template>

<script>
  import Announcements from '~/components/Announcements.vue'
  import Header from '~/components/Header.vue'
  import HomeFeatures from '~/components/HomeFeatures.vue'
  import Footer from '~/components/Footer.vue'
  import Subscription from '~/components/Subscription.vue'

  export default {
    components: {
      Announcements,
      Header,
      HomeFeatures,
      Footer,
      Subscription
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
      }, 1000);
    }
  }
</script>

<style lang="scss" scoped>
  .layout {
  }
  header {
    position: relative;
    z-index: 5;
    &:after {
      content: '';
      display: block;
      width: 100%;
    }
  }
</style>
