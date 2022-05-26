// CommonJS
// require() // импортировать
// module.exports // экспортировать
const path = require('path');
// const { mainModule } = require('process');

const HtmlWebpackplugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssestsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,' build'),
        filename: './js/main.bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: false,
        port: 9000,
        open: true,
        overlay: true
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // 'style-loader', // <style>
                    'css-loader',    // css to js
                    'postcss-loader',
                    'sass-loader' // sass, scss to css
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[hash].[ext]',
                    outputPath: 'images'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackplugin({template: './src/template.html'}),
        new MiniCssExtractPlugin({filename: './css/style.min.css'}),
        new OptimizeCssAssestsWebpackPlugin()
    ]
};