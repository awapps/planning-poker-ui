const path    = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),

    entry: {
        index: './scripts/index'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['babel']
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            loaders: ['style', 'css']
        }]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './templates/index.ejs',
            inject: false,
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true
            }
        }),

        new CopyWebpackPlugin([{
            from: 'manifest.json',
        }, {
            from: 'img',
            to: 'img'
        }]),

        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
};
