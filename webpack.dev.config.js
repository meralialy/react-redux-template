const { merge } = require("webpack-merge");
const production = require("./webpack.config");
const path = require("path");

module.exports = merge(production, {
	mode: "development",

	devServer: {
		compress: true,
		hot: true,
		open: true,
		static: {
			directory: path.join(__dirname, "public"),
		},
	},
});
