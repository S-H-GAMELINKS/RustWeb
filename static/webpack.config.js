const VueLoaderPlugin = require('vue-loader/lib/plugin')
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './src/index.js', 
    output: { 
      filename: 'index.js',     
      path: `${__dirname}/webpack/` 
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: 'vue-loader'
        },        
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    },
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new Dotenv()
    ]
  };