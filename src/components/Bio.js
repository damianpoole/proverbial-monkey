import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

function Bio() {
  const data = useStaticQuery(bioQuery)
  const { author, social } = data.site.siteMetadata
  const image = getImage(data.avatar)

  return (
    <div className="flex items-center my-6">
      <div className="h-16 w-16 mr-10">
        <GatsbyImage image={image} alt={author} className="rounded-full" />
      </div>
      <p>
        Written by <strong>{author}</strong>, a senior software engineer living
        and working in Yorkshire.
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
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile.jpg/" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FIXED
          width: 75
          height: 75
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
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
