<template>
  <div :class="[fixedHeader ? 'fixed' : '', 'header']">
    <MenuPanel />
    <SearchPanel />
      <div class="header__content container-full">
        <div class="menu-icon only-mobile-tablet" @click="$actions.openMenu()">
          <img src="~@/assets/images/menu-icon.svg" alt="Menu" />
        </div>

        <div class="logo only-mobile-tablet">
          <g-link to:="/"><img src="~@/assets/images/sable-logo.svg" width="370" alt="S'able Labs" /></g-link>
        </div>

        <div class="navigation only-desktop">
          <ul>
            <li class="blog" :class="blogHover ? 'active':''" @mouseenter="openBlogDropdown(), bloghover = true, searchHover = false" @click="openBlogDropdown(), bloghover = true, searchHover = false"><a>Blog</a></li>
            <li class="commitment" @mouseenter="showDropdown = false, bloghover = false; searchHover = false;" @click="setActive('commitment')" :class="{active: isActive('commitment')}"><a href="/our-commitment/">Our Commitment</a></li>
            <li class="about" @mouseenter="showDropdown = false, bloghover = false; searchHover = false;" @click="setActive('about')" :class="{active: isActive('about')}"><a href="/pages/about-us/">About</a></li>
          </ul>
          <div class="logo" @mouseenter="bloghover = false; searchHover = false;">
              <a href="/"><img src="~@/assets/images/sable-logo.svg" width="277" alt="S'able Labs" /></a>
          </div>
          <ul>
            <li class="subscribe" @mouseenter="showDropdown = false, bloghover = false, searchHover = false"><button>Subscribe</button></li>
            <li class="search" :class="searchHover ? 'active' : ''"  @mouseenter="openSearchDropdown(), blogHover = false, searchHover = true" @click="openSearchDropdown(), searchHover = true;">
              <button><img src="~@/assets/images/search-icon.svg" alt="Search"></button>
            </li>
            <li class="spacer">&nbsp;&nbsp;&nbsp;&nbsp;</li>
          </ul>
        </div>

        <div class="mobile-search-icon only-mobile-tablet" @click="$actions.openSearch()">
          <img src="~@/assets/images/search-icon.svg" alt="Search">
        </div>
      </div>
      <div class="dropdown-container" :class="showDropdown ? 'show' : 'hide'" ref="dropdownContainer" @mouseenter="focusLine()" @mouseleave="showDropdown = false, blogHover = false, searchHover = false">
        <Dropdown :show-search="showSearch" :dropdown-state="showDropdown" />
      </div>
  </div>
</template>

<script>
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
    props: ['dropdownState', 'showSearchBar', 'showCategories'],
    data() {
      return {
        showSearch: false,
        showDropdown: false,
        categoryOpen: false,
        headerHeight: 0,
        fixedHeader: false,
        blogHover: false,
        searchHover: false,
        activeItem: null
      }
    },
    methods: {
      openBlogDropdown() {
        this.showDropdown = !this.showDropdown;
        this.showSearch = false;
      },
      openSearchDropdown() {
        this.showDropdown = !this.showDropdown;
        this.showSearch = true;
      },
      getDropdownPosition() {
        this.headerHeight = document.querySelector('.header').offsetHeight;
        document.querySelector('.dropdown-container').style.top = this.headerHeight + "px";
      },
      stickyHeader() {
        this.fixedHeader = document.documentElement.scrollTop > this.headerHeight;
        if (this.fixedHeader) {
          document.querySelector('.container').style.paddingTop = this.headerHeight + "px";
        } else {
          document.querySelector('.container').style.paddingTop = 0;
        }
      },
      focusLine() {
        if (!this.showSearch) {
          this.blogHover = true;
          this.searchHover = false;
        } else {
          this.blogHover = false;
          this.searchHover = true;
        }
      },
      isActive(menuItem) {
        return this.activeItem === menuItem
      },
      setActive(menuItem) {
        this.activeItem = menuItem
      }
    },
    mounted() {
      this.getDropdownPosition();
      document.addEventListener('scroll', this.stickyHeader);
    },
    watch: {
      dropdownState(state) {
        this.showDropdown = state;
      },
      showSearchBar(state) {
        this.showSearch = state;
      },
      showCategories(state) {
        this.categoryOpen = state
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header {
      width: 100%;
      box-shadow: 0px 10px 14px 0px rgba(0,0,0,0.3);
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
        margin: 0 auto;
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
              margin-top: -32px;
                li {
                  display: flex;
                  align-items: center;
                  margin: 0;
                  padding: 0;
                  text-transform: uppercase;
                  position: relative;
                  padding: 0 10px;
                  &.active, &:hover {
                    &:after {
                      content: ' ';
                      display: block;
                      background-color: #164734;
                      height: 8px;
                      position: absolute;
                      width: 100%;
                      bottom: 0;
                      left: 0;
                    }
                  }
                  .spacer {
                    &.active.after {
                      height: 0;
                    }
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
            margin: 10px 6% 0;
            padding-bottom: 0;
          }

          .search {
            position: relative;
            img {
              margin-top: 10px;
              width: 25px;
              fill: black;
              filter: brightness(0);
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
      transition: all .5s ease;
      &.hide {
        transform: translateY(-100%);
        opacity: 0;
      }
      &.show {
        transform: translateY(0);
        opacity: 1;
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
