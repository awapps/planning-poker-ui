const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const constants = require('./webpack-constants');

const webpackConfig = require('./webpack.config.js');
const { plugins, entry } = webpackConfig;
const { loaders } = webpackConfig.module;

const { DEV_SERVER_PORT } = constants;
const DEV_SERVER_HOST = `http://localhost:${DEV_SERVER_PORT}`;

module.exports = Object.assign({}, webpackConfig, {
    entry: {
        index: [
            `webpack-dev-server/client?${DEV_SERVER_HOST}`,
            'webpack/hot/only-dev-server'
        ].concat(entry.index),
    },

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel']
        }].concat(loaders)
    },

    plugins: plugins.concat([
        new HtmlWebpackPlugin({
            template: './templates/index.ejs',
            inject: false,
            serviceWorker: `/${constants.SERVICE_WORKER_FILENAME}`
        }),

        new webpack.HotModuleReplacementPlugin()
    ]),

    devServer: {
        port: DEV_SERVER_PORT
    }
});
