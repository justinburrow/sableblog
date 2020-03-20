module.exports = {
  siteName: 'S\'able Labs',
  siteDescription: 'The S\'able Labs Blog',

  templates: {
    WordPressCategory: '/category/:slug', // adds route for "category" post type (Optional)
    WordPressPost: [
      {
        path: '/:year/:month/:day/:slug',
        component: './src/templates/WordPressPost.vue' //adds route for "post" post type (Optional)
      }
    ]
  },

  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'http://justinburrow.com/sb-blog/', // required
        typeName: 'WordPress', // GraphQL schema name (Optional)
        customEndpoints: [
          {
            typeName: "TopCategories",
            route: '/wp/v2/categories',
          }
        ]
      }
    }
  ]
}
