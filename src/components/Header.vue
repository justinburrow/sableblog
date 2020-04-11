<template>
    <div class="header">
      <MenuPanel />
      <SearchPanel />
        <div class="header__content container-full">
          <div class="menu-icon only-mobile-tablet" @click="$actions.openMenu()"> 
            <img src="~@/assets/images/menu-icon.svg" alt="Menu" />
          </div>

          <div class="logo">
            <a href="/"><img src="~@/assets/images/sable-logo.svg" width="370" alt="S'able Labs" /></a>
          </div>

          <div class="navigation only-desktop">
            <div class="categories">  
              <Categories :search-results='searchResults' :search-term="searchTerm"/>
            </div>

            <div class="spacer"></div>

            <div class="search">
              <input id="search" type="text" v-model="searchTerm" class="input" placeholder="Search">
            </div>

            <ul class="social">
              <li><a href="#"><img src="~@/assets/images/instagram.svg" width="20" alt="S'able Labs Instagram"></a></li>
              <li><a href="#"><img src="~@/assets/images/facebook.svg" width="10" alt="S'able Labs Facebook"></a></li>
              <li><a href="#"><img src="~@/assets/images/twitter.svg" width="20" alt="S'able Labs Twitter"></a></li>
            </ul>
          </div>

          <div class="mobile-search-icon only-mobile-tablet" @click="$actions.openSearch()">
            <img src="~@/assets/images/search-icon.svg" alt="Search">
          </div>
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
  import Categories from '~/components/Categories.vue'
  import Flexsearch from 'flexsearch'
  import MenuPanel from '~/components/MenuPanel.vue'
  import SearchPanel from '~/components/SearchPanel.vue'

  export default {
    name: 'Header',
    components: {
        Categories,
        MenuPanel,
        SearchPanel
    },
    data() {
        return {
          index: null,
          searchTerm: ''
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
    computed: {
      searchResults() {
        if (this.index === null || this.searchTerm.length < 3) return [];
        return this.index.search({
          query: this.searchTerm,
          limit: 3
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
    .header {
        width: 100%;
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
          padding: 20px 0;
          width: 100%;
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
                width: 350px;
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
              display: flex;
              width: 100%;
              justify-content: space-between;

              .categories {
                width: calc(50% - 140px);
                margin-left: 80px;
                ul {
                display: flex;
                justify-content: space-between;
                margin: 0;
                padding: 0 50px 0 0;
                  li {
                    margin: 0;
                    padding: 0;
                    text-transform: uppercase;

                  }
                }
              }

              .spacer {
                width: 250px;
              }
              
            .search {
              margin-left: 50px;
              flex: 1;
              align-self: flex-end;
              padding-right: 50px;
              input {
                width: 100%;
              }
            }

            .social {
              display: flex;
              justify-content: flex-end;
              align-self: flex-end;
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
    }
</style>