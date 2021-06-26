<template>
  <div class="bottom-section">
    <section class="instagram">
      <h4>Connect With Us</h4>
      <h5>#sablelabs</h5>
      <div class="instagram-feed">
        <ClientOnly>
          <div id="flockler-embed-17177230bd60efd482bfb4b945f55ff2"></div>
          <script type="application/javascript" src="https://plugins.flockler.com/embed/171753313d60794c3405e22a3ba95654/17177230bd60efd482bfb4b945f55ff2" async></script>
        </ClientOnly>
      </div>
    </section>

    <footer>

      <div class="mission">
        <div class="wrapper">
          <g-image src="~/assets/images/sable-s.svg" alt="S'able Labs" width="57" height="107" />
          <h3>Devoted to uplifting and celebrating partnerships and people without borders and without judgement; Share the dream with us and we’ll make it real together.</h3>
        </div>
      </div>

      <div class="footer-links wrapper">
        <ul class="subscribe">
          <li>
            <h6>Sign up for S'able updates</h6>
            <EmailSignup />
          </li>
        </ul>

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
            <h6>Coupledom</h6>
            <ul>
              <li>
                <g-link to="/pages/terms-of-use/">The Podcast</g-link>
              </li>
              <li>
                <g-link to="/pages/privacy-policy/">About</g-link>
              </li>
            </ul>
          </li>
        </ul>

        <ul>
          <li>
            <h6>Stay In Touch</h6>
            <ul>
              <li>
                  <g-link to="/pages/terms-of-use/">Newsletter</g-link>
              </li>
              <li>
                <g-link to="/pages/privacy-policy/">Instagram</g-link>
              </li>
              <li>
                <g-link to="/pages/cookie-policy/">Facebook</g-link>
              </li>
              <li>
                <g-link to="/pages/cookie-policy/">Twitter</g-link>
              </li>
              <li>
                <g-link to="/pages/cookie-policy/">Youtube</g-link>
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
      </div>

      <p class="copyright">&copy;{{ this.currentYear }} S’able Labs. All Rights Reserved.</p>

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
      currentYear: Number,
      isMobile: this.$store.isMobile
    }
  },
  mounted() {
    this.currentYear = new Date().getFullYear();
  }
}
</script>
