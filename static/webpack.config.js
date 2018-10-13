module.exports = {
    entry: './src/index.js', 
    output: { 
      filename: 'index.js',     
      path: `${__dirname}/webpack/` 
    },
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js'
        }
    },
  };