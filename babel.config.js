module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					browsers: ['last 2 versions', 'ie >=11'],
				},
			},
		],
		'@babel/preset-react',
	],
	plugins: [
		'@babel/plugin-proposal-object-rest-spread',
		'@babel/plugin-proposal-class-properties',
		'@babel/plugin-transform-object-assign',
	],
};
