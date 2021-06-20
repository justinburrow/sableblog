<template>
  <div :class="[fixedHeader ? 'fixed' : '', 'header']">
    <div class="top-bar"></div>
    <div class="header-content">
      <nav>
          <g-link to="/the-hub">The Hub</g-link>
          <g-link to="/the-podcast">The Podcast</g-link>
          <g-link to="/about">About</g-link>

          <g-link to="/" class="logo">
            <g-image src="~/assets/images/sable-logo.svg" alt="S'able Labs" />
            </g-link>

          <button>Subscribe</button>
          <button>
            <img src="~@/assets/images/search-icon.svg" alt="Search" />
          </button>
        </nav>
    </div>
  </div>

</template>

<script>

  export default {
    name: 'Header',
    components: {
    },
    props: [],
    data() {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
