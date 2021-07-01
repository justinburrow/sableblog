<template>
  <div class="search-input">
    <input type="text" name="s" placeholder="search" v-model="searchingBy" onfocus="this.placeholder = ''"
    onblur="this.placeholder = 'search'" @keyup.enter="search">
    <img src="~@/assets/images/search-icon.svg" alt="Search" @click="search"/>
  </div>
</template>

  <script>
  export default {
    data() {
      return {
        searchingBy: null
      }
    },

    methods: {
      search() {
        this.$emit('hideSearch');
        this.$emit('updateViewKey');
        this.$emit('hideDropdown');
        this.$store.searchQuery = this.searchingBy;
        this.$router.push({
          path: '/search/',
          query: { s: this.searchingBy }
        }).catch(err => {});
        this.searchingBy = '';
      }
    }
  }
  </script>
