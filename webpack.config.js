// @ts-nocheck
// import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer"
const path = require("path")
const MiniCSSExtractPlugin = require("mini-css-extract-plugin")
const isProduction = process.env.NODE_ENV === "production"

/** @type {import("webpack").Configuration} */
const config = {
    mode: isProduction ? "production" : "development",
    entry: {
        main: "./src/index.tsx",
    },
    target: 'web',
    output: {
        path: path.resolve(__dirname, "public", "assets"),
        filename: "[name].js",
        publicPath: "/assets/"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: { compilerOptions: { module: "esnext", moduleResolution: "node" } },
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
    },
    devtool: "source-map",
    plugins: [
        new MiniCSSExtractPlugin()
    ],
    devServer: {
        publicPath: "/assets/",
        contentBase: "public",
    },
    optimization: {
    },
}

module.exports = config