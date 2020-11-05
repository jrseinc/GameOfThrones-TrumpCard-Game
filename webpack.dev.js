/* eslint-disable no-undef */
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");
const path = require("path");
const postcssPresetEnv = require("postcss-preset-env");
// const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
module.exports = merge(common, {
	mode: "development",
	entry: {
		main: ["webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000", "./src/main.js"]
	},
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "./dist")
	},
	optimization: {usedExports: true},
	devtool: "source-map",
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		// new ScriptExtHtmlWebpackPlugin({
		// 	async: ["google-maps", "g-recaptcha", "vendor","googletagmanager", "main"],
		// 	defer: ["google-maps", "g-recaptcha"],
		// 	prefetch: ["googletagmanager", "google-maps", "g-recaptcha"],
		// }),
	],
	module: {
		rules: [
			{
				test: /\.(png|svg|jpg|gif|webp)$/,
				use: [
					{
						loader:"file-loader",
						options: {
							name: "[name].[ext]",
							outputPath: "images"
						},
					}
				]
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					"style-loader",
					"css-loader",
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								ident: "postcss",
								plugins: [
									[
										postcssPresetEnv({
											autoprefixer: {
												grid: "autoplace"
											},
										})
									],
								],
							},
						},
					},
					{
						loader: "sass-loader",
						options: {
							sassOptions: {
								includePaths: ["./node_modules"],
							},
						}
					},
				],
			},
			{
				test: /\.json/i,
				type: "javascript/auto",
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
						},
					},
				],
			},
		]
	}
});