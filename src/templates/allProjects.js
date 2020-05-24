import React from "react"
import {graphql, Link} from "gatsby"
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
            <Link style={{        
                width: '100%',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign:  'center',
                position: 'fixed',
                backgroundClor: 'white',
                zIndex: '10',
            }}to='/'>asdf</Link>
            {posts.map(post => (
                <ContentCard 
                    key={post.node.frontmatter.slug}
                    date={post.node.frontmatter.date}
                    title={post.node.frontmatter.title}
                    excerpt={post.node.frontmatter.excerpt}
                    slug={post.node.frontmatter.slug}
                    image={post.node.frontmatter.featureImage.childImageSharp.fluid}
                    body={post.node.body}
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
                body
                frontmatter {
                date
                excerpt
                title
                slug
                featureImage {
                    childImageSharp {
                        fluid{
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