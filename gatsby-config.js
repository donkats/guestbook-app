require('dotenv').config();

module.exports = {
	siteMetadata: {
		title: 'Rocas Tenerife',
		author: 'Don Kats',
		imageUrl: 'https://i.imgur.com/Vz81GEl.png',
		description: 'Appartement Rocas in Tenerife huren.',
		keywords: `Tenerife, appartement, rocas, huren, huur`,
		siteUrl: `https://www.rocastenerife.nl`
	},
	plugins: [
		{
			resolve: `gatsby-source-faunadb`,
			options: {
				// The secret for the key you're using to connect to your Fauna database.
				// You can generate on of these in the "Security" tab of your Fauna Console.
				secret: process.env.YOUR_FAUNADB_SECRET,
				// The name of the index you want to query
				// You can create an index in the "Indexes" tab of your Fauna Console.
				index: `allSignatures`,
				// This is the name under which your data will appear in Gatsby GraphQL queries
				// The following will create queries called `allBird` and `bird`.
				type: "Signatures",
				// If you need to limit the number of documents returned, you can specify a 
				// maximum number to read.
				// size: 100
			},
		},
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
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
				trackingId: 'UA-XXXXXXXX-X',
				// Setting this parameter is optional (requried for some countries such as Germany)
				anonymize: true
			}
		},
		`gatsby-plugin-sitemap`
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	]
};