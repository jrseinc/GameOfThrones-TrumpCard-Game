import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import webpack from "webpack";
import config from "../../webpack.dev.js";

import { createServer, attachToServerIO, startListening } from "./server.mjs";

const attachWebpack = function (app) {
	const compiler = webpack(config);
	app.use(
		webpackDevMiddleware(compiler, {
			publicPath: config.output.publicPath,
		})
	);
	app.use(webpackHotMiddleware(compiler));
};
const startSequence = function () {
	// eslint-disable-next-line no-unused-vars
	let { app, server, io } = createServer(false);
	attachWebpack(app);
	attachToServerIO(io);
	startListening(server);
};

startSequence();