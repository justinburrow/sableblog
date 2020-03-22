import '~/assets/styles.scss'

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, {head}) {
  Vue.component('Layout', DefaultLayout);

  head.link.push({
    rel: 'icon',
    href: 'data:,'
  });
}
