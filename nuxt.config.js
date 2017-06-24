module.exports = {
  build: {
    babel: {
      presets: ['es2015', 'stage-0'],
      plugins: ["transform-runtime"]
    },
    extend (config, { isClient }) {
      // Extend only webpack config for client-bundle
      
      if (isClient) {
        config.devtool = 'eval-source-map'
      }
    },
    vendor: ['graphql-tag', 'apollo-client']
  },
  
  env: {
    baseUrl: 'http://localhost:3000'
  },

  loading: {
    color: 'purple'
  },
  plugins: [
    { src: '~plugins/apollo' }
  ]
};
