module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		container: {
			padding: {
				DEFAULT: '30px',
				lg: '0',
			},
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1440px',
		},
		extend: {
			colors: {
				primary: '#222222',
				secondary: '#F5E6E0',
				primaryHover: 'rgb(126 34 206 / 0.8)',
			},
			backgroundImage: {
				signIn:
					"url('./assets/images/isometric-view-san-francisco-s-bridge.jpg')",
				signUp:
					"url('./assets/images/isometric-view-san-francisco-s-ferry-building.jpg')",
			},
		},
	},
	plugins: [],
};
