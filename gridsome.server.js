const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

module.exports = (api) => {
  api.chainWebpack((config, { isServer }) => {
    config.plugin('vuetify-loader').use(VuetifyLoaderPlugin);
  });
}
