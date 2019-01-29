var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: "./src/js/root.js",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['react','es2015'],
                        plugins: ['react-html-attrs']
                    }
                }
            },{
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }
        ]
    },
    output: {
        path: __dirname,
        filename: './src/bundle.js'
    }
};
