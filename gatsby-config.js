require('dotenv').config();

module.exports = {
	siteMetadata: {
		title: 'Vakantiehuis Rocas del Mar Tenerife',
		author: 'Xander de Graaf en Caro Landwaart',
		imageUrl: 'src/assets/rocasfotoapp.jpg',
		description: 'Wij verhuren ons vakantiehuis / appartement in Costa del Silencio, Tenerife',
		keywords: `Tenerife, Rocas del Mar, Costa del Silencio, appartement, vakantie, vakantiehuis, zeezicht, Rocas, Spanje, strand, zwembad, kinderbad, verhuur, huren, huur`,
		siteUrl: `https://www.rocastenerife.nl`
	},
	plugins: [
		{
			resolve: `gatsby-source-faunadb`,
			options: {
				secret: process.env.YOUR_FAUNADB_SECRET,
				index: `allSignatures`,
				type: "Signatures",
			},
		},
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets`
			}
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Makefolio',
				short_name: 'Makefolio',
				start_url: '/',
				background_color: '#2980b9',
				theme_color: '#2980b9',
				display: 'standalone',
				icon: 'src/assets/tenerife-icon-web.png',
				orientation: 'portrait'
			}
		},
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-177466334-1',
				anonymize: true
			}
		},
		`gatsby-plugin-sitemap`
	]
};