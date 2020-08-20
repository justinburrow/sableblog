<template>
  <div class="layout">
    <header>
      <ClientOnly>
        <Announcements />
      </ClientOnly>
      <Header :dropdown-state="$store.dropdownShow" @hideDropdown="$actions.hideDropdown()" :show-search-bar="$store.searchOpen" :show-categories="$store.categoriesOpen"/>
    </header>

    <HomeFeatures v-if="$route.fullPath == '/'" />

    <div class="container">
      <slot/>
    </div>

    <Footer />
  </div>
</template>

<script>
  import Announcements from '~/components/Announcements.vue'
  import Header from '~/components/Header.vue'
  import HomeFeatures from '~/components/HomeFeatures.vue'
  import Footer from '~/components/Footer.vue'

  export default {
    components: {
      Announcements,
      Header,
      HomeFeatures,
      Footer
    },
    data() {
      return {
        currentYear: Number
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
