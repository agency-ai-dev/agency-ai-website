import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Header from "../components/header"
import Footer from "../components/footer"
import Seo from "../components/seo"
import track from "../utils/analytics"

const BlogIndex = ({ data }) => {
  const posts = data.allMdx.nodes

  return (
    <>
      <Seo
        title="Blog"
        description="Insights on AI-powered marketing, e-commerce growth strategies, and the future of digital marketing automation."
      />

      <Header />

      <div className="min-h-screen py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Blog Header */}
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Agency AI
              </span>{" "}
              <span className="highlight-purple">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Insights on AI-powered marketing, e-commerce growth strategies,
              and the future of digital marketing automation.
            </p>
          </header>

          {/* Blog Posts Grid */}
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map(post => {
                const heroImage = getImage(post.frontmatter.heroImage)

                return (
                  <article
                    key={post.id}
                    className="card rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: "rgba(20, 20, 40, 0.8)",
                      border: "1px solid rgba(123, 104, 238, 0.3)",
                    }}
                  >
                    <Link
                      to={`/blog${post.fields.slug}`}
                      onClick={() =>
                        track("blog_card_click", {
                          post_title: post.frontmatter.title,
                          post_slug: post.fields.slug,
                        })
                      }
                      className="no-underline"
                    >
                      {heroImage && (
                        <div className="aspect-video overflow-hidden">
                          <GatsbyImage
                            image={heroImage}
                            alt={
                              post.frontmatter.heroImageAlt ||
                              post.frontmatter.title
                            }
                            className="w-full h-full hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}

                      <div className="p-6">
                        {post.frontmatter.category && (
                          <div className="mb-3">
                            <span className="text-purple-400 text-xs font-medium uppercase tracking-wide">
                              {post.frontmatter.category}
                            </span>
                          </div>
                        )}

                        <h2 className="text-xl font-bold text-white mb-3 hover:text-purple-400 transition-colors">
                          {post.frontmatter.title}
                        </h2>

                        <p className="text-gray-300 mb-4 line-clamp-3">
                          {post.frontmatter.description}
                        </p>

                        <div className="flex items-center justify-between text-sm text-gray-400">
                          <time dateTime={post.frontmatter.date}>
                            {new Date(post.frontmatter.date).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              }
                            )}
                          </time>
                          <span>{post.fields.readingTime} min read</span>
                        </div>

                        {post.frontmatter.tags &&
                          post.frontmatter.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-4">
                              {post.frontmatter.tags.slice(0, 3).map(tag => (
                                <span
                                  key={tag}
                                  className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                      </div>
                    </Link>
                  </article>
                )
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-gray-400">
                No blog posts yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  )
}

export const query = graphql`
  query BlogIndex {
    allMdx(
      filter: { frontmatter: { published: { ne: false } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        id
        frontmatter {
          title
          date
          description
          author
          category
          tags
          heroImageAlt
          heroImage {
            childImageSharp {
              gatsbyImageData(
                width: 600
                height: 400
                quality: 85
                placeholder: BLURRED
              )
            }
          }
        }
        fields {
          slug
          readingTime
        }
      }
    }
  }
`

export default BlogIndex
