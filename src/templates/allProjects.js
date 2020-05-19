import React from "react"
import {graphql} from "gatsby"
import {
    ContentCard,
    Pagination
} from "../components"
import {Container} from '../elements'

const allProjects = ({pageContext, data}) => {
    const {currentPage, numPages} = pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/Projects" : `/Projects${currentPage - 1}`
    const nextPage = `/Projects${currentPage + 1}`

    const posts = data.allMdx.edges


    return (
        <Container>
            {posts.map(post => (
                <ContentCard 
                    key={post.node.frontmatter.slug}
                    date={post.node.frontmatter.date}
                    title={post.node.frontmatter.title}
                    excerpt={post.node.frontmatter.excerpt}
                    slug={post.node.frontmatter.slug}
                    image={post.node.frontmatter.featureImage.childImageSharp.fluid}
                /> 
            ))}
            <Pagination 
                isFirst={isFirst}
                isLast={isLast}
                prevPage={prevPage}
                nextPage={nextPage}
            />
        </Container>
    )

}

export default allProjects;

export const pageQuery = graphql`
    query AllProjectsQuery($skip: Int!, $limit: Int!) {
        allMdx(sort: {fields: frontmatter___date, order: DESC}, skip: $skip, limit: $limit) {
            edges {
            node {
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