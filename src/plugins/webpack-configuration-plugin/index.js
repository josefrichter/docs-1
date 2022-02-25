module.exports = function (context, options) {
	return {
		name: 'docusaurus-webpack-configuration-plugin',
		configureWebpack(config, isServer, utils) {
			return {
				module: {
					rules: [
						{
							test: /\.(png|jpe?g|gif|woff2?|otf|svg)$/i,
							loader: 'file-loader',
							options: {
								name: '[path][name].[ext]',
							},
						},
						{
							test: /\.m?js$/,
							resolve: {
								fullySpecified: false,
							},
						},
					],
				},
			}
		},
	}
}
