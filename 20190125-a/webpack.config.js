var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: "./src/js/index.js",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['react']
                    }
                }
            }
        ]
    },
    output: {
        path: __dirname,
        filename: './src/bundle.js'
    }
};
