import DefaultLayout from '~/layouts/Default.vue'
import VScrollLock from 'v-scroll-lock'
import VueAgile from 'vue-agile'


export default function (Vue, {router, head, isClient}) {
  Vue.component('Layout', DefaultLayout);
  Vue.use(VScrollLock);
  Vue.use(VueAgile);

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
    searchOpen: false,
    dropdownShow: false,
    categoriesOpen: false,
    searchQuery: ''
  });

  const actions = {
    openMenu() {
      store.menuOpen = true;
    },
    closeMenu() {
      store.menuOpen = false;
    },
    openSearch() {
      if (store.dropdownShow == true && store.categoriesOpen == true) {
        store.searchOpen = true;
        store.categoriesOpen = false;
      } else if (store.dropdownShow == true && store.categoriesOpen == false) {
        store.searchOpen = true;
        this.hideDropdown();
      } else {
        store.searchOpen = true;
        this.showDropdown();
      }
    },
    closeSearch() {
      store.searchOpen = false;
    },
    showCategories() {
      store.categoriesOpen = !store.categoriesOpen;
    },
    toggleDropdown() {
      store.dropdownShow = !store.dropdownShow;
    },
    showDropdown() {
      store.dropdownShow = true;
    },
    hideDropdown() {
      store.dropdownShow = false;
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
      actions.hideDropdown();
    }

  Vue.prototype.$store = store;
  Vue.prototype.$actions = actions;
}
