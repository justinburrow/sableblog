<template>
  <div class="bottom-section">

    <section class="instagram">
      <h4>Connect With Us</h4>
      <h5>#sablelabs</h5>
      <div class="instagram-feed">
        <ClientOnly>
          <div id="flockler-embed-17177230bd60efd482bfb4b945f55ff2"></div>
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
            <ul class="social">
              <li>
                <a href="https://www.instagram.com/sable.labs" target="_blank" rel="noopener"><img src="~@/assets/images/instagram.svg" width="15" alt="S'able Labs Instagram">Instagram</a>
              </li>
              <li>
                <a href="https://business.facebook.com/sablelabs-104616947794065/" target="_blank" rel="noopener"><img src="~@/assets/images/facebook.svg" width="9" alt="S'able Labs Facebook">Facebook</a>
              </li>
              <li>
                <a href="https://twitter.com/sablelabs" target="_blank" rel="noopener"><img src="~@/assets/images/twitter.svg" width="15" alt="S'able Labs Twitter">Twitter</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul class="subscribe">
          <li>
            <EmailSignup />
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
      currentYear: Number
    }
  },
  mounted() {
    this.currentYear = new Date().getFullYear();
  }
}
</script>

<style lang="scss" scoped>
  .bottom-section {
    margin-top: 85px;
    @media screen and (max-width: $breakpoint-md) {
      margin-top: 3vw;
    }
  }
  .instagram {
    border-top: 8px solid #f2f2f2;
    max-width: 1600px;
    margin: 0 auto;

    h4 {
      text-align: center;
      text-transform: uppercase;
      font-family: 'acumin-pro-extra-condensed', 'Helvetica Neue', sans-serif;
      font-weight: 600;
      font-style: normal;
      font-size: 4rem;
      letter-spacing: 1px;
      padding: 0;
      margin: 30px 0 5px 0;
      line-height: 1;
      @media screen and (max-width: $breakpoint-md) {
        padding: 2vw 1vw 3vw 1vw;
        line-height: 1;
        width: 100%;
        margin-bottom: 2vw;
        font-size: 8vw;
      }
    }

    h5 {
      font-size: 1.3rem;
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
    padding: 50px 0;
    color: white;
    text-align: center;
    font-family: 'acumin-pro', sans-serif;
    text-align: left;
    @media screen and (max-width: $breakpoint-lg) {
      padding: 6vw 3vw;
    }

    .footer-content {
      width: 100%;
      max-width: 1600px;
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
        ul li {
          font-size: 1rem;
          margin-bottom: 5px;
          @media screen and (max-width: 768px) {
            margin-bottom: 4vw;
            font-size: 3.5vw;
          }
          a {
            color: #616161;
            @media screen and (max-width: 1024px) {
              color: white;
            }
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
      font-size: 1.5rem;
      letter-spacing: 2px;
      margin: 0 0 20px 0;
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
      font-size: .9rem;
      text-align: left;
      width: 100%;
      flex-shrink: none;
      border-top: 1px solid #333333;
      padding-top: 20px;
      color: #616161;
    }
  }

</style>
