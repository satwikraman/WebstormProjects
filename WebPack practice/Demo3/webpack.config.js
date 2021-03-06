module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js'
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
        ]
    }
};