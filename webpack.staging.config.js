const { merge } = require("webpack-merge");
const production = require("./webpack.config");

module.exports = merge(production, {
	mode: "development",
});
