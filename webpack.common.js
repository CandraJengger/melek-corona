const HTMLWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }  
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader',
                options: {
                  limit: 8192,
                  name:'[name].[ext]',
                  outputPath:'assets'
                }
            }
        ]
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        })
    ]
}