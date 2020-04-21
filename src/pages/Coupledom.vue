<template>
  <Layout>
    <div id="landing">
      <section>
        <div class="container-xl hero">
          <div class="row">
            <div class="col-12">
              <div class="container-xl">
                <div class="row">
                  <div class="col-1 social d-none d-xl-block">
                    <ul>
                      <li><a href="https://www.instagram.com/sable.labs" target="_blank"><img src="~@/assets/images/instagram.svg" alt="Sable Labs Instagram"></a></li>
                      <li><a href="https://business.facebook.com/sablelabs-104616947794065/" target="_blank"><img src="~@/assets/images/facebook.svg" alt="Sable Labs Facebook"></a></li>
                      <li><a href="https://twitter.com/sablelabs" target="_blank"><img src="~@/assets/images/twitter.svg" alt="Sable Labs Twitter"></a></li>
                    </ul>
                  </div>
                  <div class="col-5 d-none d-xl-block">
                    <div class="video">
                      <video poster="~@/assets/images/video-poster.jpg" id="hero-vid" playsinline controls>
                        <source src="https://www.sablelabs.co/documents/Sable-Labs-Coupledom-Launch_021420.mp4" type="video/mp4" />
                      </video>
                    </div>
                    <div class="definition">
                      <h1>coupledom</h1>
                      <p>coupledom / (‘kʌpəldəm)</p>
                      <p>1. The realm of shared experiences between two partners, in life or business</p>
                    </div>
                  </div>
                  <div class="col-xl-6 d-none d-xl-block">
                    <h2 class="join-the-movement">
                      JOIN THE MOVEMENT
                    </h2>
                  </div>

                  <div class="col-12 d-xl-none">
                    <div class="definition">
                      <h1>coupledom</h1>
                      <p>coupledom / (‘kʌpəldəm)</p>
                      <p>1. The realm of shared experiences between<br />two partners, in life or business</p>
                    </div>
                  </div>

                  <div class="col-12 d-xl-none">
                    <h2 class="join-the-movement">
                      JOIN THE MOVEMENT
                    </h2>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="mobile-video">
        <video poster="~@/assets/images/video-poster.jpg" controls playsinline><source src="https://www.sablelabs.co/documents/Sable-Labs-Coupledom-Launch_021420.mp4" type="video/mp4" /></video>
      </section>

      <section>
        <div class="container-xl coupledom">
          <div class="coupledom-title">
            <img src="~@/assets/images/coupledom-title.svg" alt="Coupledom">
          </div>
          <div class="row">
            <div class="col-12 col-md-8 col-xl-6 offset-md-2 offset-xl-3">
              <h3 class="d-none d-xl-block">Join the Movement</h3>
              <p class="intro"> We want to tell the world our story through the voice of the people, because our story isn't just about us. It's about a shared dream and making it real through the power of coupledom.</p>
              <p>We're insatiably curious about coupledom &mdash; the realm of<br />shared experiences in life or business.</p>
              <p>We want to know about people that partner together<br />to make those shared goals become reality.</p>
              <p>Whether your goals are about romance,<br />business, or life, we want to know.</p>
              <p>So, we're asking people to submit photos and videos about their<br />stories and how they make their shared dreams come true<br />through the power of coupledom.</p>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div class="container-xl">
          <div class="row">
            <div class="col-12 join">
              <h5>Share Your Story</h5>
              <p>Tell Us What Coupledom Means To You</p>
                  <div class="email-signup">
                    <div class="disclaimer">
                      <p>By downloading these instructions, you agree to S'able Labs <span class="disclaimer-popup-trigger" v-on:click="showDisclaimer = !showDisclaimer">terms of use</span>, agree to receive emails from S’able Labs, and our <a href="/privacy-policy.html" target="_blank">privacy</a> and <a href="#">cookie policy</a>.</p>
                    </div>
                  <div class="download-link">
                      <a href="https://www.sablelabs.co/documents/sable_coupledom_instructions_22820.pdf" target="_blank" v-if="acceptTerms == true">View the Coupledom instructions without subscribing for updates</a>
                  </div>
                  <div class="disclaimer-popup" v-bind:class="{ shown: showDisclaimer == true}">
                    <img class="close-btn" src="~@/assets/images/close-icon.svg" alt="close" v-on:click="showDisclaimer = false">
                    <p>Please note, by uploading your photo or video, you grant us a license to use the video on our website and marketing materials. You confirm that:</p>
                    <ul>
                      <li>You have the consent of every person in your photo or video in order to provide your photo or video to us</li>
                      <li>You waive any so called ‘moral rights’ in relation to your photo or video</li>
                      <li>The photo or video is your own original material and does not use any third party rights</li>
                      <li>You understand that if we use your photo or video you will not receive any payment from us</li>
                    </ul>
                    <p>We ask for your names, email address and social handles when uploading your photo or video:</p>
                    <ul>
                      <li>We may display your first names and social handles on our website or marketing materials in relation to the photo or video</li>
                      <li>We may use your email address to contact you about your photo or video</li>
                      <li>We will store and process your personal data in accordance with our <a href="/privacy-policy.html" target="_blank">privacy policy</a></li>
                    </ul>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  </Layout>
</template>

<script>

export default {
  metaInfo: {
    title: 'S\'able Labs'
  },
  mounted() {
  }
}
</script>

