<template>
  <div class="bottom-section">

    <div v-show="isMobile" class="porte-noire-banner">
      <a href="https://www.portenoire.co.uk/" target="_blank"><img src="~@/assets/images/porte-noire.gif" alt="Porte Noire"></a>
    </div>

    <section class="instagram">
      <h4>Connect With Us</h4>
      <h5>#sablelabs</h5>
      <div class="instagram-feed">
        <ClientOnly>
          <div id="flockler-embed-17177230bd60efd482bfb4b945f55ff2"></div>
          <script type="application/javascript" src="https://plugins.flockler.com/embed/171753313d60794c3405e22a3ba95654/17177230bd60efd482bfb4b945f55ff2" async></script>
        </ClientOnly>
      </div>
    </section>

    <footer>
      <div class="footer-content">
        <ul>
          <li>
            <h6>S'able Labs</h6>
            <ul>
              <li>
                <g-link to="/contact-us/">Contact Us</g-link>
              </li>
              <li>
                <g-link to="/">Press</g-link>
              </li>
              <li>
                <g-link to="/">Partnerships</g-link>
              </li>
            </ul>
          </li>
        </ul>
        <ul>
          <li>
            <h6>Policies</h6>
            <ul>
              <li>
                <g-link to="/pages/terms-of-use/">Terms of Use</g-link>
              </li>
              <li>
                <g-link to="/pages/privacy-policy/">Privacy Policy</g-link>
              </li>
              <li>
                <g-link to="/pages/cookie-policy/">Cookie Policy</g-link>
              </li>
            </ul>
          </li>
        </ul>
        <ul>
          <li>
            <h6>Stay In Touch</h6>

            <table class="social">
              <tr>
                <td>
                  <a href="#" @click="$store.showPopup = true"><img src="~@/assets/images/newsletter.svg" width="17" alt="S'able Labs Newsletter"></a>
                </td>
                <td><a href="#" @click="$store.showPopup = true">Newsletter</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="https://www.instagram.com/sable.labs" target="_blank" rel="noopener"><img src="~@/assets/images/instagram.svg" width="15" alt="S'able Labs Instagram"></a>
                </td>
                <td>
                  <a href="https://www.instagram.com/sable.labs" target="_blank" rel="noopener">Instagram</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="https://business.facebook.com/sablelabs-104616947794065/" target="_blank" rel="noopener"><img src="~@/assets/images/facebook.svg" width="12" alt="S'able Labs Facebook"></a>
                </td>
                <td>
                  <a href="https://business.facebook.com/sablelabs-104616947794065/" target="_blank" rel="noopener">Facebook</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="https://twitter.com/sablelabs" target="_blank" rel="noopener"><img src="~@/assets/images/twitter.svg" width="17" alt="S'able Labs Twitter"></a>
                </td>
                <td>
                  <a href="https://twitter.com/sablelabs" target="_blank" rel="noopener">Twitter</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="https://www.youtube.com/channel/UCfraKhLpIm5MbXmOeyybf7g" target="_blank" rel="noopener"><img src="~@/assets/images/youtube.svg" width="17" alt="S'able Labs YouTube"></a>
                </td>
                <td>
                  <a href="https://www.youtube.com/channel/UCfraKhLpIm5MbXmOeyybf7g" target="_blank" rel="noopener">YouTube</a>
                </td>
              </tr>
            </table>

          </li>
        </ul>
        <ul class="subscribe">
          <li>
            <h6>Sign up for S'able updates</h6>
            <EmailSignup v-bind:show-s="true"/>
          </li>
        </ul>
        <p class="copyright">&copy;{{ this.currentYear }} S’able Labs. All Rights Reserved.</p>
      </div>

    </footer>
  </div>
</template>

<script>
import EmailSignup from '~/components/EmailSignup.vue'

