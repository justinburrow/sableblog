<template>
  <div>


</div>
</template>



<script>
import { VueAgile } from 'vue-agile';
import {isMobile} from 'mobile-device-detect';

export default {
  name: 'TrendingFeatures',
  data() {
    return {
      isMobile,
    }
  },
  components: {
    agile: VueAgile
  }
}
</script>
