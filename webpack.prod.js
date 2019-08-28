const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	mode: 'production',
	devtool: 'cheap-module-source-map',
	entry: {
		main: './src/index.js'
	},
	
	module: {
		rules: [{ 
			test: /\.js$/, 
			exclude: /node_modules/, 
			loader: 'babel-loader',
		}, {
			test: /\.(jpg|png|gif)$/,
			use: {
				loader: 'url-loader',
				options: {
					name: '[name]_[hash].[ext]',
					outputPath: 'images/',
					limit: 10240
				}
			} 
		}, {
			test: /\.(eot|ttf|svg)$/,
			use: {
				loader: 'file-loader'
			} 
		}, {
			test: /\.scss$/,
			use: [
				'style-loader', 
				{
					loader: 'css-loader',
					options: {
						importLoaders: 2
					}
				},
				'sass-loader',
				
			]
		}, {
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader',
			]
		}]
	},
	plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
			template: 'src/index.html'
		}),
		
	],
	
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	}
}