export default {
  name: 'Footer',
  components: {
    EmailSignup
  },
  data() {
    return {
      currentYear: Number,
      isMobile: this.$store.isMobile
    }
  },
  mounted() {
    this.currentYear = new Date().getFullYear();
  }
}
</script>

<style lang="scss" scoped>
  .bottom-section {
    margin-top: 65px;
    @media screen and (max-width: $breakpoint-md) {
      margin-top: 3vw;
    }
    .porte-noire-banner {
      background: #f2f2f2;
      padding: 5vw;
      margin: 5vw 0;
      a {
        display: block;
        margin: 0 auto;
        max-width: 75vw;
        img {
          width: 100%;
          max-width: 100%;
        }
      }
    }
  }
  .instagram {
    border-top: 5px solid #f2f2f2;
    max-width: 1280px;
    margin: 0 auto;

    h4 {
      text-align: center;
      text-transform: uppercase;
      font-family: 'acumin-pro-extra-condensed', 'Helvetica Neue', sans-serif;
      font-weight: 600;
      font-style: normal;
      font-size: 45px;
      letter-spacing: 1px;
      padding: 0;
      margin: 25px 0 5px 0;
      line-height: 1;
      @media screen and (max-width: $breakpoint-md) {
        padding: 2vw 1vw;
        line-height: 1;
        width: 100%;
        margin-bottom: 0;
        font-size: 9vw;
      }
    }

    h5 {
      font-size: 16px;
      font-weight: 300;
      text-align: center;
      padding: 0;
      margin: 0;
      line-height: 1;
      margin-bottom: 20px;
    }

    .instagram-feed {
      margin-bottom: 80px;
    }
  }

  footer {
    background-color: black;
    padding: 37px 0;
    color: white;
    text-align: center;
    font-family: 'acumin-pro', sans-serif;
    text-align: left;
    @media screen and (max-width: $breakpoint-lg) {
      padding: 6vw 3vw;
    }

    .footer-content {
      width: 100%;
      max-width: 1280px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      padding: 0;
      @media screen and (max-width: $breakpoint-md) {
        padding: 0 20px;
        justify-content: space-between;
      }

      > ul {
        margin-right: 50px;
        margin-bottom: 30px;
        @media screen and (max-width: $breakpoint-md) {
          width: 30%;
          margin-right: 0;
        }
        ul li, table {
          font-size: 1rem;
          margin-bottom: 5px;
          @media screen and (max-width: 768px) {
            margin-bottom: 1.5vw;
            font-size: 3.5vw;
            td a {
              display: block;
              margin-bottom: 1.5vw;
            }
          }
          a {
            color: #616161;
            &:hover {
              color: white;
              text-decoration: underline;
            }
          }
        }
      }

      .social {
        img {
          margin-right: 7px;
          filter: invert(25%) sepia(93%) saturate(289%) hue-rotate(126deg) brightness(92%) contrast(95%);
        }
      }

      .subscribe {
        margin-left: auto;
        @media screen and (max-width: $breakpoint-md) {
          width: 100%;
        }
      }
    }

    a {
      color: white;
      text-decoration: none;
    }

    h6 {
      font-family: acumin-pro-extra-condensed, Helvetica, sans-serif;
      font-weight: 600;
      font-size: 20px;
      letter-spacing: 2px;
      margin: 0 0 15px 0;
      padding: 0;
      text-transform: uppercase;
      line-height: 1;
      @media screen and (max-width: $breakpoint-md) {
        font-size: 4.6vw;
        letter-spacing: .2vw;
        margin: 0 0 4vw 0;
      }
    }

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      li {
        margin: 0;
        padding: 0;
      }
    }

    p.copyright {
      font-size: 14px;
      text-align: left;
      width: 100%;
      flex-shrink: none;
      border-top: 1px solid #333333;
      padding-top: 20px;
      color: #616161;
      @media screen and (max-width: $breakpoint-md) {
        font-size: 3.5vw;
      }
    }
  }

</style>
