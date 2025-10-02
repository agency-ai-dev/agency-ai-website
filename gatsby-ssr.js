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
    React.createElement("script", {
      key: "reddit-pixel",
      dangerouslySetInnerHTML: {
        __html: `!function(w,d){if(!w.rdt){var p=w.rdt=function(){p.sendEvent?p.sendEvent.apply(p,arguments):p.callQueue.push(arguments)};p.callQueue=[];var t=d.createElement("script");t.src="https://www.redditstatic.com/ads/pixel.js",t.async=!0;var s=d.getElementsByTagName("script")[0];s.parentNode.insertBefore(t,s)}}(window,document);rdt('init','a2_hroj72mv50pf');rdt('track', 'PageVisit');`,
      },
    }),
  ])
}
