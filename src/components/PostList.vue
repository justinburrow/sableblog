<template>
  <Layout>
    <div class="post-list-container">
      <ul class="post-list">
        <li v-for="({ node }, index) in posts" :key="node.id">
          <MainPost :post="{ node }" :index="index"/>
        </li>
      </ul>
      <!--<Pager :info="$page.wordPressCategory.belongsTo.pageInfo"/>-->
    </div>
  </Layout>
</template>

<script>
import { Pager } from 'gridsome'
import MainPost from '~/components/MainPost.vue'

export default {
  name: 'PostList',
  components: {
    Pager,
    MainPost
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
  }
}
</script>


// use JavaScript to ensure that any "item__content" and "item__features" sections on a given row have the same height

function

function

// apply a fixed height to an array of DOM elements
function

// page init


// page resize
window.onresize = function(event) {
  // set heights based on new page size
  setRowHeights();
};
