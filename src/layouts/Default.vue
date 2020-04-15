<template>
  <div class="layout">
    <header>
      <Header />
      <HomeFeatured v-if="$route.fullPath == '/'"/>
    </header>
    <div class="container">
      <slot/>
    </div>
    <footer>
      <h6>Join the Movement</h6>
      <p class="subtext">Sign up for updates</p>
      <EmailSignup />
      <p class="disclaimer">
        By clicking "subscribe," you agree to receive emails from S’able Labs and accept our<br />web terms of use and <g-link :to="$static.privacyPolicy.edges[0].node.path">privacy and cookie policy</g-link>.
      </p>
      <div class="stay-in-touch">
        <h6>Stay In Touch</h6>
        <div class="social">
          <a href="https://www.instagram.com/sable.labs"><img src="~@/assets/images/instagram.svg" width="30" alt="S'able Labs Instagram"></a>
          <a href="https://business.facebook.com/sablelabs-104616947794065/"><img src="~@/assets/images/facebook.svg" width="15" alt="S'able Labs Facebook"></a>
          <a href="https://twitter.com/sablelabs"><img src="~@/assets/images/twitter.svg" width="30" alt="S'able Labs Twitter"></a>
        </div>
        <p>&copy;2020 S’able Labs. All Rights Reserved.</p>
        <p class="links">
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
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
  methods: {
    closeMenu(e) {
      console.log(e);
      if (this.$store.menuOpen == true) {
        this.$actions.closeMenu();
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  header {
    &:after {
      content: '';
      display: block;
      border-top: 12px solid black;
      padding-top: 45px;
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
            filter: brightness(100);
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