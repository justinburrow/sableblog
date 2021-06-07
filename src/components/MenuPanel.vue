<template>
  <transition name="menu" v-on:after-enter="openPanel" v-on:after-leave="closePanel">
    <div class="menu-panel only-mobile-tablet" v-if="$store.menuOpen" v-click-outside="closeMenu" v-scroll-lock="$store.menuOpen">
      <div class="close-menu" @click="$actions.closeMenu()">
        <img src="~@/assets/images/close-icon.svg" alt="Close" />
      </div>
      <div class="categories">
          <h2>Categories</h2>
          <ul>
            <li v-for="cat in this.$static.categories.edges" :key="cat.id" @click="$actions.closeMenu()">
              <g-link :to="cat.node.path">{{cat.node.title}}</g-link>
            </li>
          </ul>
        </div>
    </div>
  </transition>
</template>

<static-query>
    query {
        categories: allWordPressCategory {
            edges {
                node {
                    id
                    title
                    path
                }
            }
        }
    }
</static-query>


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
    height: 100vh;
    background: rgba(0,0,0,0.9);
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
      top: 20px;
      right: 20px;
      padding: 10px;
      img {
        filter: invert(1);
        width: 25px;
        @media screen and (max-width: $breakpoint-lg) {
         width: 4vw;
        }
        @media screen and (max-width: $breakpoint-md) {
          width: 4vw;
        }
        @media screen and (max-width: $breakpoint-sm) {
          width: 5vw;
        }
      }
    }

    .categories {
      padding: 0 5vw;
      margin-top: 18vw;
      text-transform: uppercase;
      h2 {
        text-align: left;
        font-family: 'acumin-pro-extra-condensed';
        letter-spacing: .3vw;
        color: white;
        font-size: 8vw;
        line-height: 1;
        margin: 0 0 3vw 0;
        padding: 0 0 3vw 0;
        border-bottom: 1px solid rgba(255,255,255,.5);
      }
      ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
        li {
          margin: 0;
          padding: 3vw 0;
          color: white;
          font-size: 5vw;
          a {
            color: white;
            text-decoration: none;
          }
        }
      }
    }
  }
</style>
