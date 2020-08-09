<template>
  <div class="layout">
    <header>
      <Header />
    </header>
    <HomeFeatured v-if="$route.fullPath == '/'"/>
    <div class="container">
      <slot/>
    </div>
    <footer>
      <h6>Join the Movement</h6>
      <p class="subtext">Sign up for updates</p>
      <EmailSignup />
      <p class="disclaimer">
        By clicking "subscribe," you agree to receive emails from S’able Labs and accept our<br /><g-link to="/pages/terms-of-use">web terms of use</g-link> and <g-link :to="$static.privacyPolicy.edges[0].node.path">privacy and cookie policy</g-link>.
      </p>
      <div class="stay-in-touch">
        <h6>Stay In Touch</h6>
        <div class="social">
          <a href="https://www.instagram.com/sable.labs" target="_blank" rel="noopener"><img src="~@/assets/images/instagram.svg" width="30" alt="S'able Labs Instagram"></a>
          <a href="https://business.facebook.com/sablelabs-104616947794065/" target="_blank" rel="noopener"><img src="~@/assets/images/facebook.svg" width="15" alt="S'able Labs Facebook"></a>
          <a href="https://twitter.com/sablelabs" target="_blank" rel="noopener"><img src="~@/assets/images/twitter.svg" width="30" alt="S'able Labs Twitter"></a>
        </div>
        <p>&copy;{{ this.currentYear }} S’able Labs. All Rights Reserved.</p>
        <p class="links">
          <g-link to="/pages/privacy-policy">Privacy Policy</g-link>
          <g-link to="/pages/cookie-policy">Cookie Policy</g-link>
        </p>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  privacyPolicy: allWordPressPage(filter: {slug: {eq: "privacy-policy"}}) {
    edges {
      node {
        id
        title
        slug
        path
      }
    }
  }
}
</static-query>

<script>
import Header from '~/components/Header.vue'
import HomeFeatured from '~/components/HomeFeatured.vue'
import EmailSignup from '~/components/EmailSignup.vue'

export default {
  components: {
    Header,
    HomeFeatured,
    EmailSignup
  },
  data() {
    return {
      currentYear: Number,
    }
  },
  methods: {
    closeMenu(e) {
      console.log(e);
      if (this.$store.menuOpen == true) {
        this.$actions.closeMenu();
      }
    }
  },
  mounted() {
    this.currentYear = new Date().getFullYear();
  }
}
</script>

<style lang="scss" scoped>
  .layout {
  }
  header {
    position: relative;
    &:after {
      content: '';
      display: block;
      width: 100%;
      @media screen and (max-width: $breakpoint-md) {
        padding-top: 4vw;
        border-top: 2vw solid black;
      }
    }
  }

  footer {
    background-color: black;
    padding: 50px 0;
    color: white;
    text-align: center;
    @media screen and (max-width: $breakpoint-lg) {
      padding: 6vw 3vw;
    }
    a {
      color: white;
    }
    h6 {
      font-family: acumin-pro-extra-condensed, Helvetica, sans-serif;
      font-size: 50px;
      letter-spacing: 3px;
      margin: 0;
      padding: 0;
      text-transform: uppercase;
      line-height: 1;
      @media screen and (max-width: $breakpoint-md) {
        font-size: 10vw;
      }
    }
    .subtext {
      margin: 0;
      padding: 0;
      font-size: 24px;
      margin-bottom: 30px;
      @media screen and (max-width: $breakpoint-md) {
        font-size: 5vw;
        margin-bottom: 7vw;
      }
    }
    .disclaimer {
      font-size: 13px;
      @media screen and (max-width: $breakpoint-md) {
        margin-top: 5vw;
        font-size: 3.5vw;
        br {
          content: ' ';
          &:after {
            content: ' '
          }
        }
      }
    }
    .stay-in-touch {
      margin-top: 40px;
      h6 {
        font-family: 'acumin-pro-extra-condensed', Helvetica, sans-serif;
        font-size: 30px;
        color: #989898;
        margin-bottom: 30px;
      }
      .social {
        margin: 20px auto;
        display: flex;
        justify-content: space-between;
        width: 100%;
        max-width: 200px;
        a {
          align-self: center;
          color: white;
          img {
            filter: brightness(100) saturate(0);
          }
        }
      }
      p {
        font-size: 12px;
        &.links {
          display: flex;
          justify-content: space-between;
          max-width: 200px;
          margin: 0 auto;
        }
      }
    }
  }
</style>
