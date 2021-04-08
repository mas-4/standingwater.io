import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import order from '../projects/sort'

const Body = styled.span`
p, ul {
margin: 0 0 1rem 0;
}
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
              short
              url
              featureImage {
                childImageSharp {
                  fluid(
                    quality: 100
                    maxWidth: 960
                    toFormat: PNG
                    duotone: { highlight: "#000000", shadow: "#000000", opacity: 10 }
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
    return order.indexOf(a.node.frontmatter.short) - order.indexOf(b.node.frontmatter.short);
  })
  for (let i = 0; i < nodes.length; i++) {
    if (!order.includes(nodes[i].node.frontmatter.short)) {
      nodes.splice(i, 1);
    }
  }

  return (
    <>
      <h2 className="major">What I've Done</h2>
      <ul className="projects">
        {data.allMarkdownRemark.edges.map(
          ({ node }) => (
            <div key={node.id}>
              <a href={node.frontmatter.url}>
                  {node.frontmatter.title}
                </a>
              {node.frontmatter.featureImage &&
              <span className="image main project" style={{ marginTop: 10, marginBottom: 10 }}>
                <a href={node.frontmatter.url}>
                  <Img fluid={node.frontmatter.featureImage.childImageSharp.fluid} />
                </a>
              </span>
              }
              <Body dangerouslySetInnerHTML={{ __html: node.html }} />
              <hr style={{ margin: 50 }}/>
            </div>
          )
        )}
      </ul>
      {close}
    </>
  )
}

export default Projects
