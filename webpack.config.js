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
   externals: {
      jquery: 'jQuery'
   },
   plugins: [
      new webpack.ProvidePlugin({
         Popper: ['popper.js', 'default'],
         Util: 'exports-loader?Util!bootstrap/js/dist/util',
         Dropdown: 'exports-loader?Dropdown!bootstrap/js/dist/dropdown',
         Collapse: 'exports-loader?Collapse!bootstrap/js/dist/collapse',
         Carousel: 'exports-loader?Carousel!bootstrap/js/dist/carousel',
         Tab: 'exports-loader?Tab!bootstrap/js/dist/tab'
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
