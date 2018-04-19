var webpack = require("webpack");
var path = require('path');

module.exports = {
	entry: {
		app: "./src/app.js"
	},
	output: {
		filename:"bundle.js",
        sourceMapFilename: "bundle.map"
	},
    devtool: '#source-map',	
    mode: 'development',
	// plugins: [
 //    	new webpack.optimize.UglifyJsPlugin({minimize: true}),
	// ],	
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query:{
					presets:['react', 'es2015']
				}
			}
		]
	}
}