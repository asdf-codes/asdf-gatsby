import React from 'react'
import { graphql } from "gatsby"
import {MDXRenderer} from "gatsby-plugin-mdx"
import { CoverImage, Pagination} from '../components'
import {Container, ProjectContent, H1} from '../elements'

const inProject = ({ pageContext, data}) => {

    const coverImage = data.mdx.frontmatter.featureImage.childImageSharp.fluid

    return (
        <Container>
            <ProjectContent>
    
                    <CoverImage fluid={coverImage} />


            </ProjectContent>
            
        </Container>
    )
}

export default inProject

export const pageQuery = graphql`
    query SinglePostQuery($id: String!) {
        mdx(id: { eq: $id }) {
            body
            frontmatter {
                date
                excerpt
                slug
                title
                featureImage {
                    publicURL
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid
                      }
                    }
                }
            }
        }
    }
`