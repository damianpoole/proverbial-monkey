import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div className="flex items-center my-6">
            <div className="h-16 w-16 mr-10">
              <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
                className="rounded-full"
              />
            </div>
            <p>
              Written by <strong>{author}</strong>, a senior software engineer
              living and working in Yorkshire.
              {` `}
              <a
                className="inline-block link"
                href={`https://twitter.com/${social.twitter}`}
              >
                You should follow him on Twitter
              </a>
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile.jpg/" }) {
      childImageSharp {
        fixed(width: 75, height: 75) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
