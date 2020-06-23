import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import order from '../projects/sort'

const Body = styled.span`
li {
  list-style: disc;
}
`

const Projects = ({ close }) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            html
            frontmatter {
              title
              url
              featureImage {
                childImageSharp {
                  fluid(
                    quality: 100
                    maxWidth: 960
                    duotone: { highlight: "#000000", shadow: "#000000", opacity: 20 }
                    toFormat: PNG
                  ) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const nodes = data.allMarkdownRemark.edges;
  nodes.sort((a, b) => {
    return order.indexOf(a.node.frontmatter.title) - order.indexOf(b.node.frontmatter.title);
  })
  console.log(nodes)

  return (
    <>
      <h2 className="major">What I've Done</h2>
      <ul className="projects">
        {data.allMarkdownRemark.edges.map(
          ({ node }) => (
            <div key={node.id}>
              {node.frontmatter.featureImage &&
              <span className="image main project">
                <a href={node.frontmatter.url}>
                  <Img fluid={node.frontmatter.featureImage.childImageSharp.fluid} />
                </a>
              </span>
              }
              <li>{node.frontmatter.title}</li>
              <Body dangerouslySetInnerHTML={{ __html: node.html }} />
            </div>
          )
        )}
      </ul>
      {close}
    </>
  )
}

export default Projects
