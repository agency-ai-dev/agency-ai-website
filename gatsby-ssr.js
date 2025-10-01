/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

const React = require("react")

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: `en` })
  setHeadComponents([
    React.createElement("script", {
      key: "analytics",
      defer: true,
      "data-website-id": "68dd6400978afa4e3dbb5ef5",
      "data-domain": "agencyai.app",
      "data-allow-localhost": "true",
      src: "https://datafa.st/js/script.js",
    }),
  ])
}
