var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: ['webpack/hot/dev-server', './src/app.js'],
    output: {
        path: __dirname + '/dist',
        filename: 'js/[name].bundle.js'
    },
    devServer: {
        contentBase: "./dist",
        historyApiFallback: true,
        inline: true
            // hot: true
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ["es2015"]
                }
            },
            exclude: path.resolve(__dirname, 'node_modules'),
            include: __dirname + '/src/'
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                { loader: 'css-loader', options: { importLoaders: 1 } }, {
                    loader: 'postcss-loader',
                    options: {
                        plugins: (loader) => [
                            require('autoprefixer')()
                        ]
                    }
                }
            ]
        }, {
            test: /\.less$/,
            use: [
                'style-loader',
                { loader: 'css-loader', options: { importLoaders: 1 } }, {
                    loader: 'postcss-loader',
                    options: {
                        plugins: (loader) => [
                            require('autoprefixer')()
                        ]
                    }
                },
                'less-loader'
            ]

        }, {
            test: /\.html$/,
            use: [
                'html-loader'
            ]
        }, {
            test: /\.(.png|jpg|gif|svg)$/i,
            use: [
                'url-loader?limit=20000',
                'image-webpack-loader'
            ]
        }]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            inject: 'body',
            title: 'wabpack demo',
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}
