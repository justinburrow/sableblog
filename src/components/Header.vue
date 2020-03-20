<template>
    <div class="header">
        <div class="header__content container-full">
          <div class="logo">
              <img src="~@/assets/images/sable-logo.svg" width="370" alt="S'able Labs" />
            </div>

            <div class="navigation">
              <div class="categories">
                <Categories />
              </div>

              <div class="spacer"></div>

              <div class="search">
                <input type="text">
              </div>

              <ul class="social">
                <li><a href="#"><img src="~@/assets/images/instagram.svg" width="20" alt="S'able Labs Instagram"></a></li>
                <li><a href="#"><img src="~@/assets/images/facebook.svg" width="10" alt="S'able Labs Facebook"></a></li>
                <li><a href="#"><img src="~@/assets/images/twitter.svg" width="20" alt="S'able Labs Twitter"></a></li>
              </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Categories from '~/components/Categories.vue'

export default {
    name: 'Header',
    components: {
        Categories
    },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
    .header {
        position: relative;
        width: 100%;
        &::before {
            display: block;
            content: ' ';
            height: 30px;
            background: black;
            width: 100%;
            margin-bottom: 30px;
        }
        &__content {
            background: white;
            padding: 20px 0;
            width: 100%;
            .logo {
                width: 100%;
                text-align: center;
                padding-bottom: 40px;
                img {
                  width: 350px;
                }
            }
            .navigation {
              display: flex;
              width: 100%;
              justify-content: space-between;

              .categories {
                width: calc(50% - 240px);
                margin-left: 30px;
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
                width: 350px;
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
      }
    }
</style>