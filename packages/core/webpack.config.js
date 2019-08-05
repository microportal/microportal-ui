const path = require('path')

module.exports = {
    entry: {
        index: './src/index.js',
        store: './src/store.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'release'),
        libraryTarget: 'amd',
        library: 'coreUI',
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use: ['babel-loader?cacheDirectory'],
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            publicPath: '/microportal/',
                        },
                    },
                ],
            },
        ],
    },
    devtool: 'eval-source-map',
}
