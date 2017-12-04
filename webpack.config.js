

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
		 historyApiFallback: true,
		inline:true,
		port:3000,
		contentBase:__dirname + '/dist'
	},
	module: {
		rules: [
			   {
		        test: /\.css$/,
			       use: [
				         {
				           loader: "style-loader"
				         },
				         {
				           loader: "css-loader",
				           options: {
				             modules: true
				           }
				         }
			        ]
		      },
			{
				test:  /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: ["babel-loader"],
				
			},
		    {
		      test: /\.js$/,
		      exclude: /node_modules/,
		      loaders: ['babel-loader', 'eslint-loader']
		    }

		]
	}

}