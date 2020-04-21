const path = require('path')

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/sass/styles.scss'),
      ],
    })
}

module.exports = {
  siteName: "S'able Labs",
  siteDescription: "The S'able Labs Blog",

  templates: {
    WordPressPage: [
      {
        path: '/pages/:slug',
        component: './src/templates/WordPressPage.vue'
      }
    ],
    WordPressCategory: '/category/:slug', // adds route for "category" post type (Optional)
    WordPressPost: [
      {
        path: '/:year/:month/:day/:slug',
        component: './src/templates/WordPressPost.vue', //adds route for "post" post type (Optional)
      },
    ],
  },

  configureWebpack: {
    node: {
      fs: "empty"
    }
  },

  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'https://justinburrow.com/sb-blog/', // required
        typeName: 'WordPress', // GraphQL schema name (Optional)
      },
    }
  ],
  chainWebpack(config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
  },
}
