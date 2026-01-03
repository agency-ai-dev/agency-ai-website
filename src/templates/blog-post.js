import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Header from "../components/header"
import Footer from "../components/footer"
import Seo from "../components/seo"
import track from "../utils/analytics"

const BlogPost = ({ data, children }) => {
  const post = data.mdx
  const heroImage = getImage(post.frontmatter.heroImage)

  // Track blog post view on mount
  React.useEffect(() => {
    track("blog_post_view", {
      post_title: post.frontmatter.title,
      post_slug: post.fields.slug,
      post_category: post.frontmatter.category,
    })
  }, [post.frontmatter.title, post.fields.slug, post.frontmatter.category])

  return (
    <>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.heroImage?.publicURL}
      />

      <Header />

      <article className="min-h-screen py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Blog Post Header */}
          <header className="mb-8">
            {post.frontmatter.category && (
              <div className="mb-4">
                <span className="text-purple-400 text-sm font-medium">
                  {post.frontmatter.category}
                </span>
              </div>
            )}

            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              {post.frontmatter.title}
            </h1>

            <div className="flex items-center text-gray-400 text-sm space-x-4">
              {post.frontmatter.author && (
                <>
                  <span>{post.frontmatter.author}</span>
                  <span>•</span>
                </>
              )}
              <time dateTime={post.frontmatter.date}>
                {new Date(post.frontmatter.date + 'T00:00:00').toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span>•</span>
              <span>{post.fields.readingTime} min read</span>
            </div>

            {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {post.frontmatter.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Hero Image */}
          {heroImage && (
            <div className="mb-12 rounded-xl overflow-hidden">
              <GatsbyImage
                image={heroImage}
                alt={
                  post.frontmatter.heroImageAlt || post.frontmatter.title
                }
                className="w-full"
              />
            </div>
          )}

          {/* Blog Post Content */}
          <div
            className="prose prose-invert prose-lg max-w-none
                        prose-headings:text-white prose-headings:font-bold
                        prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
                        prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
                        prose-p:text-gray-300 prose-p:leading-relaxed
                        prose-a:text-purple-400 prose-a:no-underline hover:prose-a:underline
                        prose-strong:text-white
                        prose-ul:text-gray-300
                        prose-ol:text-gray-300
                        prose-li:my-2
                        prose-code:text-purple-300 prose-code:bg-gray-800 prose-code:px-2 prose-code:py-1 prose-code:rounded
                        prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-700
                        prose-img:rounded-lg"
          >
            {children}
          </div>

          {/* Article Schema for SEO */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.frontmatter.title,
              description: post.frontmatter.description,
              image: heroImage
                ? `${data.site.siteMetadata.siteUrl}${post.frontmatter.heroImage.publicURL}`
                : undefined,
              author: {
                "@type": "Organization",
                name: post.frontmatter.author || "Agency AI",
              },
              publisher: {
                "@type": "Organization",
                name: "Agency AI",
                logo: {
                  "@type": "ImageObject",
                  url: `${data.site.siteMetadata.siteUrl}/agency-favicon.png`,
                },
              },
              datePublished: post.frontmatter.date,
              dateModified: post.frontmatter.date,
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `${data.site.siteMetadata.siteUrl}/blog${post.fields.slug}`,
              },
            })}
          </script>
        </div>
      </article>

      <Footer />
    </>
  )
}

export const query = graphql`
  query BlogPost($id: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date
        description
        author
        category
        tags
        heroImageAlt
        heroImage {
          publicURL
          childImageSharp {
            gatsbyImageData(width: 1200, quality: 90, placeholder: BLURRED)
          }
        }
      }
      fields {
        slug
        readingTime
      }
    }
  }
`

export default BlogPost
