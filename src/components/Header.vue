<template>
  <div :class="[fixedHeader ? 'fixed' : '', 'header']">
    <MenuPanel />
    <SearchPanel />
      <div class="header__content container-full">
        <div class="menu-icon only-mobile-tablet" @click="$actions.openMenu()">
          <img src="~@/assets/images/menu-icon.svg" alt="Menu" />
        </div>

        <div class="logo only-mobile-tablet">
          <a href="/"><img src="~@/assets/images/sable-logo.svg" width="370" alt="S'able Labs" /></a>
        </div>

        <div class="navigation only-desktop">
          <ul>
            <li><a @click="openBlogDropdown()">Blog</a></li>
            <li><a href="#">Our Commitment</a></li>
            <li><a href="#">About</a></li>
          </ul>
          <div class="logo">
              <a href="/"><img src="~@/assets/images/sable-logo.svg" width="277" alt="S'able Labs" /></a>
          </div>
          <ul>
            <li><button>Subscribe</button></li>
            <li class="search">
              <button @click="$actions.openSearch()"><img src="~@/assets/images/search-icon.svg" alt="Search"></button>
            </li>
          </ul>
        </div>

        <div class="mobile-search-icon only-mobile-tablet" @click="$actions.openSearch()">
          <img src="~@/assets/images/search-icon.svg" alt="Search">
        </div>
      </div>
      <div class="dropdown-container" :class="showDropdown ? 'show' : 'hide'">
        <Dropdown :search-results="this.searchResultPosts" :show-search="showSearchBar" :dropdown-state="showDropdown" />
      </div>
  </div>
</template>

<static-query>
query {
  allPosts: allWordPressPost {
    edges {
      node {
        id
        title
        path
        dateGmt
        excerpt
        categories {
          title
        }
        featuredMedia {
          sourceUrl
          altText
          caption
        }
      }
    }
  }
}
</static-query>

<script>
  import Flexsearch from 'flexsearch'
  import MenuPanel from '~/components/MenuPanel.vue'
  import SearchPanel from '~/components/SearchPanel.vue'
  import Dropdown from '~/components/Dropdown.vue'

  export default {
    name: 'Header',
    components: {
        MenuPanel,
        SearchPanel,
        Dropdown
    },
    props: ['dropdownState', 'showSearchBar'],
    data() {
        return {
          index: null,
          searchTerm: '',
          searchResultPosts: [],
          query: this.searchTerm,
          showSearch: false,
          showDropdown: false,
          headerHeight: 0,
          fixedHeader: false
        }
    },
    beforeMount() {
      this.index = new Flexsearch({
        tokenize: 'forward',
        doc: {
          id: 'id',
          field: [
            'title',
            'excerpt'
          ]
        }
      })
      this.index.add(this.$static.allPosts.edges.map(e => e.node));
    },
    methods: {
      openBlogDropdown() {
        this.$actions.toggleDropdown();
        this.$actions.closeSearch();
      },
      getDropdownPosition() {
        this.headerHeight = document.querySelector('.header').offsetHeight;
        document.querySelector('.dropdown-container').style.top = this.headerHeight + "px";
      },
      stickyHeader() {
        this.fixedHeader = document.documentElement.scrollTop > this.headerHeight;
        if (this.fixedHeader) {
          document.querySelector('body').style.paddingTop = this.headerHeight + "px";
        } else {
          document.querySelector('body').style.paddingTop = 0;
        }
      }
    },
    mounted() {
      this.getDropdownPosition();
      document.addEventListener('scroll', this.stickyHeader);
    },
    computed: {
      searchResults() {
        if (this.index === null || this.searchTerm.length < 3) return [];
        return this.index.search({
          query: this.searchTerm,
          limit: 3
        });
      }
    },
    watch: {
      dropdownState: function(state) {
        this.showDropdown = state;
      },
      showSearchBar(state) {
        this.showSearch = state;
      },
     /*searchTerm(query) {
       this.query = query;
        if (query.length >= 3) {
          this.$actions.showDropdown();
        }
        if (query == '') {
          this.$actions.hideDropdown();
          this.showSearch = false;
        }
      }*/
    }
  }
</script>