<style>
/*!
 * Bootstrap Grid v4.4.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 The Bootstrap Authors
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px
}

.col,
.col-1,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-10,
.col-11,
.col-12,
.col-auto,
.col-lg,
.col-lg-1,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg-auto,
.col-md,
.col-md-1,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md-auto,
.col-sm,
.col-sm-1,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm-auto,
.col-xl,
.col-xl-1,
.col-xl-2,
.col-xl-3,
.col-xl-4,
.col-xl-5,
.col-xl-6,
.col-xl-7,
.col-xl-8,
.col-xl-9,
.col-xl-10,
.col-xl-11,
.col-xl-12,
.col-xl-auto {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px
}

.col {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%
}

.row-cols-1>* {
  flex: 0 0 100%;
  max-width: 100%
}

.row-cols-2>* {
  flex: 0 0 50%;
  max-width: 50%
}

.row-cols-3>* {
  flex: 0 0 33.3333333333%;
  max-width: 33.3333333333%
}

.row-cols-4>* {
  flex: 0 0 25%;
  max-width: 25%
}

.row-cols-5>* {
  flex: 0 0 20%;
  max-width: 20%
}

.row-cols-6>* {
  flex: 0 0 16.6666666667%;
  max-width: 16.6666666667%
}

.col-auto {
  flex: 0 0 auto;
  width: auto;
  max-width: 100%
}

.col-1 {
  flex: 0 0 8.3333333333%;
  max-width: 8.3333333333%
}

.col-2 {
  flex: 0 0 16.6666666667%;
  max-width: 16.6666666667%
}

.col-3 {
  flex: 0 0 25%;
  max-width: 25%
}

.col-4 {
  flex: 0 0 33.3333333333%;
  max-width: 33.3333333333%
}

.col-5 {
  flex: 0 0 41.6666666667%;
  max-width: 41.6666666667%
}

.col-6 {
  flex: 0 0 50%;
  max-width: 50%
}

.col-7 {
  flex: 0 0 58.3333333333%;
  max-width: 58.3333333333%
}

.col-8 {
  flex: 0 0 66.6666666667%;
  max-width: 66.6666666667%
}

.col-9 {
  flex: 0 0 75%;
  max-width: 75%
}

.col-10 {
  flex: 0 0 83.3333333333%;
  max-width: 83.3333333333%
}

.col-11 {
  flex: 0 0 91.6666666667%;
  max-width: 91.6666666667%
}

.col-12 {
  flex: 0 0 100%;
  max-width: 100%
}

.order-first {
  order: -1
}

.order-last {
  order: 13
}

.order-0 {
  order: 0
}

.order-1 {
  order: 1
}

.order-2 {
  order: 2
}

.order-3 {
  order: 3
}

.order-4 {
  order: 4
}

.order-5 {
  order: 5
}

.order-6 {
  order: 6
}

.order-7 {
  order: 7
}

.order-8 {
  order: 8
}

.order-9 {
  order: 9
}

.order-10 {
  order: 10
}

.order-11 {
  order: 11
}

.order-12 {
  order: 12
}

.offset-1 {
  margin-left: 8.3333333333%
}

.offset-2 {
  margin-left: 16.6666666667%
}

.offset-3 {
  margin-left: 25%
}

.offset-4 {
  margin-left: 33.3333333333%
}

.offset-5 {
  margin-left: 41.6666666667%
}

.offset-6 {
  margin-left: 50%
}

.offset-7 {
  margin-left: 58.3333333333%
}

.offset-8 {
  margin-left: 66.6666666667%
}

.offset-9 {
  margin-left: 75%
}

.offset-10 {
  margin-left: 83.3333333333%
}

.offset-11 {
  margin-left: 91.6666666667%
}

@media (min-width:576px) {
  .col-sm {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%
  }

  .row-cols-sm-1>* {
    flex: 0 0 100%;
    max-width: 100%
  }

  .row-cols-sm-2>* {
    flex: 0 0 50%;
    max-width: 50%
  }

  .row-cols-sm-3>* {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%
  }

  .row-cols-sm-4>* {
    flex: 0 0 25%;
    max-width: 25%
  }

  .row-cols-sm-5>* {
    flex: 0 0 20%;
    max-width: 20%
  }

  .row-cols-sm-6>* {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%
  }

  .col-sm-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%
  }

  .col-sm-1 {
    flex: 0 0 8.3333333333%;
    max-width: 8.3333333333%
  }

  .col-sm-2 {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%
  }

  .col-sm-3 {
    flex: 0 0 25%;
    max-width: 25%
  }

  .col-sm-4 {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%
  }

  .col-sm-5 {
    flex: 0 0 41.6666666667%;
    max-width: 41.6666666667%
  }

  .col-sm-6 {
    flex: 0 0 50%;
    max-width: 50%
  }

  .col-sm-7 {
    flex: 0 0 58.3333333333%;
    max-width: 58.3333333333%
  }

  .col-sm-8 {
    flex: 0 0 66.6666666667%;
    max-width: 66.6666666667%
  }

  .col-sm-9 {
    flex: 0 0 75%;
    max-width: 75%
  }

  .col-sm-10 {
    flex: 0 0 83.3333333333%;
    max-width: 83.3333333333%
  }

  .col-sm-11 {
    flex: 0 0 91.6666666667%;
    max-width: 91.6666666667%
  }

  .col-sm-12 {
    flex: 0 0 100%;
    max-width: 100%
  }

  .order-sm-first {
    order: -1
  }

  .order-sm-last {
    order: 13
  }

  .order-sm-0 {
    order: 0
  }

  .order-sm-1 {
    order: 1
  }

  .order-sm-2 {
    order: 2
  }

  .order-sm-3 {
    order: 3
  }

  .order-sm-4 {
    order: 4
  }

  .order-sm-5 {
    order: 5
  }

  .order-sm-6 {
    order: 6
  }

  .order-sm-7 {
    order: 7
  }

  .order-sm-8 {
    order: 8
  }

  .order-sm-9 {
    order: 9
  }

  .order-sm-10 {
    order: 10
  }

  .order-sm-11 {
    order: 11
  }

  .order-sm-12 {
    order: 12
  }

  .offset-sm-0 {
    margin-left: 0
  }

  .offset-sm-1 {
    margin-left: 8.3333333333%
  }

  .offset-sm-2 {
    margin-left: 16.6666666667%
  }

  .offset-sm-3 {
    margin-left: 25%
  }

  .offset-sm-4 {
    margin-left: 33.3333333333%
  }

  .offset-sm-5 {
    margin-left: 41.6666666667%
  }

  .offset-sm-6 {
    margin-left: 50%
  }

  .offset-sm-7 {
    margin-left: 58.3333333333%
  }

  .offset-sm-8 {
    margin-left: 66.6666666667%
  }

  .offset-sm-9 {
    margin-left: 75%
  }

  .offset-sm-10 {
    margin-left: 83.3333333333%
  }

  .offset-sm-11 {
    margin-left: 91.6666666667%
  }
}

@media (min-width:768px) {
  .col-md {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%
  }

  .row-cols-md-1>* {
    flex: 0 0 100%;
    max-width: 100%
  }

  .row-cols-md-2>* {
    flex: 0 0 50%;
    max-width: 50%
  }

  .row-cols-md-3>* {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%
  }

  .row-cols-md-4>* {
    flex: 0 0 25%;
    max-width: 25%
  }

  .row-cols-md-5>* {
    flex: 0 0 20%;
    max-width: 20%
  }

  .row-cols-md-6>* {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%
  }

  .col-md-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%
  }

  .col-md-1 {
    flex: 0 0 8.3333333333%;
    max-width: 8.3333333333%
  }

  .col-md-2 {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%
  }

  .col-md-3 {
    flex: 0 0 25%;
    max-width: 25%
  }

  .col-md-4 {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%
  }

  .col-md-5 {
    flex: 0 0 41.6666666667%;
    max-width: 41.6666666667%
  }

  .col-md-6 {
    flex: 0 0 50%;
    max-width: 50%
  }

  .col-md-7 {
    flex: 0 0 58.3333333333%;
    max-width: 58.3333333333%
  }

  .col-md-8 {
    flex: 0 0 66.6666666667%;
    max-width: 66.6666666667%
  }

  .col-md-9 {
    flex: 0 0 75%;
    max-width: 75%
  }

  .col-md-10 {
    flex: 0 0 83.3333333333%;
    max-width: 83.3333333333%
  }

  .col-md-11 {
    flex: 0 0 91.6666666667%;
    max-width: 91.6666666667%
  }

  .col-md-12 {
    flex: 0 0 100%;
    max-width: 100%
  }

  .order-md-first {
    order: -1
  }

  .order-md-last {
    order: 13
  }

  .order-md-0 {
    order: 0
  }

  .order-md-1 {
    order: 1
  }

  .order-md-2 {
    order: 2
  }

  .order-md-3 {
    order: 3
  }

  .order-md-4 {
    order: 4
  }

  .order-md-5 {
    order: 5
  }

  .order-md-6 {
    order: 6
  }

  .order-md-7 {
    order: 7
  }

  .order-md-8 {
    order: 8
  }

  .order-md-9 {
    order: 9
  }

  .order-md-10 {
    order: 10
  }

  .order-md-11 {
    order: 11
  }

  .order-md-12 {
    order: 12
  }

  .offset-md-0 {
    margin-left: 0
  }

  .offset-md-1 {
    margin-left: 8.3333333333%
  }

  .offset-md-2 {
    margin-left: 16.6666666667%
  }

  .offset-md-3 {
    margin-left: 25%
  }

  .offset-md-4 {
    margin-left: 33.3333333333%
  }

  .offset-md-5 {
    margin-left: 41.6666666667%
  }

  .offset-md-6 {
    margin-left: 50%
  }

  .offset-md-7 {
    margin-left: 58.3333333333%
  }

  .offset-md-8 {
    margin-left: 66.6666666667%
  }

  .offset-md-9 {
    margin-left: 75%
  }

  .offset-md-10 {
    margin-left: 83.3333333333%
  }

  .offset-md-11 {
    margin-left: 91.6666666667%
  }
}

@media (min-width:992px) {
  .col-lg {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%
  }

  .row-cols-lg-1>* {
    flex: 0 0 100%;
    max-width: 100%
  }

  .row-cols-lg-2>* {
    flex: 0 0 50%;
    max-width: 50%
  }

  .row-cols-lg-3>* {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%
  }

  .row-cols-lg-4>* {
    flex: 0 0 25%;
    max-width: 25%
  }

  .row-cols-lg-5>* {
    flex: 0 0 20%;
    max-width: 20%
  }

  .row-cols-lg-6>* {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%
  }

  .col-lg-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%
  }

  .col-lg-1 {
    flex: 0 0 8.3333333333%;
    max-width: 8.3333333333%
  }

  .col-lg-2 {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%
  }

  .col-lg-3 {
    flex: 0 0 25%;
    max-width: 25%
  }

  .col-lg-4 {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%
  }

  .col-lg-5 {
    flex: 0 0 41.6666666667%;
    max-width: 41.6666666667%
  }

  .col-lg-6 {
    flex: 0 0 50%;
    max-width: 50%
  }

  .col-lg-7 {
    flex: 0 0 58.3333333333%;
    max-width: 58.3333333333%
  }

  .col-lg-8 {
    flex: 0 0 66.6666666667%;
    max-width: 66.6666666667%
  }

  .col-lg-9 {
    flex: 0 0 75%;
    max-width: 75%
  }

  .col-lg-10 {
    flex: 0 0 83.3333333333%;
    max-width: 83.3333333333%
  }

  .col-lg-11 {
    flex: 0 0 91.6666666667%;
    max-width: 91.6666666667%
  }

  .col-lg-12 {
    flex: 0 0 100%;
    max-width: 100%
  }

  .order-lg-first {
    order: -1
  }

  .order-lg-last {
    order: 13
  }

  .order-lg-0 {
    order: 0
  }

  .order-lg-1 {
    order: 1
  }

  .order-lg-2 {
    order: 2
  }

  .order-lg-3 {
    order: 3
  }

  .order-lg-4 {
    order: 4
  }

  .order-lg-5 {
    order: 5
  }

  .order-lg-6 {
    order: 6
  }

  .order-lg-7 {
    order: 7
  }

  .order-lg-8 {
    order: 8
  }

  .order-lg-9 {
    order: 9
  }

  .order-lg-10 {
    order: 10
  }

  .order-lg-11 {
    order: 11
  }

  .order-lg-12 {
    order: 12
  }

  .offset-lg-0 {
    margin-left: 0
  }

  .offset-lg-1 {
    margin-left: 8.3333333333%
  }

  .offset-lg-2 {
    margin-left: 16.6666666667%
  }

  .offset-lg-3 {
    margin-left: 25%
  }

  .offset-lg-4 {
    margin-left: 33.3333333333%
  }

  .offset-lg-5 {
    margin-left: 41.6666666667%
  }

  .offset-lg-6 {
    margin-left: 50%
  }

  .offset-lg-7 {
    margin-left: 58.3333333333%
  }

  .offset-lg-8 {
    margin-left: 66.6666666667%
  }

  .offset-lg-9 {
    margin-left: 75%
  }

  .offset-lg-10 {
    margin-left: 83.3333333333%
  }

  .offset-lg-11 {
    margin-left: 91.6666666667%
  }
}

@media (min-width:1200px) {
  .col-xl {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%
  }

  .row-cols-xl-1>* {
    flex: 0 0 100%;
    max-width: 100%
  }

  .row-cols-xl-2>* {
    flex: 0 0 50%;
    max-width: 50%
  }

  .row-cols-xl-3>* {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%
  }

  .row-cols-xl-4>* {
    flex: 0 0 25%;
    max-width: 25%
  }

  .row-cols-xl-5>* {
    flex: 0 0 20%;
    max-width: 20%
  }

  .row-cols-xl-6>* {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%
  }

  .col-xl-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%
  }

  .col-xl-1 {
    flex: 0 0 8.3333333333%;
    max-width: 8.3333333333%
  }

  .col-xl-2 {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%
  }

  .col-xl-3 {
    flex: 0 0 25%;
    max-width: 25%
  }

  .col-xl-4 {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%
  }

  .col-xl-5 {
    flex: 0 0 41.6666666667%;
    max-width: 41.6666666667%
  }

  .col-xl-6 {
    flex: 0 0 50%;
    max-width: 50%
  }

  .col-xl-7 {
    flex: 0 0 58.3333333333%;
    max-width: 58.3333333333%
  }

  .col-xl-8 {
    flex: 0 0 66.6666666667%;
    max-width: 66.6666666667%
  }

  .col-xl-9 {
    flex: 0 0 75%;
    max-width: 75%
  }

  .col-xl-10 {
    flex: 0 0 83.3333333333%;
    max-width: 83.3333333333%
  }

  .col-xl-11 {
    flex: 0 0 91.6666666667%;
    max-width: 91.6666666667%
  }

  .col-xl-12 {
    flex: 0 0 100%;
    max-width: 100%
  }

  .order-xl-first {
    order: -1
  }

  .order-xl-last {
    order: 13
  }

  .order-xl-0 {
    order: 0
  }

  .order-xl-1 {
    order: 1
  }

  .order-xl-2 {
    order: 2
  }

  .order-xl-3 {
    order: 3
  }

  .order-xl-4 {
    order: 4
  }

  .order-xl-5 {
    order: 5
  }

  .order-xl-6 {
    order: 6
  }

  .order-xl-7 {
    order: 7
  }

  .order-xl-8 {
    order: 8
  }

  .order-xl-9 {
    order: 9
  }

  .order-xl-10 {
    order: 10
  }

  .order-xl-11 {
    order: 11
  }

  .order-xl-12 {
    order: 12
  }

  .offset-xl-0 {
    margin-left: 0
  }

  .offset-xl-1 {
    margin-left: 8.3333333333%
  }

  .offset-xl-2 {
    margin-left: 16.6666666667%
  }

  .offset-xl-3 {
    margin-left: 25%
  }

  .offset-xl-4 {
    margin-left: 33.3333333333%
  }

  .offset-xl-5 {
    margin-left: 41.6666666667%
  }

  .offset-xl-6 {
    margin-left: 50%
  }

  .offset-xl-7 {
    margin-left: 58.3333333333%
  }

  .offset-xl-8 {
    margin-left: 66.6666666667%
  }

  .offset-xl-9 {
    margin-left: 75%
  }

  .offset-xl-10 {
    margin-left: 83.3333333333%
  }

  .offset-xl-11 {
    margin-left: 91.6666666667%
  }
}

.d-none {
  display: none !important
}

.d-inline {
  display: inline !important
}

.d-inline-block {
  display: inline-block !important
}

.d-block {
  display: block !important
}

.d-table {
  display: table !important
}

.d-table-row {
  display: table-row !important
}

.d-table-cell {
  display: table-cell !important
}

.d-flex {
  display: flex !important
}

.d-inline-flex {
  display: inline-flex !important
}

@media (min-width:576px) {
  .d-sm-none {
    display: none !important
  }

  .d-sm-inline {
    display: inline !important
  }

  .d-sm-inline-block {
    display: inline-block !important
  }

  .d-sm-block {
    display: block !important
  }

  .d-sm-table {
    display: table !important
  }

  .d-sm-table-row {
    display: table-row !important
  }

  .d-sm-table-cell {
    display: table-cell !important
  }

  .d-sm-flex {
    display: flex !important
  }

  .d-sm-inline-flex {
    display: inline-flex !important
  }
}

@media (min-width:768px) {
  .d-md-none {
    display: none !important
  }

  .d-md-inline {
    display: inline !important
  }

  .d-md-inline-block {
    display: inline-block !important
  }

  .d-md-block {
    display: block !important
  }

  .d-md-table {
    display: table !important
  }

  .d-md-table-row {
    display: table-row !important
  }

  .d-md-table-cell {
    display: table-cell !important
  }

  .d-md-flex {
    display: flex !important
  }

  .d-md-inline-flex {
    display: inline-flex !important
  }
}

@media (min-width:992px) {
  .d-lg-none {
    display: none !important
  }

  .d-lg-inline {
    display: inline !important
  }

  .d-lg-inline-block {
    display: inline-block !important
  }

  .d-lg-block {
    display: block !important
  }

  .d-lg-table {
    display: table !important
  }

  .d-lg-table-row {
    display: table-row !important
  }

  .d-lg-table-cell {
    display: table-cell !important
  }

  .d-lg-flex {
    display: flex !important
  }

  .d-lg-inline-flex {
    display: inline-flex !important
  }
}

@media (min-width:1200px) {
  .d-xl-none {
    display: none !important
  }

  .d-xl-inline {
    display: inline !important
  }

  .d-xl-inline-block {
    display: inline-block !important
  }

  .d-xl-block {
    display: block !important
  }

  .d-xl-table {
    display: table !important
  }

  .d-xl-table-row {
    display: table-row !important
  }

  .d-xl-table-cell {
    display: table-cell !important
  }

  .d-xl-flex {
    display: flex !important
  }

  .d-xl-inline-flex {
    display: inline-flex !important
  }
}

@media print {
  .d-print-none {
    display: none !important
  }

  .d-print-inline {
    display: inline !important
  }

  .d-print-inline-block {
    display: inline-block !important
  }

  .d-print-block {
    display: block !important
  }

  .d-print-table {
    display: table !important
  }

  .d-print-table-row {
    display: table-row !important
  }

  .d-print-table-cell {
    display: table-cell !important
  }

  .d-print-flex {
    display: flex !important
  }

  .d-print-inline-flex {
    display: inline-flex !important
  }
}

.flex-row {
  flex-direction: row !important
}

.flex-column {
  flex-direction: column !important
}

.flex-row-reverse {
  flex-direction: row-reverse !important
}

.flex-column-reverse {
  flex-direction: column-reverse !important
}

.flex-wrap {
  flex-wrap: wrap !important
}

.flex-nowrap {
  flex-wrap: nowrap !important
}

.flex-wrap-reverse {
  flex-wrap: wrap-reverse !important
}

.flex-fill {
  flex: 1 1 auto !important
}

.flex-grow-0 {
  flex-grow: 0 !important
}

.flex-grow-1 {
  flex-grow: 1 !important
}

.flex-shrink-0 {
  flex-shrink: 0 !important
}

.flex-shrink-1 {
  flex-shrink: 1 !important
}

.justify-content-start {
  justify-content: flex-start !important
}

.justify-content-end {
  justify-content: flex-end !important
}

.justify-content-center {
  justify-content: center !important
}

.justify-content-between {
  justify-content: space-between !important
}

.justify-content-around {
  justify-content: space-around !important
}

.align-items-start {
  align-items: flex-start !important
}

.align-items-end {
  align-items: flex-end !important
}

.align-items-center {
  align-items: center !important
}

.align-items-baseline {
  align-items: baseline !important
}

.align-items-stretch {
  align-items: stretch !important
}

.align-content-start {
  align-content: flex-start !important
}

.align-content-end {
  align-content: flex-end !important
}

.align-content-center {
  align-content: center !important
}

.align-content-between {
  align-content: space-between !important
}

.align-content-around {
  align-content: space-around !important
}

.align-content-stretch {
  align-content: stretch !important
}

.align-self-auto {
  align-self: auto !important
}

.align-self-start {
  align-self: flex-start !important
}

.align-self-end {
  align-self: flex-end !important
}

.align-self-center {
  align-self: center !important
}

.align-self-baseline {
  align-self: baseline !important
}

.align-self-stretch {
  align-self: stretch !important
}

@media (min-width:576px) {
  .flex-sm-row {
    flex-direction: row !important
  }

  .flex-sm-column {
    flex-direction: column !important
  }

  .flex-sm-row-reverse {
    flex-direction: row-reverse !important
  }

  .flex-sm-column-reverse {
    flex-direction: column-reverse !important
  }

  .flex-sm-wrap {
    flex-wrap: wrap !important
  }

  .flex-sm-nowrap {
    flex-wrap: nowrap !important
  }

  .flex-sm-wrap-reverse {
    flex-wrap: wrap-reverse !important
  }

  .flex-sm-fill {
    flex: 1 1 auto !important
  }

  .flex-sm-grow-0 {
    flex-grow: 0 !important
  }

  .flex-sm-grow-1 {
    flex-grow: 1 !important
  }

  .flex-sm-shrink-0 {
    flex-shrink: 0 !important
  }

  .flex-sm-shrink-1 {
    flex-shrink: 1 !important
  }

  .justify-content-sm-start {
    justify-content: flex-start !important
  }

  .justify-content-sm-end {
    justify-content: flex-end !important
  }

  .justify-content-sm-center {
    justify-content: center !important
  }

  .justify-content-sm-between {
    justify-content: space-between !important
  }

  .justify-content-sm-around {
    justify-content: space-around !important
  }

  .align-items-sm-start {
    align-items: flex-start !important
  }

  .align-items-sm-end {
    align-items: flex-end !important
  }

  .align-items-sm-center {
    align-items: center !important
  }

  .align-items-sm-baseline {
    align-items: baseline !important
  }

  .align-items-sm-stretch {
    align-items: stretch !important
  }

  .align-content-sm-start {
    align-content: flex-start !important
  }

  .align-content-sm-end {
    align-content: flex-end !important
  }

  .align-content-sm-center {
    align-content: center !important
  }

  .align-content-sm-between {
    align-content: space-between !important
  }

  .align-content-sm-around {
    align-content: space-around !important
  }

  .align-content-sm-stretch {
    align-content: stretch !important
  }

  .align-self-sm-auto {
    align-self: auto !important
  }

  .align-self-sm-start {
    align-self: flex-start !important
  }

  .align-self-sm-end {
    align-self: flex-end !important
  }

  .align-self-sm-center {
    align-self: center !important
  }

  .align-self-sm-baseline {
    align-self: baseline !important
  }

  .align-self-sm-stretch {
    align-self: stretch !important
  }
}

@media (min-width:768px) {
  .flex-md-row {
    flex-direction: row !important
  }

  .flex-md-column {
    flex-direction: column !important
  }

  .flex-md-row-reverse {
    flex-direction: row-reverse !important
  }

  .flex-md-column-reverse {
    flex-direction: column-reverse !important
  }

  .flex-md-wrap {
    flex-wrap: wrap !important
  }

  .flex-md-nowrap {
    flex-wrap: nowrap !important
  }

  .flex-md-wrap-reverse {
    flex-wrap: wrap-reverse !important
  }

  .flex-md-fill {
    flex: 1 1 auto !important
  }

  .flex-md-grow-0 {
    flex-grow: 0 !important
  }

  .flex-md-grow-1 {
    flex-grow: 1 !important
  }

  .flex-md-shrink-0 {
    flex-shrink: 0 !important
  }

  .flex-md-shrink-1 {
    flex-shrink: 1 !important
  }

  .justify-content-md-start {
    justify-content: flex-start !important
  }

  .justify-content-md-end {
    justify-content: flex-end !important
  }

  .justify-content-md-center {
    justify-content: center !important
  }

  .justify-content-md-between {
    justify-content: space-between !important
  }

  .justify-content-md-around {
    justify-content: space-around !important
  }

  .align-items-md-start {
    align-items: flex-start !important
  }

  .align-items-md-end {
    align-items: flex-end !important
  }

  .align-items-md-center {
    align-items: center !important
  }

  .align-items-md-baseline {
    align-items: baseline !important
  }

  .align-items-md-stretch {
    align-items: stretch !important
  }

  .align-content-md-start {
    align-content: flex-start !important
  }

  .align-content-md-end {
    align-content: flex-end !important
  }

  .align-content-md-center {
    align-content: center !important
  }

  .align-content-md-between {
    align-content: space-between !important
  }

  .align-content-md-around {
    align-content: space-around !important
  }

  .align-content-md-stretch {
    align-content: stretch !important
  }

  .align-self-md-auto {
    align-self: auto !important
  }

  .align-self-md-start {
    align-self: flex-start !important
  }

  .align-self-md-end {
    align-self: flex-end !important
  }

  .align-self-md-center {
    align-self: center !important
  }

  .align-self-md-baseline {
    align-self: baseline !important
  }

  .align-self-md-stretch {
    align-self: stretch !important
  }
}

@media (min-width:992px) {
  .flex-lg-row {
    flex-direction: row !important
  }

  .flex-lg-column {
    flex-direction: column !important
  }

  .flex-lg-row-reverse {
    flex-direction: row-reverse !important
  }

  .flex-lg-column-reverse {
    flex-direction: column-reverse !important
  }

  .flex-lg-wrap {
    flex-wrap: wrap !important
  }

  .flex-lg-nowrap {
    flex-wrap: nowrap !important
  }

  .flex-lg-wrap-reverse {
    flex-wrap: wrap-reverse !important
  }

  .flex-lg-fill {
    flex: 1 1 auto !important
  }

  .flex-lg-grow-0 {
    flex-grow: 0 !important
  }

  .flex-lg-grow-1 {
    flex-grow: 1 !important
  }

  .flex-lg-shrink-0 {
    flex-shrink: 0 !important
  }

  .flex-lg-shrink-1 {
    flex-shrink: 1 !important
  }

  .justify-content-lg-start {
    justify-content: flex-start !important
  }

  .justify-content-lg-end {
    justify-content: flex-end !important
  }

  .justify-content-lg-center {
    justify-content: center !important
  }

  .justify-content-lg-between {
    justify-content: space-between !important
  }

  .justify-content-lg-around {
    justify-content: space-around !important
  }

  .align-items-lg-start {
    align-items: flex-start !important
  }

  .align-items-lg-end {
    align-items: flex-end !important
  }

  .align-items-lg-center {
    align-items: center !important
  }

  .align-items-lg-baseline {
    align-items: baseline !important
  }

  .align-items-lg-stretch {
    align-items: stretch !important
  }

  .align-content-lg-start {
    align-content: flex-start !important
  }

  .align-content-lg-end {
    align-content: flex-end !important
  }

  .align-content-lg-center {
    align-content: center !important
  }

  .align-content-lg-between {
    align-content: space-between !important
  }

  .align-content-lg-around {
    align-content: space-around !important
  }

  .align-content-lg-stretch {
    align-content: stretch !important
  }

  .align-self-lg-auto {
    align-self: auto !important
  }

  .align-self-lg-start {
    align-self: flex-start !important
  }

  .align-self-lg-end {
    align-self: flex-end !important
  }

  .align-self-lg-center {
    align-self: center !important
  }

  .align-self-lg-baseline {
    align-self: baseline !important
  }

  .align-self-lg-stretch {
    align-self: stretch !important
  }
}

@media (min-width:1200px) {
  .flex-xl-row {
    flex-direction: row !important
  }

  .flex-xl-column {
    flex-direction: column !important
  }

  .flex-xl-row-reverse {
    flex-direction: row-reverse !important
  }

  .flex-xl-column-reverse {
    flex-direction: column-reverse !important
  }

  .flex-xl-wrap {
    flex-wrap: wrap !important
  }

  .flex-xl-nowrap {
    flex-wrap: nowrap !important
  }

  .flex-xl-wrap-reverse {
    flex-wrap: wrap-reverse !important
  }

  .flex-xl-fill {
    flex: 1 1 auto !important
  }

  .flex-xl-grow-0 {
    flex-grow: 0 !important
  }

  .flex-xl-grow-1 {
    flex-grow: 1 !important
  }

  .flex-xl-shrink-0 {
    flex-shrink: 0 !important
  }

  .flex-xl-shrink-1 {
    flex-shrink: 1 !important
  }

  .justify-content-xl-start {
    justify-content: flex-start !important
  }

  .justify-content-xl-end {
    justify-content: flex-end !important
  }

  .justify-content-xl-center {
    justify-content: center !important
  }

  .justify-content-xl-between {
    justify-content: space-between !important
  }

  .justify-content-xl-around {
    justify-content: space-around !important
  }

  .align-items-xl-start {
    align-items: flex-start !important
  }

  .align-items-xl-end {
    align-items: flex-end !important
  }

  .align-items-xl-center {
    align-items: center !important
  }

  .align-items-xl-baseline {
    align-items: baseline !important
  }

  .align-items-xl-stretch {
    align-items: stretch !important
  }

  .align-content-xl-start {
    align-content: flex-start !important
  }

  .align-content-xl-end {
    align-content: flex-end !important
  }

  .align-content-xl-center {
    align-content: center !important
  }

  .align-content-xl-between {
    align-content: space-between !important
  }

  .align-content-xl-around {
    align-content: space-around !important
  }

  .align-content-xl-stretch {
    align-content: stretch !important
  }

  .align-self-xl-auto {
    align-self: auto !important
  }

  .align-self-xl-start {
    align-self: flex-start !important
  }

  .align-self-xl-end {
    align-self: flex-end !important
  }

  .align-self-xl-center {
    align-self: center !important
  }

  .align-self-xl-baseline {
    align-self: baseline !important
  }

  .align-self-xl-stretch {
    align-self: stretch !important
  }
}

.bold {
  font-weight: 700
}

video {
  display: block;
  object-fit: cover
}

video[poster] {
  max-width: 100%;
  width: 100%
}

.plyr button.plyr__control.plyr__control--overlaid {
  background: hsla(0, 0%, 100%, .7)
}

.plyr button.plyr__tab-focus {
  box-shadow: 0 0 0 5px hsla(0, 0%, 100%, .7)
}

.plyr svg {
  filter: brightness(80%)
}

#landing {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

#landing .hero {
  padding: 35px 0
}

@media (min-width:992px) {
  #landing .hero {
    background: url(~@/assets/images/header-bg-desktop.826ff8a4.jpg) top no-repeat;
    background-size: cover
  }
}

@media (max-width:1199.98px) {
  #landing .hero {
    background: url(~@/assets/images/header-bg-tablet.3c0b3998.jpg) top no-repeat;
    background-size: cover
  }
}

@media (max-width:767.98px) {
  #landing .hero {
    padding: 5vw 20px
  }
}

#landing .hero header {
  margin: 0 0 55px 40px
}

@media (max-width:1199.98px) {
  #landing .hero header {
    text-align: center
  }
}

@media (max-width:767.98px) {
  #landing .hero header {
    margin: 0 0 30vw
  }
}

#landing .hero header .logo {
  max-width: 155px
}

@media (max-width:1199.98px) {
  #landing .hero header .logo {
    max-width: 25vw
  }
}

@media (max-width:767.98px) {
  #landing .hero header .logo {
    max-width: 40vw
  }
}

#landing .hero .social ul {
  list-style-type: none;
  position: absolute;
  top: 40%;
  transform: translateY(-50%)
}

#landing .hero .social ul li {
  text-align: center;
  display: block;
  margin-bottom: 15px;
  max-width: 17px
}

#landing .hero .social ul li a {
  display: block
}

#landing .hero .social ul li:last-child {
  margin-bottom: 0
}

#landing .hero .video {
  margin-bottom: 15px
}

#landing .hero .definition h1,
#landing .hero .definition p {
  font-weight: 400;
  margin: 0;
  padding: 0;
  color: #fff;
  line-height: .9
}

#landing .hero .definition h1:first-child,
#landing .hero .definition p:first-child {
  font-family: acumin-pro-extra-condensed, sans-serif;
  font-size: 35px
}

@media (max-width:1199.98px) {

  #landing .hero .definition h1:first-child,
  #landing .hero .definition p:first-child {
    font-size: 3.8vw;
    line-height: 1.2
  }
}

@media (max-width:767.98px) {

  #landing .hero .definition h1:first-child,
  #landing .hero .definition p:first-child {
    font-size: 6.5vw;
    line-height: 1.2
  }
}

#landing .hero .definition h1:nth-child(2),
#landing .hero .definition p:nth-child(2) {
  font-size: 14px;
  margin-bottom: 5px
}

@media (max-width:1199.98px) {

  #landing .hero .definition h1:nth-child(2),
  #landing .hero .definition p:nth-child(2) {
    font-size: 2vw
  }
}

@media (max-width:767.98px) {

  #landing .hero .definition h1:nth-child(2),
  #landing .hero .definition p:nth-child(2) {
    font-size: 3.5vw
  }

  #landing .hero .definition h1:nth-child(2) br,
  #landing .hero .definition p:nth-child(2) br {
    display: block !important
  }
}

#landing .hero .definition h1:nth-child(3),
#landing .hero .definition p:nth-child(3) {
  font-family: Acumin, Helvetica, sans-serif;
  font-weight: 300;
  font-size: 9px
}

@media (max-width:1199.98px) {

  #landing .hero .definition h1:nth-child(3),
  #landing .hero .definition p:nth-child(3) {
    font-size: 1.7vw
  }
}

@media (max-width:767.98px) {

  #landing .hero .definition h1:nth-child(3),
  #landing .hero .definition p:nth-child(3) {
    font-size: 2.8vw;
    line-height: 1.2
  }
}

@media (max-width:1199.98px) {
  #landing .hero .definition {
    text-align: center;
    margin-top: 50vw
  }
}

#landing .hero h2.join-the-movement {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: #fff;
  font-family: acumin-pro-extra-condensed, sans-serif;
  font-size: 22px;
  letter-spacing: 10.4px;
  text-align: center;
  margin-top: 248px;
  line-height: 1;
  font-weight: 400;
  margin-left: 30px;
  background: #00594f;
  padding: 13px 0 10px
}

@media (max-width:1199.98px) {
  #landing .hero h2.join-the-movement {
    padding: 3vw 3vw 1.5vw;
    letter-spacing: .8vw;
    font-size: 5vw;
    margin: 3vw auto 0;
    max-width: 60vw
  }
}

@media (min-width:1200px) {
  #landing .mobile-video {
    display: none
  }
}

#landing .coupledom {
  background: url(~@/assets/images/coupledom-bg.e786e4b2.jpg) no-repeat;
  background-size: cover;
  background-position: top;
  position: relative;
  text-align: center;
  padding: 62px 0
}

@media (max-width:991.98px) {
  #landing .coupledom {
    padding-bottom: 5vw;
    padding-top: 22vw
  }
}

@media (max-width:767.98px) {
  #landing .coupledom {
    margin-top: -1px
  }
}

#landing .coupledom .coupledom-title {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  opacity: .35;
  left: 0
}

@media (max-width:1199.98px) {
  #landing .coupledom .coupledom-title {
    top: 13vw
  }
}

@media (max-width:767.98px) {
  #landing .coupledom .coupledom-title {
    top: 14vw;
    opacity: .5;
    width: 90%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%)
  }
}

#landing .coupledom .coupledom-title img {
  max-width: 100%
}

#landing .coupledom h3 {
  color: #4d4d4f;
  font-size: 48px;
  text-transform: uppercase;
  font-family: acumin-pro-extra-condensed, sans-serif;
  font-weight: 400;
  line-height: 1;
  word-spacing: -2px;
  margin: 0 0 30px;
  padding: 0;
  letter-spacing: .2px
}

@media (max-width:767.98px) {
  #landing .coupledom h3 {
    padding: 0 6vw
  }
}

#landing .coupledom p {
  font-weight: 300;
  font-size: 14px;
  margin: 0 0 10px;
  padding: 0;
  line-height: 1.4
}

#landing .coupledom p.intro {
  font-size: 16px;
  font-weight: 700;
  letter-spacing: .2px
}

@media (max-width:767.98px) {
  #landing .coupledom p.intro {
    padding: 6vw 6vw 3vw 0
  }
}

@media (max-width:767.98px) {

  #landing .coupledom p br,
  #landing .coupledom p br:after {
    content: " "
  }
}

#landing .coupledom .share {
  text-align: center
}

#landing .coupledom .share h4 {
  font-weight: 700;
  color: #005850;
  font-size: 22px;
  text-transform: uppercase;
  text-decoration: underline;
  margin: 40px 0 5px;
  padding: 0;
  cursor: pointer
}

@media (max-width:991.98px) {
  #landing .coupledom .share h4 {
    margin-top: 5vw
  }
}

#landing .coupledom .share p {
  font-size: 9px;
  margin: 0;
  padding: 0;
  color: #333
}

@media (max-width:767.98px) {
  #landing .coupledom {
    padding-left: 15px;
    padding-right: 15px
  }
}

#landing .join {
  background: url(~@/assets/images/join-bg.d28d72df.jpg) no-repeat;
  background-size: cover;
  background-position: top;
  padding-top: 25px;
  text-align: center
}

#landing .join p {
  font-weight: 300;
  font-size: 14px;
  line-height: 1.4
}

#landing .join h5 {
  font-family: acumin-pro-extra-condensed, Helvetica, sans-serif;
  text-transform: uppercase;
  font-size: 48px;
  color: #333;
  font-weight: 400;
  margin: 0;
  padding: 0
}

#landing .join h6 {
  font-size: 26px;
  color: #005850;
  font-weight: bold;
  margin: 10px 0;
  padding: 0
}

#landing .join .disclaimer {
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 450px
}

#landing .join .disclaimer label {
  font-size: 10px;
  text-align: left;
  font-weight: 300;
  top: -1px
}

#landing .join .disclaimer p {
  flex-grow: 1;
  text-align: left;
  margin: 0 0 0 15px;
  font-size: 11px;
  line-height: 1.5
}

@media (max-width:767.98px) {
  #landing .join .disclaimer p {
    line-height: 1.2
  }
}

#landing .join .disclaimer p span {
  text-decoration: underline;
  cursor: pointer
}

#landing .join .disclaimer a {
  color: #fff;
  text-decoration: underline
}

#landing .join .email-signup {
  margin-bottom: 40px
}

#landing .join .email-signup p {
  font-size: 9px;
  color: #333
}

@media (max-width:767.98px) {
  #landing .join .email-signup p br {
    display: none
  }
}

#landing .join .email-signup p a {
  text-decoration: underline;
  color: #333
}

#landing .join .email-signup .download-link {
  flex: 0 0 100%;
  align-self: center;
  margin-top: 10px;
  min-height: 20px
}

#landing .join .email-signup .download-link a {
  color: #00594f;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  padding: 5px;
  font-weight: 300
}

@media (max-width:991.98px) {
  #landing .join .email-signup .download-link a {
    font-size: 2.5vm
  }
}

#landing .join .email-signup .disclaimer-popup {
  position: absolute;
  width: 100%;
  max-width: 600px;
  background: rgba(0, 0, 0, .9);
  color: #fff;
  bottom: 40px;
  font-size: 13px;
  font-weight: 300;
  z-index: 100;
  text-align: left;
  padding: 50px 20px 20px;
  opacity: 0;
  transition: opacity .3s ease;
  pointer-events: none;
  left: 50%;
  transform: translateX(-50%)
}

#landing .join .email-signup .disclaimer-popup.shown {
  opacity: 1;
  pointer-events: auto
}

#landing .join .email-signup .disclaimer-popup img {
  position: absolute;
  max-width: 25px;
  padding: 5px;
  cursor: pointer;
  top: 10px;
  right: 10px
}

#landing .join .email-signup .disclaimer-popup a,
#landing .join .email-signup .disclaimer-popup p {
  color: #fff;
  font-size: 13px;
  line-height: 1.4;
  font-weight: 700;
  margin-bottom: 20px
}

#landing .join .email-signup .disclaimer-popup a {
  text-decoration: underline;
  font-weight: 300
}

#landing .join .email-signup .disclaimer-popup li {
  line-height: 1.4
}
</style>
