/* eslint-disable no-undef */
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// Try the environment variable, otherwise use root
const ASSET_PATH = process.env.ASSET_PATH || "/";
module.exports = {
	/* eslint-enable no-undef */
	entry: {
		main: "./src/client/js/main.js"
	},
	output: {
		publicPath: ASSET_PATH,
	},
	plugins: [
		new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
		new HtmlWebpackPlugin({
			template: "./src/client/html/index.html",
			chunks: ["main"]
		}),
		new webpack.DefinePlugin({
			"process.env.ASSET_PATH": JSON.stringify(ASSET_PATH),
		}),
		new WorkboxPlugin.GenerateSW({
			// these options encourage the ServiceWorkers to get in there fast
			// and not allow any straggling "old" SWs to hang around
			clientsClaim: true,
			skipWaiting: true,
		})
	],
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.woff(2)?(\?[a-z0-9]+)?$/,
				use: [
					{
						loader: "url-loader",
						options: {
							limit: 10000,
							mimetype: "application/font-woff"
						},
					},
				]
			},
			{
				test: /\.(ttf|eot|svg)(\?[a-z0-9]+)?$/,
				use: [
					{
						loader: "file-loader",
						options: {
							outputPath: "fonts"
						},
					}
				]
			},
			{
				test: /\.mp(3|4|)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							outputPath: "assets"
						},
					}
				]
			},
		]
	}
};