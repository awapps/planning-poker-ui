const path    = require('path');
const webpack = require('webpack');

const constants = require('./webpack-constants');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

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
            test: /\.css$/,
            exclude: /node_modules/,
            loaders: ['style', 'css', 'postcss']
        }, {
            test: /\.ejs$/,
            loader: 'ejs',
            query: {
                includePaths: [path.resolve(__dirname, 'src/templates/')]
            }
        }]
    },

    plugins: [
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
        }),

        new SWPrecacheWebpackPlugin({
            cacheId: 'planning-poker-cache',
            filename: constants.SERVICE_WORKER_FILENAME
        })
    ]
};
