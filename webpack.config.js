module.exports= {
	entry: './src/app.js',
	output: {
		filename: 'bundle.js',
		path:.resolve(__dirname, 'public')
	},
	watch: true,
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /mode_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-1']
				}
			}
		]
	}
}