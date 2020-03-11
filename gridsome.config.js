module.exports = {
  siteName: 'S\'able Labs',
  siteDescription: 'The S\'able Labs Blog',

  templates: {
    WordPressCategory: '/category/:slug', // adds route for "category" post type (Optional)
    WordPressPost: '/:year/:month/:day/:slug', //adds route for "post" post type (Optional)
    WordPressPostTag: '/tag/:slug' // adds route for "post_tag" post type (Optional)
  },

  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'http://sableblog.local', // required
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
