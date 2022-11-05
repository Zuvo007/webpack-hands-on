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
      filename: 'js/main.js',
      publicPath: '/assets/ ', //https://server.com/assets/js/1.js'
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
    * contentBase => file that you have created (not by webpack) 
    * but still you want to serve
    */
   devServer: {
       port: 1234,
       static: {
        directory: path.join(__dirname, "dist")
      },
   }

}