<template>
  <div class="subscription" :class="{active : this.$store.showPopup}" v-scroll-lock="isActive">
    <div class="signup-box" v-if="$store.showPopup == true">
      <button type="button" name="close-email" @click="$store.showPopup = false, setCookie()">X</button>
      <div class="content">
        <p class="title">We're Better Together</p>
        <p class="subtitle">Sign Up to Stay Connected</p>
        <EmailSignup />
      </div>
      <p class="disclaimer">By clicking "submit," you agree to receive emails from S’able Labs and accept
our web terms of use and <g-link to="/pages/privacy-policy/">privacy</g-link> and <g-link to="/pages/cookie-policy/">cookie policy</g-link>.</p>
    </div>
  </div>
</template>

<script>
import EmailSignup from '~/components/EmailSignup.vue'

export default {
  components: {
    EmailSignup
  },
  props: ['showSub'],
  data() {
    return {
      isActive: this.showSub
    }
  },
  methods: {
    setCookie() {
      this.$cookies.set('popup', true, '30d');
    }
  },
  mounted() {
    var that = this;
    setTimeout(function() {
      const cookieStatus = that.$cookies.get('popup');
      if (cookieStatus != 'true') {
        that.$store.showPopup = true;
      }
    }, 5000);
  },
  watch: {
    showSub() {
      this.isActive = this.showSub;
    }
  }
}
</script>

<style lang="scss" scoped>
  .subscription {
    background: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.5s ease;
    &.active{
      opacity: 1;
      pointer-events: auto;
      .signup-box {
        opacity: 1;
        transform: translate(-50%, 0);
      }
    }
    .signup-box {
      background: #DEDFDF url('~@/assets/images/email-background.jpg');
      background-position: center center;
      background-size: contain;
      width: 600px;
      height: 600px;
      max-width: 100%;
      position: absolute;
      top: 100px;
      transform: translate(-50%, -100%);
      left: 50%;
      transition: transform 0.3s ease;
      transiton-delay: 0.5s;
      button {
        background: white;
        position: absolute;
        top: 0;
        right: 0;
        padding: 15px;
        line-height: 1;
        border: none;
        border-radius: 0;
        cursor: pointer;
        font-size: 16px;
      }
      .content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin: 0;
        padding: 0 30px;
        width: 100%;
        p {
          margin: 0;
          padding: 0;
          text-transform: uppercase;
        }
        .title {
          font-family: 'acumin-pro-extra-condensed', sans-serif;
          font-size: 48px;
          line-height: 1;
          @media screen and (max-width: $breakpoint-md) {
            font-size: 10vw;
          }
        }
        .subtitle {
          font-family: 'acumin-pro-condensed', sans-serif;
          font-size: 22px;
          margin-bottom: 30px;
        }
      }
      .disclaimer {
        position: absolute;
        bottom: 20px;
        width: 100%;
        padding: 0 30px;
        max-width: 400px;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        line-height: 1.6;
        font-size: 12px;
      }
    }
  }
</style>
