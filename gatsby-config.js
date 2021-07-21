/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Ashway`,
    author: {
      name: `Ashway`,
      summary: `Ashway Integrated Services`,
    },
    description: `Accelerate your learning process`,
    siteUrl: `https://ashway.netlify.app`,
  },
  flags: {
    DEV_SSR: true,
    PRESERVE_WEBPACK_CACHE: true,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    `gatsby-transformer-json`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ashway Integrated Services`,
        short_name: `Ashway`,
        start_url: `/`,
        background_color: `#E5F5FE`,
        theme_color: `#1F3946`,
        display: `minimal-ui`,
        icon: `Ashway`, // This path is relative to the root of the site.
      },
    },
],
}
