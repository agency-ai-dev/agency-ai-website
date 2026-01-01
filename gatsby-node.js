/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

/**
 * @type {import('gatsby').GatsbyNode['onCreateNode']}
 */
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "Mdx") {
    // Create slug from file path
    const slug = createFilePath({ node, getNode, basePath: "content/blog" })

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })

    // Calculate reading time
    const wordsPerMinute = 200
    const textContent = node.body || ""
    const wordCount = textContent.split(/\s+/g).length
    const readingTime = Math.ceil(wordCount / wordsPerMinute)

    createNodeField({
      node,
      name: "readingTime",
      value: readingTime,
    })
  }
}

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Keep existing DSG page
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })

  // Create blog post pages
  const blogPostTemplate = path.resolve("./src/templates/blog-post.js")

  const result = await graphql(`
    query {
      allMdx(filter: { frontmatter: { published: { ne: false } } }) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            title
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild("Error loading MDX posts", result.errors)
    return
  }

  const posts = result.data.allMdx.nodes

  // Create a page for each blog post
  posts.forEach((post) => {
    createPage({
      path: `/blog${post.fields.slug}`,
      component: `${blogPostTemplate}?__contentFilePath=${post.internal.contentFilePath}`,
      context: {
        id: post.id,
      },
    })
  })

  reporter.info(`Created ${posts.length} blog post pages`)
}

/**
 * @type {import('gatsby').GatsbyNode['createSchemaCustomization']}
 */
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type Mdx implements Node {
      frontmatter: MdxFrontmatter!
      fields: MdxFields!
    }

    type MdxFrontmatter {
      title: String!
      date: Date! @dateformat
      description: String!
      author: String
      category: String
      tags: [String]
      heroImage: File @fileByRelativePath
      heroImageAlt: String
      published: Boolean
    }

    type MdxFields {
      slug: String!
      readingTime: Int!
    }
  `)
}
