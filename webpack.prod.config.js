const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const constants = require('./webpack-constants');

const webpackConfig = require('./webpack.config.js');
const { plugins } = webpackConfig;
const { loaders } = webpackConfig.module;

module.exports = Object.assign({}, webpackConfig, {
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['babel']
        }].concat(loaders)
    },

    plugins: plugins.concat(
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),

        new HtmlWebpackPlugin({
            template: './templates/index.ejs',
            inject: false,
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true
            },
            serviceWorker: `/${constants.SERVICE_WORKER_FILENAME}`
        })
    )
});
