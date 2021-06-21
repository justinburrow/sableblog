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
      t
    },
  }
}
</script>
