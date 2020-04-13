import DefaultLayout from '~/layouts/Default.vue'
import VScrollLock from 'v-scroll-lock'

export default function (Vue, {router, head, isClient}) {
  Vue.component('Layout', DefaultLayout);
  Vue.use(VScrollLock)

  head.link.push({
    rel: 'icon',
    href: 'data:,'
  });

  head.link.push({
    rel: "stylesheet",
    href: "https://use.typekit.net/zmf6fgh.css"
  });

  const store = Vue.observable({
    menuOpen: false,
    searchOpen: false
  });

  const actions = {
    openMenu() {
      store.menuOpen = true;
      store.searchOpen = false;
    },
    closeMenu() {
      store.menuOpen = false;
    },
    openSearch() {
      store.searchOpen = true;
      store.menuOpen = false
    },
    closeSearch() {
      store.searchOpen = false;
    }
  }

    // overwrite the scrollBehavior function with custom one
    router.options.scrollBehavior = function (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      }
      if (to.hash) {
        return {
          selector: to.hash
        };
      }
      document.body.scrollTop = 0;
    }

  Vue.prototype.$store = store;
  Vue.prototype.$actions = actions;
}
