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
    rel: 'icon',
    href: 'data:,'
  });

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
  })

  const store = Vue.observable({
    menuOpen: false,
    searchQuery: ''
  });

  const actions = {
    openMenu() {
      store.menuOpen = true;
    },
    closeMenu() {
      store.menuOpen = false;
    }
  }




    // overwrite the scrollBehavior function with custom one
    router.options.scrollBehavior = function (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else if (to.hash) {
        return {
          selector: to.hash
        }
      } else {
        if (window.flcklr) {
          if (document.querySelector('#flockler-embed-17177230bd60efd482bfb4b945f55ff2').innerHTML != '') {
            document.querySelector('#flockler-embed-17177230bd60efd482bfb4b945f55ff2').innerHTML = '';
          }
          Vue.prototype.$flockler = window.flcklr.Embeds.create(window.flcklr.EmbedConfigs['17177230bd60efd482bfb4b945f55ff2']);
        };
        return { x: 0, y: 0 }
      }
    }

  Vue.prototype.$store = store;
  Vue.prototype.$actions = actions;
}
