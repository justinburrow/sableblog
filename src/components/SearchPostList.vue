<template>
  <Layout>
    <div class="post-list-container">
      <ul class="post-list">
        <li v-for="(post, index) in posts" :key="post.id">
          <SearchPost :post="post" :index="index"/>
        </li>
      </ul>
      <!--<Pager :info="$page.wordPressCategory.belongsTo.pageInfo"/>-->
    </div>
  </Layout>
</template>

<script>
import { Pager } from 'gridsome'
import SearchPost from '~/components/SearchPost.vue'

export default {
  name: 'SearchPostList',
  components: {
    Pager,
    SearchPost
  },
  props: {
    'posts': {
      //required: true,
    }
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
  }
}
</script>
