const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const RemoveWebpackPlugin = require('remove-webpack-plugin');

const pixi = path.join(__dirname, 'vendor/pixi.js');
const assets = path.join(__dirname, 'assets/');


/**
 * Webpack V2 설정
 * https://webpack.js.org/configuration/
 */
module.exports = {

    /**
     * https://webpack.js.org/concepts/entry-points/
     * https://webpack.js.org/concepts/entry-points/#separate-app-and-vendor-entries
     */
    entry: {
        app: [
            'babel-polyfill',
            path.resolve(__dirname, 'src/index.js')
        ],

        vendor: ['pixi']
    },

    output: {

        pathinfo: true,

        path: path.resolve(__dirname, 'dist'),

        filename: 'bundle.js',

        publicPath: '/assets/',
    },

    /**
     * https://webpack.js.org/guides/migrating/
     * module.loaders is now module.rules
     */
    module: {

        rules: [
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],

                /**
                 * 패키지 폴더 제외
                 */
                exclude: [
                    /node_modules/,
                    //path.resolve(__dirname, 'app/demo-files')
                ],

                use: 'babel-loader',
            },
            { test: /pixi\.js/, use: ['expose-loader?PIXI'] }
        ],
    },

    resolve: {

        modules: [
            'node_modules',
        ],

        extensions: ['.js', '.json', '.jsx', '.css'],

        alias: {
            pixi: pixi,
            assets: assets
        },
    },

    context: __dirname, // string (absolute path!)
    // the home directory for webpack
    // the entry and module.rules.loader option
    //   is resolved relative to this directory

    target: 'web', // enum
    // the environment in which the bundle should run
    // changes chunk loading behavior and available modules

    plugins: [

        new RemoveWebpackPlugin('dist'),

        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor'/* chunkName= */, filename: 'vendor.bundle.js'/* filename= */}),

        new CopyWebpackPlugin([{
                from: 'src/index.html',
                to: path.resolve(__dirname, 'dist/')
            }],
            {
                ignore: [ '*.md']
            }),

        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            output: {
                comments: false
            },
            compress: {
                warnings: false
            }
        }),

    ],

};
