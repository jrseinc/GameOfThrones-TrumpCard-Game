/* eslint-disable no-undef */
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const postcssPresetEnv = require("postcss-preset-env");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const JsonMinimizerPlugin = require("json-minimizer-webpack-plugin");

module.exports = merge(common, {
	mode: "production",
	entry: {
		main: "./src/client/js/main.js"
	},
	output: {
		filename: "[name].[contenthash].bundle.js",
		path: path.resolve(__dirname, "./dist")
	},
	plugins: [
		new MiniCssExtractPlugin(
			{
				filename: "[name].[contenthash].css",
			}
		),
		new CssMinimizerPlugin(),
		new FaviconsWebpackPlugin({
			logo: path.resolve(__dirname, "game.svg"),
			favicons: {
				appName: "GOT Trump Cards",
				appDescription: "Game Of Thrones Trump Card Game",
				appShortName: "GOT-T",
				developerName: "jrseinc",
				developerURL: null, // prevent retrieving from the nearest package.json
				background: "#f8fdff",
				theme_color: "#1a237e",
				lang: "en-GB",
				start_url: "/",
				version: "0.3",
				scope: "/",
				orientation: "natural",
			}
		}),
	],
	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif|webp)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[contenthash].[ext]",
							outputPath: "images"
						},
					}
				]
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							importLoaders: 1,
						}
					},
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
							name: "[name].[contenthash].[ext]",
						},
					},
				],
			},
		]
	},
	performance: {
		hints: false
	},
	optimization: {
		minimize: true,
		splitChunks: {
			chunks: "all",
			cacheGroups: {
				vendor: {
					test: /node_modules/,
					chunks: "initial",
					name: "vendor",
					priority: 10,
					enforce: true
				},
			}
		},
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					output: {
						comments: false,
					},
				},
			}),
			new JsonMinimizerPlugin(),
		],
	}
});