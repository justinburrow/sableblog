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
        By clicking "subscribe," you agree to receive emails from S’able Labs and accept our<br />web terms of use and privacy and cookie policy.
      </p>
    </footer>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import HomeFeatured from '~/components/HomeFeatured.vue'
import EmailSignup from '~/components/EmailSignup.vue'

export default {
  components: {
    Header,
    HomeFeatured,
    EmailSignup
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
    }
  }

  footer {
    background-color: black;
    padding: 50px 0;
    color: white;
    text-align: center;
    h6 {
      font-family: acumin-pro-extra-condensed, Helvetica, sans-serif;
      font-size: 50px;
      letter-spacing: 3px;
      margin: 0;
      padding: 0;
      text-transform: uppercase;
    }
    .subtext {
      margin: 0;
      padding: 0;
      font-size: 24px;
      margin-bottom: 30px;
    }
    .disclaimer {
      font-size: 13px;
    }
  }
</style>