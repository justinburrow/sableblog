import DefaultLayout from '~/layouts/Default.vue'
import VScrollLock from 'v-scroll-lock'
import VueAgile from 'vue-agile'
import VueCookies from 'vue-cookies'

export default function (Vue, {router, head, isClient}) {
  Vue.component('Layout', DefaultLayout);
  Vue.use(VScrollLock);
  Vue.use(VueAgile);
  Vue.use(VueCookies);

  head.link.push({
    rel: "stylesheet",
    href: "https://use.typekit.net/zmf6fgh.css"
  });

  head.script.push({
    src: "https://flockler.embed.codes/KAn5xj",
    body: true,
    async: true
  });

  head.script.push({
    src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
    async: true
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
      property: 'og:type',
      content: `website`
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
      if (document.documentElement.clientWidth < 768) {
        store.isMobile = true;
        console.log(store.isMobile);
      } else {
        store.isMobile = false;
      }
    }
  }

  if (typeof window !== "undefined") {
    document.addEventListener('DOMContentLoaded', function() {
      actions.mobileDetect();

      if (window.flcklr) {
        if (document.querySelector('#flockler-embed-17177230bd60efd482bfb4b945f55ff2').innerHTML != '') {
          document.querySelector('#flockler-embed-17177230bd60efd482bfb4b945f55ff2').innerHTML = '';
        }

        Vue.prototype.$flockler = window.flcklr.Embeds.create(window.flcklr.EmbedConfigs['17177230bd60efd482bfb4b945f55ff2']);
      }
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
      return { x: 0, y: 0 }
    }
  }

  Vue.prototype.$store = store;
  Vue.prototype.$actions = actions;
}
