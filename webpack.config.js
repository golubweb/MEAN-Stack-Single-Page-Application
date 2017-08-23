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
                        { loader: 'css-loader?url=false' },
                        { loader: 'sass-loader' }
                    ],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=images/[name].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
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
