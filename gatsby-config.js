const path = require("path");

module.exports = {
  siteMetadata: {
    title: `Rocastenerife`,
    siteUrl: `https://www.rocastenerife.nl`,
    author: `Xander de Graaf en Caro Landwaart`,
    // imageUrl: `/images/background-wide.jpg`,
    description: `Twee prachtige appartementen op Tenerife te huur.`,
    keywords: `Tenerife, appartement, vakantie, Rocas del Mar, Costa del Silencio`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: path.resolve(__dirname, "src/data"), // <--- Only JSON data here!
      },
    },
    `gatsby-transformer-json`
  ]
};