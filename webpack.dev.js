const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");
const path = require("path");
const postcssPresetEnv = require("postcss-preset-env");

module.exports = merge(common, {
	mode: "development",
	entry: {
		main: ["./src/client/js/main.js", "webpack-hot-middleware/client"]
	},
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "./dist")
	},
	devtool: "inline-source-map",
	devServer: {
		hot: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
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