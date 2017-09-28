var webpack = require("webpack");
var path = require('path');

module.exports =  {
   module: {
      loaders: [
         {
            test: /\.js$/,
            include: path.join(__dirname, 'source/js'),
            loaders: ['babel-loader']
         }
      ]
   },
   plugins: [
      new webpack.ProvidePlugin({
         $: 'jquery',
         jQuery: 'jquery',
         'window.jQuery': 'jquery',
         Popper: ['popper.js', 'default'],
         Util: 'exports-loader?Util!bootstrap/js/dist/util',
         Dropdown: 'exports-loader?Dropdown!bootstrap/js/dist/dropdown',
         Collapse: 'exports-loader?Collapse!bootstrap/js/dist/colapse',
         Carousel: 'exports-loader?Carousel!bootstrap/js/dist/carousel',
      }),
      new webpack.optimize.UglifyJsPlugin()
   ],
   entry: {
      app: ["./source/js/app"]
   },
   output: {
      path: path.join(__dirname, "/static/js"),
      publicPath: "/",
      filename: "[name].js"
   }
};
