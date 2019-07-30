    const path = require("path");
    const CleanWebpackPlugin = require("clean-webpack-plugin");
    const CopyWebpackPlugin = require("copy-webpack-plugin");
    const MiniCssExtractPlugin = require("mini-css-extract-plugin");

    module.exports = {
        mode: "development",
        entry: "./src/index.tsx",
        output: {
            filename: "[name].js",
            path: __dirname + "/dist"
        },

        devtool: "source-map",

        resolve: {
            extensions: [".ts", ".tsx", ".js", ".json"]
        },

        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: "ts-loader",
                },
                {
                    test: /\.less$/,
                    use: [
                        {
                            loader: "style-loader",
                        },
                        {
                            loader: "css-loader",
                        },
                        {
                            loader: "less-loader",
                            options: {
                                javascriptEnabled: true
                            }
                        },
                    ]
                },
                {
                    test: /\.woff$/,
                    use: {
                        loader: "url-loader",
                        options: {
                            limit: 50000,
                        },
                    },
                },
                {
                    test: /\.css(\?|$)/,
                    loader: "style-loader!css-loader"
                },
                {
                    test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                    loader: 'file-loader'
                },
            ]
        },

        plugins: [
            new CleanWebpackPlugin(["dist"]),
            new CopyWebpackPlugin(["static/"]),
            new MiniCssExtractPlugin({
                filename: "[name].css",
                chunkFilename: "[id].css"
            })
        ],

        devServer: {
            contentBase: path.join(__dirname, "dist"),
            compress: true,
            port: 80,
            inline: true,
            open: true,
            writeToDisk: true
        }
    };