<style lang="scss" scoped>
  .header {
      width: 100%;
      box-shadow: 0px 10px 14px 0px rgba(0,0,0,0.4);
      position: relative;
      background: white;
      z-index: 5;

      &__content {
        background: white;
        padding: 20px 0 0;
        width: 100%;
        max-width: 1600px;
        position: relative;
        z-index: 5;
        @media screen and (max-width: $breakpoint-xl) {
          padding: 2vw 5vw 3vw 5vw;
          display: flex;
          align-items: center;
        }
        @media screen and (max-width: $breakpoint-lg) {
          padding: 2vw 3vw 3vw;
          display: flex;
          align-items: center;
        }
        .menu-icon {
          cursor: pointer;
          img {
            @media screen and (max-width: $breakpoint-xl) {
              width: 4vw;
            }
            @media screen and (max-width: $breakpoint-lg) {
              width: 5vw;
            }
            @media screen and (max-width: $breakpoint-md) {
              width: 7.5vw;
            }
          }
        }
        .logo {
            width: 100%;
            text-align: center;
            padding-bottom: 40px;
            @media screen and (max-width: $breakpoint-xl) {
              padding-bottom: 0;
            }
            img {
              width: 277px;
              @media screen and (max-width: $breakpoint-xl) {
                width: 25vw;
              }
              @media screen and (max-width: $breakpoint-lg) {
                width: 35vw;
              }
            }
            a {
              border: none;
              display: inline-block;
            }
          }

          .navigation {
            width: 98%;
            display: flex;
            margin: 0 auto;
            height: 100px;
            ul {
              justify-content: center;
              font-family: 'acumin-pro-condensed', 'Helvetica Neue', sans-serif;
              font-weight: 600;
              font-style: normal;
              width: 100%;
              position: relative;
              display: flex;
              justify-content: space-between;
              margin: 0;
              padding: 0;
              list-style-type: none;
              font-size: 1.3rem;
              letter-spacing: .05rem;
              margin-top: -50px;
                li {
                  display: flex;
                  align-items: center;
                  margin: 0;
                  padding: 0;
                  text-transform: uppercase;
                  position: relative;
                  padding: 0 10px;
                  &.active:after {
                    content: ' ';
                    display: block;
                    background-color: black;
                    height: 3px;
                    position: absolute;
                    width: 100%;
                    bottom: 0;
                    left: 0;
                  }
                  a {
                    color: black;
                    text-decoration: none;
                    position: relative;
                    cursor: pointer;
                  }
                  button {
                    border: none;
                    background: none;
                    font-family: 'acumin-pro-condensed', 'Helvetica Neue', sans-serif;
                    font-weight: 600;
                    font-style: normal;
                    list-style-type: none;
                    font-size: 1.3rem;
                    letter-spacing: .05rem;
                    text-transform: uppercase;
                    cursor: pointer;
                  }
                }
              }

          .logo {
            margin: 0 6%;
            padding-bottom: 0;
          }

          .search {
            position: relative;
            display: flex;
            width: 65%;


            img {
              margin-top: 10px;
              width: 25px;
              fill: black;
              filter: brightness(0);
            }

            input {
              font-family: 'acumin-pro-condensed', 'Helvetica Neue', sans-serif;
              font-weight: 600;
              font-style: normal;
              font-size: 1.3rem;
              letter-spacing: .05rem;
              flex: 1;
              text-transform: uppercase;
              letter-spacing: 1px;
              position: relative;
              border: none;
              border-bottom: 2px solid black;
              padding-bottom: 3px;
              &:focus::-webkit-input-placeholder { color:transparent; }
              &::placeholder {
                color: rgba(0,0,0,0.3);
              }
            }
          }

          .social {
            display: flex;
            justify-content: flex-end;
            align-self: center;
            margin: 0;
            padding: 0;
            height: 100%;
            li {
              list-style-type: none;
              margin-right: 30px;
              &:first-child {
                margin-left: 0;
              }
              img {
                vertical-align: middle;
              }
            }
          }
      }

      .mobile-search-icon {
        img {
          filter: brightness(0);
          @media screen and (max-width: $breakpoint-xl) {
            width: 4vw;
          }
          @media screen and (max-width: $breakpoint-lg) {
            width: 5vw;
          }
          @media screen and (max-width: $breakpoint-md) {
            width: 7.5vw;
          }
        }
      }
    }

    .dropdown-container {
      position: absolute;
      width: 100%;
      top: 0;
      z-index: 3;
      transition: transform 0.3s ease;
      &.hide {
        transform: translateY(-100%);
      }
      &.show {
        transform: translateY(0);
      }
    }

    &.fixed {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      pointer-events: auto;
    }
  }
</style>
