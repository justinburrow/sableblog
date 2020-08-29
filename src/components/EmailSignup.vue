<template>
  <mailchimp-subscribe
    url="https://sablelabs.us4.list-manage.com/subscribe/post-json"
    user-id="1bb61b2f2abc0a7b389ae9eb9"
    list-id="54457c8b70"
    @error="onError"
    @success="onSuccess"
  >
    <template v-slot="{ subscribe, setEmail, error, success, loading }">
      <div class="email-form">
        <h6>Sign up for S'able updates</h6>
        <form @submit.prevent="subscribe">
          <input type="email" v-if="!error & !success" @input="setEmail($event.target.value)" placeholder="Email Address" />
          <div class="sable-s">
            <img src="~@/assets/images/sable-s.svg" alt="S'able Labs">
          </div>
          <div class="break"></div>
          <button type="submit" v-if="!error & !success">Subscribe</button>
          <div v-if="error" class="message" v-html="error"></div>
          <div v-if="success" class="message">Thank you for subscribing.</div>
          <div v-if="loading">Loading…</div>
      </form>
      </div>
    </template>
  </mailchimp-subscribe>
</template>

<script>
import MailchimpSubscribe from 'vue-mailchimp-subscribe'

export default {
  components: {
    MailchimpSubscribe,
  },
  methods: {
    onError() {
      // handle error
    },
    onSuccess() {
      this.$cookies.set('showPopup', true, Infinity)
    },
  }
}
</script>

<style lang="scss">
.email-form {
  width: 475px;
  margin: 0 auto;
  @media screen and (max-width: $breakpoint-md) {
    width: 100%;
  }
  h6 {
    font-family: 'acumin-pro-extra-condensed';
    text-transform: uppercase;
    font-size: 1.5rem;
    margin: 0 0 10px 0;
    padding: 0;
    letter-spacing: 2px;
    line-height: 1;
  }
  form {
  display: flex;
  flex-wrap: wrap;
  .break {
    flex-basis: 100%;
    height: 0;
  }
  input {
    padding: 10px;
    font-size: 14px;
    flex-grow: 1;
    border-radius: 0;
    @media screen and (max-width: $breakpoint-md) {
      font-size: 3.5vw;
    }
    &::placeholder {
      color: rgba(0,0,0,0.5);
    }
  }
  button {
    margin-top: 10px;
    margin-left: auto;
    font-family: acumin-pro-extra-condensed, sans-serif;
    font-size: 24px;
    text-transform: uppercase;
    padding: 15px 20px;
    line-height: .9;
    letter-spacing: .5px;
    border: 0;
    background: linear-gradient(0deg, #18413c 50%, #224c45 50%);
    color: white;
    border-radius: 0;
    @media screen and (max-width: $breakpoint-md) {
      font-size: 5vw;
    }
    &:hover {
      cursor: pointer;
    }
  }
  .sable-s {
    width: 35px;
    position: relative;
    img {
      width: 20px;
      margin-left: 15px;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
  }
  .message {
    width: 100%;
    max-width: 100%;
    text-align: center;
    a {
      display: block;
    }
  }
}
}


</style>
