<template>
    <div class="header">
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
              <li><a>Blog</a></li>
              <li><a href="#">Our Commitment</a></li>
              <li><a href="#">About</a></li>
            </ul>
            <div class="logo">
                <a href="/"><img src="~@/assets/images/sable-logo.svg" width="277" alt="S'able Labs" /></a>
            </div>
            <ul>
              <li><a href="#">Subscribe</a></li>
              <li class="search">
                <img src="~@/assets/images/search-icon.svg" alt="Search">
                <input id="search" type="text" v-model="searchTerm" class="input" placeholder="Search">
              </li>
            </ul>
          </div>

          <div class="mobile-search-icon only-mobile-tablet" @click="$actions.openSearch()">
            <img src="~@/assets/images/search-icon.svg" alt="Search">
          </div>
        </div>
        <div class="dropdown">
          <Dropdown :dropdown-state="$store.dropdownShow" @hideDropdown="$actions.hideDropdown()" :search-results="this.searchResultPosts" :show-search="showSearch" :search-term="query"/>
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
    data() {
        return {
          index: null,
          searchTerm: '',
          searchResultPosts: [],
          query: this.searchTerm,
          showSearch: false
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

    },
    mounted() {

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
      searchResults(results) {
        this.searchResultPosts = results;
        if (results.length > 0) {
          this.showSearch = true;
          this.$actions.showDropdown();
        }
      },
     searchTerm(query) {
       this.query = query;
        if (query.length >= 3) {
          this.$actions.showDropdown();
        }
        if (query == '') {
          this.$actions.hideDropdown();
          this.showSearch = false;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
    .header {
        width: 100%;
        box-shadow: 0px 10px 14px 0px rgba(0,0,0,0.4);
        position: relative;
        z-index: 5;
        &::before {
          display: block;
          content: ' ';
          height: 40px;
          background: black;
          width: 100%;
          margin-bottom: 30px;
          @media screen and (max-width: $breakpoint-xl) {
            height: 3vw;
            margin-bottom: 1vw;
          }
          @media screen and (max-width: $breakpoint-lg) {
            height: 5vw;
            margin-bottom: 1vw;
          }
          @media screen and (max-width: $breakpoint-md) {
            height: 4vw;
          }
        }
        &__content {
          background: white;
          padding: 20px 0 0;
          width: 100%;
          max-width: 1600px;
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
                margin-right: 10px;
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
      .dropdown {
        position: absolute;
        width: 100%;
        z-index: 100;
        bottom: 0;
      }
    }
</style>
