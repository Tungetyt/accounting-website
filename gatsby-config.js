// // Initialize dotenv
// require('dotenv').config({
//   path: '.env', // or '.env'
// });

// // And then you can use the config in gatsby-config.js
// const config = require('gatsby-plugin-config');

module.exports = {
  siteMetadata: {
    title: 'Vavicom Piaseczno',
    description: 'Biuro Rachunkowe VAVICOM Piaseczno. Księgowość, Kadry i Płace, Podatki, Finanse, Biznes',
    author: '@tungetyt <m0kotlicki@gmail.com>',
    siteUrl: 'https://vavicom.pl',
  },
  plugins: [
    // 'gatsby-plugin-preact',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://vavicom.pl',
        sitemap: 'https://vavicom.pl/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://vavicom.pl',
      },
    },
    'gatsby-plugin-fontawesome-css',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Vavicom Biuro Rachunkowe',
        short_name: 'Vavicom Biuro',
        start_url: '/',
        background_color: '#5c6bc0',
        theme_color: '#5c6bc0',
        display: 'minimal-ui',
        icon: 'src/images/logo.svg', // This path is relative to the root of the site.
        icon_options: {
          purpose: 'any maskable',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-scroll-indicator',
      options: {
        // Configure color of the scroll indicator
        color: '#3f51b5',
        // Height of the scroll indicator 3px
        height: '3px',
        // Configure paths where the scroll indicator will appear '/', '/en/', '/pl/
        paths: ['/**'],
        // Configure the z-index of the indicator element
        zIndex: '9999',
      },
    },
    'gatsby-plugin-material-ui',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/, // See below to configure properly
        },
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        // Add any options here
      },
    },
    {
      resolve: 'gatsby-plugin-intl',
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: ['pl'], // languages: ['pl', 'en'],
        // language file path
        defaultLanguage: 'pl',
      },
    },
    'gatsby-plugin-netlify-cms',
    // {
    //   resolve: 'gatsby-plugin-purgecss',
    //   options: {
    //     printRejected: true, // Print removed selectors and processed file names
    //     // develop: true, // Enable while using `gatsby develop`
    //     // tailwind: true, // Enable tailwindcss support
    //     // whitelist: ['whitelist'], // Don't remove this selector
    //     // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
    //     // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
    //   },
    // },
  ],
};
