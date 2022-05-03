module.exports = {
	content: ['index.html', './src/**/*.jsx'],
	theme: {
		extend: {},
		screens: {
			xsm: { min: '300px' },
			// => @media (min-width: 340px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		},
	},
	plugins: [],
};
