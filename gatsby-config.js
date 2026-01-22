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
    description: `AI-powered marketing automation that feels like an in-house team.`,
    author: `@agencyai`,
    siteUrl: `https://www.agencyai.app`,
    image: `/laptop-mobile-screengrab.png`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              quality: 90,
              linkImagesToOriginal: false,
              backgroundColor: 'transparent',
              disableBgImageOnAlpha: true,
            },
          },
        ],
      },
    },
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
        excludes: [`/using-dsg`, `/using-ssr`, `/using-typescript`, `/page-2`],
        siteUrl:
          process.env.NODE_ENV === "development"
            ? "http://localhost:9000"
            : "https://www.agencyai.app",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.agencyai.app",
        sitemap: "https://www.agencyai.app/sitemap-index.xml",
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
