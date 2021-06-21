<template>
  <div>
    <header :class="{ fixed: isFixed }">
      <div class="top-bar"></div>

      <div class="header-content">
        <nav>
            <a href="#" :class="{ shown: showCat }" @click="showCat = !showCat">The Hub</a>
            <g-link to="/the-podcast">The Podcast</g-link>
            <g-link to="/about">About</g-link>

            <g-link to="/" class="logo">
              <g-image src="~/assets/images/sable-logo.svg" alt="S'able Labs" />
            </g-link>

            <button>Subscribe</button>
            <button @click="showSearch = !showSearch" :class="{ shown: showCat }">
              <img src="~@/assets/images/search-icon.svg" alt="Search" />
            </button>
          </nav>
      </div>

      <div id="categories" v-if="!isMobile" :class="{ shown: showCat }">
        <div class="container">
          <p class="category-title">A space for all things Coupledom</p>
          <!--<ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>-->
        </div>
      </div>
      <div id="search-box" v-if="!isMobile" :class="{ shown: showSearch }">
        <div class="container">
          <input type="text" name="" value="" placeholder="search" onfocus="this.placeholder = ''"
onblur="this.placeholder = 'search'">
          <img src="~@/assets/images/search-icon.svg" alt="Search" />
        </div>
      </div>
    </header>


  </div>
</template>

<script>

  import {isMobile} from 'mobile-device-detect'

  export default {
    name: 'Header',
    components: {
    },
    props: [],
    data() {
      return {
        isMobile,
        scrollPosition: null,
        isFixed: false,
        showCat: false,
        showSearch: false
      }
    },
    methods: {
      updateScrollPosition() {
        this.scrollPosition = window.scrollY;
        this.evalFixed();
      },
      evalFixed() {
        if (this.scrollPosition > 200) {
          this.isFixed = true;
        } else {
          this.isFixed = false;
        }
      }
    },
    created() {
      window.addEventListener("scroll", this.updateScrollPosition);
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.updateScrollPosition);
    }
  }
</script>
