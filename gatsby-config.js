/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Agency AI - AI-Powered Marketing Automation`,
    description: `Transform your marketing with Agency AI. AI-powered marketing automation that feels like an in-house team. Run multi-channel ads and automated email campaigns.`,
    author: `@agencyai`,
    siteUrl: `https://agencyai.app`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Agency AI - Marketing Automation`,
        short_name: `Agency AI`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/agency-favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        excludes: [`/using-dsg`, `/using-ssr`, `/using-typescript`, `/page-2`],
        resolveSiteUrl: () => `https://agencyai.app`,
        serialize: ({ path }) => ({
          url: path,
          changefreq: `weekly`,
          priority: path === `/` ? 1.0 : 0.7,
        }),
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://agencyai.app",
        sitemap: "https://agencyai.app/sitemap.xml",
        policy: [
          {
            userAgent: "*",
            allow: "/",
            disallow: [
              "/using-dsg",
              "/using-ssr",
              "/using-typescript",
              "/page-2",
            ],
          },
        ],
      },
    },
  ],
}
