<template>
  <Layout class="interior">
    <div class="page contact-us">
      <div class="interior">
        <form action="" method="post">
          <div class="form-fields">
            <div class="input-holder">
              <label for="name">Name<span class="required">*</span></label>
              <input type="text" name="name" required value="" placeholder="First and Last" v-model="name">
            </div>

            <div class="input-holder">
              <label for="email">Email<span class="required">*</span></label>
              <input type="email" name="email" required value="" placeholder="Email" v-model="email">
            </div>

            <div class="input-holder">
              <label for="telephone">Telephone</label>
              <input type="tel" name="telephone" value="" placeholder="Telephone" v-model="phone">
            </div>

          </div>
          <div class="title">
            <div>
              <h1>Contact Us</h1>
              <p v-if="success">Thanks for sending us a message!  We'll be in touch shortly.</p>
              <p class="error" v-if="error">We weren't able to send your message - please try again.</p>
            </div>
          </div>
          <div class="form-message-holder input-holder">
            <label for="message">Message<span class="required">*</span></label>
            <textarea name="message" required v-model="message"></textarea>
          </div>
          <div class="required-text">
            Required<span class="required">*</span>
          </div>
          <div class="submit">
            <div class="g-recaptcha" data-sitekey="6LdZg8UZAAAAADnfcKzRB_OcRcBUVchvn-CuSRVD"></div>
            <div class="">
              <button type="button" name="button" @click="submitForm()">Submit</button>
            </div>
          </div>
        </form>
        <div class="contact-info" v-html="$page.allWordPressPage.edges[0].node.content"></div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query {
    allWordPressPage(filter: { slug: { eq: "contact-us" }}) {
      edges {
        node {
          content
        }
      }
    }
  }
</page-query>

<script>
import axios from 'axios';

export default {
  metaInfo() {
    return {
      title: `Contact Us - S'able Labs`,
      description: "Send us your feedback, questions, or comments - or email us directly for press or partnership inquiries."
    }
  },
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      message: '',
      compiledMessage: '',
      success: false,
      error: false
    }
  },
  mounted() {
    let script = document.createElement('script');
    script.setAttribute("src", "https://www.google.com/recaptcha/api.js");
    script.setAttribute("defer", true);
    script.setAttribute("async", true);
    document.getElementsByTagName('head')[0].appendChild(script);
  },
  methods: {
    submitForm() {
      this.compiledMessage = "Name: " + this.name + ", Email: " + this.email + ", Phone:" + this.phone + ", Message: " + this.message;
      const that = this;
      axios
        .post("https://submit-form.com/4qh0crbl6F3kj6Yg7DuKY", {
          message: this.compiledMessage,
          "g-recaptcha-response": grecaptcha.getResponse(),
        })
        .then( function (response) {
          console.log(response);
          that.success = true;
          that.$scrollToTop();
        })
        .catch(function (response) {
          console.error(response);
          that.error = true;
          that.$scrollToTop();
        });
    }
  }
}
</script>

<style lang="scss">
.contact-us {
  width: 100%;
  max-width: none !important;

  .interior {
    margin-top: 70px;
    width: 100%;
    @media screen and (max-width: $breakpoint-lg) {
      margin-top: 10vw;
    }
  }

  form {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    font-size: 14px;
    line-height: 1.5;
    @media screen and (max-width: $breakpoint-lg) {
      font-size: 3.5vw;
    }

    .form-fields {
      @media screen and (max-width: $breakpoint-lg) {
        order: 2
      }
    }

    label {
      display: block;
      font-weight: bold;
      margin-bottom: 15px;
      @media screen and (max-width: $breakpoint-lg) {
        margin-bottom: 2vw;
      }
    }

    .input-holder {
      margin-bottom: 28px;
      @media screen and (max-width: $breakpoint-lg) {
        margin-bottom: 4vw;
      }
    }

    input {
      font-size: 14px;
      line-height: 1.5;
      width: 100%;
      padding: 25px;
      border-bottom: 2px solid black;

      &::placeholder {
        color: #000;
        font-weight: bold;
      }

      &:placeholder-shown {
        border: none;
        border-bottom: 1px solid transparent;
        background: #F9F9F9;
      }
    }

    > div {
      width: 50%;
      @media screen and (max-width: $breakpoint-lg) {
        width: 100%;
      }

      &.title {
        position: relative;
        @media screen and (max-width: $breakpoint-lg) {
          order: 1;
        }

        div {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          text-align: center;

          p {
            font-size: 24px;
            &.error {
              color: red;
            }
            @media screen and (max-width: $breakpoint-lg) {
              font-size: 5vw;
            }
          }
          @media screen and (max-width: $breakpoint-lg) {
            position: relative;
            transform: none;
            left: auto;
            top: auto;
          }
        }
      }

      &.form-message-holder {
        width: 100%;
        margin-bottom: 15px;
        @media screen and (max-width: $breakpoint-lg) {
          order: 3
        }

        textarea {
          width: 100%;
          min-height: 250px;
          padding: 15px;
          font-size: 18px;
          line-height: 1.5;
          font-family: 'acumin', sans-serif;
          @media screen and (max-width: $breakpoint-lg) {
            margin-bottom: 5vw;
          }
        }
      }
    }

    .required {
      color: #FF0000;
      margin-left: 3px;
      @media screen and (max-width: $breakpoint-lg) {
        order: 4
      }
    }

    .required-text {
      width: 100%;
      text-align: right;
      font-size: 14px;
      @media screen and (max-width: $breakpoint-lg) {
        font-size: 2.5vw;
      }
    }

    .submit {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      justify-content: center;
      margin-bottom: 80px;
      @media screen and (max-width: $breakpoint-lg) {
        order: 5
      }

      div {
        @media screen and (max-width: $breakpoint-lg) {
          width: 100%;
          display: flex;
          justify-content: center;
        }
      }

      button {
        letter-spacing: 1px;
        padding: 15px 50px;
        margin-left: 30px;
      }
    }
  }

  .contact-info {
    text-align: center;

    ul {
      margin: 0;
      padding: 0;
      list-style-type: none;
      li {
        font-weight: bold;
        @media screen and (max-width: $breakpoint-lg) {
          margin-bottom: 4vw;
        }
      }
    }

    a {
      color: black;
      font-weight: normal;
      &:hover {
        text-decoration: underline;
      }
      @media screen and (max-width: $breakpoint-lg) {
        display: block;
      }
    }
  }

}
</style>
