const path = require('path')

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/sass/_variables.scss'),
      ],
    })
}

module.exports = {
  siteName: "S'able Labs",
  siteDescription: "A community for Coupledom",
  siteUrl: process.env.GRIDSOME_BASE_URL,
  icon: './src/favicon.png',

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
    ]
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
        baseUrl: process.env.WORDPRESS_URL, // required
        typeName: 'WordPress', // GraphQL schema name (Optional),
        customEndpoints: [
          {
            typeName: "CategoryImages",
            route: "/acf/v3/categories/",
            normalize: true,
          }
        ]
      },
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-175916340-1'
      }
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
