import { resolve } from 'path';
import webpack from 'webpack';

module.exports = {
  build: {
    babel: {
      presets: ['es2015', 'stage-0'],
      plugins: ["transform-runtime"]
    },
    extend (config, { isClient }) {
      // Extend only webpack config for client-bundle
      
      // if (isClient) {
      //   config.devtool = 'eval-source-map'
      // }

      config.resolve.alias['~src'] = resolve(__dirname, 'src');
      config.resolve.alias['~client'] = resolve(__dirname, 'src', 'client');
      config.resolve.alias['~components'] = resolve(__dirname, 'src', 'client', 'components');
    },
    plugins: [
      new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery'
        //'_': 'lodash'
        // ...etc.
      })
    ],
    vendor: ['graphql-tag', 'apollo-client', 'jquery']
  },
  
  env: {
    baseUrl: 'http://localhost:3000'
  },

  loading: {
    color: 'purple'
  },
  plugins: [
    { src: '~plugins/bulma' },
    { src: '~plugins/font-awesome' },
    { src: '~plugins/apollo' }
  ]
};
