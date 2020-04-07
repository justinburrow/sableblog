<template>
  <transition name="menu" v-on:after-enter="openPanel" v-on:after-leave="closePanel">
    <div class="menu-panel only-mobile-tablet" v-if="this.$store.menuOpen" v-click-outside="closeMenu">
      <div class="close-menu" @click="$actions.closeMenu()">
        <img src="~@/assets/images/close-icon.svg" alt="Close" />
      </div>
    </div>
  </transition>
</template>


<script>
import ClickOutside from 'vue-click-outside'
export default {
  name: 'MenuPanel',
  data() {
    return {
      open: false
    }
  },
  methods: {
    closeMenu: function(el) {
      if (this.open == true) {
        this.$actions.closeMenu();
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
  .menu-panel {
    position: absolute;
    top: 0;
    height: 100%;
    background: black;
    z-index: 100;
    box-shadow: 7px 0 5px 0 rgba(0,0,0,0.5);
    left: 0;
    width: 95vw;
    
    &.menu-enter-to, &.menu-leave {
      transition: left .4s ease-in-out;
    }

    &.menu-enter, &.menu-leave-to {
      transition: left .4s ease-in-out;
      left: -100vw;
    }

    .close-menu {
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