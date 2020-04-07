<template>
  <transition name="search" v-on:after-enter="openPanel" v-on:after-leave="closePanel">
    <div class="search-panel only-mobile-tablet" v-if="this.$store.searchOpen" v-click-outside="closeMenu">
      <div class="close-search" @click="$actions.closeSearch()">  
        <img src="~@/assets/images/close-icon.svg" alt="Close" />
      </div>
    </div>
  </transition>
</template>


<script>
import ClickOutside from 'vue-click-outside'
import Flexsearch from 'flexsearch'

export default {
  name: 'SearchPanel',
  data() {
    return {
      open: false
    }
  },
  methods: {
    closeMenu: function(el) {
      if (this.open == true) {
        this.$actions.closeSearch();
      } else {
        return
      }
    },
    openPanel: function(el) {
      this.open = true;
    },
    closePanel: function(el) {
      this.open = false;
    }
  },
  directives: {
    ClickOutside
  }
}
</script>

<style lang="scss" scoped>
  .search-panel {
    position: absolute;
    top: 0;
    height: 100%;
    background: black;
    box-shadow: -7px 0 5px 0 rgba(0,0,0,0.5);
    z-index: 100;
    right: 0;
    width: 95vw;
    
    &.search-enter-to, &.search-leave {
      transition: right .4s ease-in-out;
    }

    &.search-enter, &.search-leave-to {
      transition: right .4s ease-in-out;
      right: -100vw;
    }

    .close-search {
      position: absolute;
      top: 10px;
      right: 10px;
      padding: 10px;
      img {
        filter: invert(1);
        width: 25px;
      }
    }
  }
</style>