var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var extractPlugin = new ExtractTextPlugin({
    filename: 'app.bundle.css'
});

module.exports = {
    entry: [
        './client/app/main.ts',
        './client/public/assets/scss/style.scss'
    ],
    output: {
        path: path.resolve(__dirname, 'client/built'),
        filename: 'app.bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: [
                        { loader: 'css-loader'},
                        { loader: 'sass-loader'}
                    ],
                    fallback: 'style-loader'
                })
            }
        ]
    },

    plugins: [
        extractPlugin
    ],

    resolve: {
        extensions: ['.js', '.ts', '.scss']
    }
}
