<template>
  <div>
    <header :class="{ fixed: isFixed }">
      <div class="top-bar"></div>

      <div class="mobileHeader" v-if="isMobile">
        <g-link to="/"><g-image src="~/assets/images/sable-logo.svg" alt="S'able Labs" width="20vw" height="3.2vw" /></g-link>
      </div>

      <div class="header-content">
        <nav>
            <a href="#" :class="{ shown: showCat }" @click="showCat = !showCat, showSearch = false">The Hub</a>
            <a href="https://www.audible.co.uk/pd/Coupledom-with-Idris-and-Sabrina-Elba-Audiobook/B0971LFP1B" @click="showCat = false; showSearch = false;">The Podcast</a>
            <g-link to="/about">About</g-link>

            <g-link to="/" class="logo">
              <g-image src="~/assets/images/sable-logo.svg" alt="S'able Labs" @click="showCat = false; showSearch = false;"/>
            </g-link>

            <button v-if="!isMobile" @click="showCat = false; showSearch = false;">Subscribe</button>
            <button @click="showSearch = !showSearch, showCat = false" :class="{ shown: showCat }">
              <img src="~@/assets/images/search-icon.svg" alt="Search" />
            </button>
          </nav>
      </div>

      <div id="categories" v-if="!isMobile" :class="{ shown: showCat }">
        <div class="container">
          <p class="category-title">A space for all things Coupledom</p>
          <ul>
            <li v-for="cat in catDetails" :key="cat.id" @click="showCat = !showCat">
              <g-link :to="cat.path">
                <img :src="cat.thumbnailImage" :alt="cat.title">
                <h3>{{ cat.title }}</h3>
              </g-link>
            </li>
          </ul>
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

<static-query>
  query {
  allWordPressCategory (filter: {title: {ne: "Uncategorized"}}) {
    edges {
      node {
        id
        title
        content
        path
      }
    }
  }
	allCategoryImages {
    edges {
      node {
        id
  			acf {
      		thumbnailImage
          mainImage
    		}
      }
    }
  }
}
</static-query>

<script>

  import {isMobile} from 'mobile-device-detect';

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
        showSearch: false,
        catDetails: []
      }
    },
    methods: {
      updateScrollPosition() {
        this.scrollPosition = window.scrollY;
        this.evalFixed();
      },
      evalFixed() {
        if (this.scrollPosition > 200 && !this.isMobile) {
          this.isFixed = true;
        } else {
          this.isFixed = false;
        }
      }
    },
    mounted() {
      let that = this;
      const allCatImages = this.$static.allCategoryImages.edges;
      const cat = this.$static.allWordPressCategory.edges;
      cat.filter(function(cat) {
        let catID = cat.node.id;
        allCatImages.filter(function(catImage) {
          if (catID == catImage.node.id) {
            let catInfo = {
              ...cat.node,
              ...catImage.node.acf
            }
            that.catDetails.push(catInfo)
          }
        })
      })
      that.catDetails.reverse();
    },
    created() {
      if (process.isClient) {
        window.addEventListener("scroll", this.updateScrollPosition);
      }
    },
    beforeDestroy() {
      if (process.isClient) {
        window.removeEventListener("scroll", this.updateScrollPosition);
      }
    }
  }
</script>
