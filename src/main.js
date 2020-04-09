import DefaultLayout from '~/layouts/Default.vue'
import VScrollLock from 'v-scroll-lock'

export default function (Vue, {head}) {
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

  Vue.prototype.$store = store;
  Vue.prototype.$actions = actions;
}
