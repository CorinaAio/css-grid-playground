const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	module: {
		rules: [{
            test: /\.vue$/,
            exclude: /node_modules/,
            loader: 'vue-loader'
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
	            loader: 'babel-loader'
            }
        }, {
	        test: /\.scss$/,
	        use: [
		        'vue-style-loader',
		        'css-loader',
		        {
		            loader: 'sass-loader',
	                options: {
		              sourceMap: true
		            },
		        },
	        ],
	    }]
	},
	plugins: [
		new VueLoaderPlugin()
	]
};

