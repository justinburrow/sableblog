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
        <form @submit.prevent="subscribe">
          <input type="email" v-if="!error & !success" @input="setEmail($event.target.value)" placeholder="Email Address" />
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
  max-width: 1000px;
  margin: 0 auto;
  form {
  display: flex;
  flex-wrap: wrap;
  input {
    padding: 15px;
    font-size: 20px;
    width: 100%;
    border-radius: 0;
    &::placeholder {
      color: rgba(0,0,0,0.5);
    }
  }
  button {
    margin-top: 5px;
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
    &:hover {
      cursor: pointer;
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
