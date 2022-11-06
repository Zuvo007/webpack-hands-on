    // this is the actual file webpack configures itself

    /**
     * webpack provided some placeholder/variables to name the files accordingly
     * [name]
     * [hash]
     * [chunkhash]
     * [id]
     * [query]
     * [contenthash]
     */
const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin'); // helps to create our html file dynamically (no need to write the script in the script tag)
const HTMLWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');


module.exports = {
    /**
     * (can be two modes : 1. development 2. production) 
      1. development the build is verbose ( can look into the main.js file by running command npm run build)
      2. most optimized build 
    */
    mode: "development",
    /**
     *  entry is the property to tell the webpack what is the entry point of the application.
     *  by default it takes the src -> index.js
     * entry can be an array for the different entires
     * it can be an object with different keynames for the entrypoints
     * entry: './src/index.js', => when we have single entry 
     */
    entry: {
        index: './src/index.js',
      
    },
    /**
     * output is the where you 
     * want your build to produce and
     *  what will be the build name
     * publicPath: let's you have multiple files in build 
     *  what genetally happens the first loaded file contains
     * the name of the other files , so webpack knows that there exist
     * other files which I need to load but 
     * it doesn't know where the location of those files,
     *  publicPath => tells them where the location of those files
     */
   output: {
       path: path.resolve(__dirname,'build'),
      // filename: 'js/[name].build.js'
      filename: 'js/main.[chunkhash].js',
      publicPath: '/assets/', //https://server.com/assets/js/1.js'
      /** the build will be assigned to the format we want like on a var name 
       * "amd" with defined syntax
       * if you need everything (amd,var,commonjs) => use "umd" (universal module definition)
       * what umd does => 
       * check for common js
       * else if check for amd
       * else check for var 
       */
    //   libraryTarget: 'umd', // => amd,var
    //   library: 'mylibrary'
   },
   /**
    * devServer => helped to use webpack-dev-server on a particular port 
    * contentBase/static => file that you have created (not by webpack) 
    * but still you want to serve
    * writeToDisk => it helps to store the build file in disk
    * (as default webpack dev server build it and store it in ram as it's more faster)
    * but sometimes we need to check what's there in the build file via dev server
    * so writeToDisk will be the go to way.
    * hot reloading => without loading the entire page it does changes where it actually change needed
    */
   devServer: {
       port: 1234,
       hot: true,
       static: {
        directory: path.join(__dirname, "dist"),
      },
      devMiddleware: {
       // writeToDisk: true,
      // writeToDisk: false
      },
   },
   plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      title: "Hello From Webpack",
      template: './dist/template.html',
      filename: '../dist/index.html',
      minify: {
        collapseWhitespace: true
        },
      alwaysWriteToDisk: true
        }),
    new HTMLWebpackHarddiskPlugin()
  ]

}