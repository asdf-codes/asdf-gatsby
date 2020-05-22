import React from 'react'
import { graphql } from 'gatsby'
import { GridCard } from '../components'
import { Container, GridContainer } from '../elements'

const gridProjects = ({data}) => {

    const gridItem = data.allMdx.edges

    return(
                <GridContainer>
                    {gridItem.map(gridItem => (
                        <GridCard
                        key={gridItem.node.frontmatter.slug}
                        date={gridItem.node.frontmatter.date}
                        title={gridItem.node.frontmatter.title}
                        excerpt={gridItem.node.frontmatter.excerpt}
                        slug={gridItem.node.frontmatter.slug}
                        image={gridItem.node.frontmatter.featureImage.childImageSharp.fluid}
                        body={gridItem.node.body}
                        />
                    ))}
                </GridContainer>
    )
}

export default gridProjects

export const pageQuery = graphql `
    query gridQuery($skip: Int!, $limit: Int!) {
        allMdx(sort: {fields: frontmatter___date, order: DESC}, skip: $skip, limit: $limit) {
            edges {
            node {
                body
                frontmatter {
                date
                excerpt
                title
                slug
                featureImage {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }  
    }
`
