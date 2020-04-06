<template>
  <transition name="menu" v-on:after-enter="openPanel" v-on:after-leave="closePanel">
    <div class="menu-panel only-mobile" v-if="this.$store.menuOpen" v-click-outside="closeMenu">
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
    width: 90vw;
    
    &.menu-enter-to, &.menu-leave {
      transition: left .3s ease;
    }

    &.menu-enter, &.menu-leave-to {
      transition: left .3s ease;
      left: -100vw;
    }
  }
</style>