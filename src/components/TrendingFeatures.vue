<template>
    <div class="slide">
      <article>
        <h4>
          <span v-for="(cat, i) of post.categories" :key="i">
            <g-link :to="post.path">
              <span v-html="cat.title"></span>
            </g-link>
          </span>
        </h4>
        <h3>
          <g-link :to="post.path">
            <div class="title" v-html="post.title"></div>
          </g-link>
        </h3>
        <div class="image">
          <g-link :to="post.path" v-if="post.featuredMedia != null">
            <img :src="post.featuredMedia.sourceUrl" :alt="post.featuredMedia.altText" />
          </g-link>
        </div>
        <h5>
          <g-link :to="post.path">
            <div>
              {{post.excerpt | removeHTML}}
            </div>
          </g-link>
        </h5>
      </article>
    </div>
</template>



<script>
import {isMobile} from 'mobile-device-detect';

export default {
  name: 'TrendingFeatures',
  data() {
    return {
      isMobile,
    }
  },
  props: {
    'post': {
      required: true,
    },
  },
  methods: {
    setRowHeights() {
      this.setRowBySection("h3");
      this.setRowBySection(".excerpt");
    },
    setRowBySection(selector) {
      var itemContentSections = document.querySelectorAll(selector);
      // remove any previously set heights
      itemContentSections.forEach(function(item){
        item.style.height = "";
      });
      // set the maximum content section height for each row
      var rows = [[]];
      var rowMaxHeight = [0];
      var currentRowIndex = 0;
      var currentRowOffset;
      var numberOfItems = itemContentSections.length;
      itemContentSections.forEach(function(item, index){
        var height = item.offsetHeight;
        var offset = item.getBoundingClientRect().top;
        if (currentRowOffset && currentRowOffset !== offset){
          // this item is on the next row
          // so increase the rowIndex and set the defaults
          currentRowIndex += 1;
          rows[currentRowIndex]=[];
          rowMaxHeight[currentRowIndex]=0;
        }
        // add this item to the relevant row
        rows[currentRowIndex].push(item);
        // check for max section height on this row
        rowMaxHeight[currentRowIndex] = (height > rowMaxHeight[currentRowIndex]) ? height : rowMaxHeight[currentRowIndex];
        currentRowOffset = offset;
      });
      this.applyRowHeights(rows, rowMaxHeight);
    },
    applyRowHeights(rows, rowMaxHeight){
      rows.forEach(function(row, index){
        var maxHeight = rowMaxHeight[index];
        row.forEach(function(item){
          // set height minus 20px to account for padding
          item.style.height = (maxHeight) + "px";
        });
      });
    }
  },
  mounted() {
    this.setRowHeights();
    window.addEventListener("resize", this.setRowHeights());
  },
  filters: {
    removeHTML: function (val) {
      let regex = /(<([^>]+)>)/ig;
      val = val.replace(regex, "");
      return val.replace(/(&#(\d+);)/g, function(match, capture, charCode) {
        return String.fromCharCode(charCode);
      });
    },
  },
}
</script>
