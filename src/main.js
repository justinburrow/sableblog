import DefaultLayout from '~/layouts/Default.vue'
import VScrollLock from 'v-scroll-lock'
import VueAgile from 'vue-agile'
import VueCookies from 'vue-cookies'
import VueSocialSharing from 'vue-social-sharing'

export default function (Vue, {router, head, isClient}) {
  Vue.component('Layout', DefaultLayout);
  Vue.use(VScrollLock);
  Vue.use(VueAgile);
  Vue.use(VueCookies);
  Vue.use(VueSocialSharing);


  head.link.push({
    rel: "stylesheet",
    href: "https://use.typekit.net/zmf6fgh.css"
  });

  head.script.push({
    src: "https://kit.fontawesome.com/70d564e194.js",
    crossorigin: "anonymous",
    async: true,
    defer: true,
    body: true
  })

  head.script.push({
    src: "https://flockler.embed.codes/KAn5xj",
    body: true,
    async: true
  });

  head.script.push({
    src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
    async: true,
  });

  head.link.push({
    rel: "preconnect",
    href: "https://www.youtube.com"
  });

  head.link.push({
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossorigin: true
  });

  head.link.push({
    rel: "preconnect",
    href: "https://i.ytimg.com"
  });

  head.link.push({
    rel: "preconnect",
    href: "https://i9.ytimg.com"
  });

  head.link.push({
    rel: "preconnect",
    href: "https://s.ytimg.comm"
  });

  head.meta.push({
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  });

  head.meta.push(
    {
      key: 'og:site_name',
      property: 'og:site_name',
      content: `S'able Labs`
    },
    {
      key: 'og:description',
      property: 'og:description',
      content: `A community for Coupledom`
    },
    {
      key: 'og:title',
      property: 'og:title',
      content: `S'able Labs`
    },
    {
      key: 'og:type',
      name: 'og:type',
      content: `website`
    },
    {
      key: 'og:url',
      property: 'og:url',
      content: `https://sablelabs.co`
    },
    {
      key: 'og:image',
      property: 'og:image',
      content: '~/assets/images/coupledom-banner.jpg'
    },
    {
      key: 'twitter:card',
      content: "summary_large_image"
    },
    {
      key: 'twitter:creator',
      content: "@sablelabs"
    },
    {
      key: 'twitter:title',
      property: 'twitter:title',
      content: `S'able Labs`,
    },
    {
      key: 'twitter:description',
      property: 'twitter:description',
      content: `A community for Coupledom`,
    },
    {
      key: 'twitter:image',
      property: 'twitter:image',
      content: '~/assets/images/coupledom-banner.jpg',
    }
  );

  const store = Vue.observable({
    menuOpen: false,
    searchQuery: '',
    showPopup: false,
    isMobile: false
  });

  const actions = {
    openMenu() {
      store.menuOpen = true;
    },
    closeMenu() {
      store.menuOpen = false;
    },
    mobileDetect() {
      if (window.screen.width < 768) {
        store.isMobile = true;
      } else {
        store.isMobile = false;
      }
    }
  }

  if (typeof window !== "undefined") {
    Vue.prototype.$scrollToTop = () => window.scrollTo(0,0);
    document.addEventListener('DOMContentLoaded', function() {
      actions.mobileDetect();
    });
  }

  router.beforeEach((to, from, next) => {
    head.meta.push({
      key: 'og:url',
      property: 'og:url',
      content: process.env.GRIDSOME_BASE_URL + to.path,
    })
    next()
  });

  // overwrite the scrollBehavior function with custom one
  router.options.scrollBehavior = function (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        selector: to.hash
      }
    } else {
      document.getElementById('app').scrollIntoView();
    }
  }

  Vue.prototype.$store = store;
  Vue.prototype.$actions = actions;
}
