const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: './src/client/index.js',
    module: {
        // rules array contains all loader, each loader specifies what types of file  he runs
        rules: [{
            test: '/\.js$/',
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    }
};