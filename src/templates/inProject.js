import React from 'react'
import { graphql } from "gatsby"
import {MDXRenderer} from "gatsby-plugin-mdx"
import { CoverImage, Pagination} from '../components'
import {Container, ProjectContent, H1} from '../elements'

const inProject = ({ pageContext, data}) => {
    const {currentPage, numPages} = pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = `/Project${currentPage - 1}`
    const nextPage = `/Project${currentPage + 1}`

    const coverImage = data.mdx.frontmatter.featureImage.childImageSharp.fluid

    return (
        <Container>
            <ProjectContent>
                <div style={{  
                    }}>
                    <CoverImage fluid={coverImage} />
                </div>
                <H1 margin="0 0 2rem 0">{data.mdx.frontmatter.title}</H1>
                <MDXRenderer margin="0 0 5rem 0">{data.mdx.body}</MDXRenderer>
            </ProjectContent>
            <Pagination 
                isFirst={isFirst}
                isLast={isLast}
                prevPage={prevPage}
                nextPage={nextPage}
            />
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