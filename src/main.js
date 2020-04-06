import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, {head}) {
  Vue.component('Layout', DefaultLayout);

  head.link.push({
    rel: 'icon',
    href: 'data:,'
  });

  head.link.push({
    rel: "stylesheet",
    href: "https://use.typekit.net/zmf6fgh.css"
  });

  const store = Vue.observable({
    menuOpen: false
  });

  const actions = {
    openMenu() {
      store.menuOpen = true;
    },
    closeMenu() {
      store.menuOpen = false;
    }
  }

  Vue.prototype.$store = store;
  Vue.prototype.$actions = actions;
}
