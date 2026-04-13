import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'

function BlogPostTemplate({ data, location, pageContext, children }) {
  const post = data.mdx
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <h1 className="text-4xl font-bold py-4">{post.frontmatter.title}</h1>
      <p className="text-sm font-semibold text-gray-800">
        {post.frontmatter.date}
      </p>
      <div className="markdown mt-6">{children}</div>

      <Bio />

      <ul className="flex flex-wrap justify-between list-none p-0">
        <li>
          {previous && (
            <Link className="link" to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link className="link" to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(id: { eq: $id }, frontmatter: { published: { ne: false } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
