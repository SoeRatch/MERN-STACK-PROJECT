
var webpack = require("webpack");

module.exports = {
	entry: {
        main: ['babel-polyfill',__dirname +'/src/app.js']
    },
	output: {
		path:__dirname + '/dist',
		filename:'app.js',
		publicPath:'/'
	},
	devServer:{
		inline:true,
		port:3000,
		contentBase:__dirname + '/dist'
	},
	module: {
		loaders: [
			{
				test:  /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: ["babel-loader"],
				
			}

		]
	}

}