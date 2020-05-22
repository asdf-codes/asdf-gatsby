exports.createPages = async function({actions, graphql}) {
    const {data} = await graphql(`
        query {
            allMdx(sort: { fields: frontmatter___date, order: DESC }) {
            edges {
                node {
                frontmatter {
                    slug
                }
                id
                }
            }
            }
        }       
    `)

// create paginated pages for posts

    const postPerPage = 1

    const numPages = Math.ceil(data.allMdx.edges.length / postPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
        actions.createPage({
            path: i === 0 ? `Projects` : `Projects${i + 1}`,
            component: require.resolve("./src/templates/allProjects.js"),
            context: {
                limit: postPerPage,
                skip: i * postPerPage,
                numPages,
                currentPage: i + 1,
            }
        })
    })

    const GridPerPage = 10

    Array.from({length: GridPerPage}).forEach((_, i) => {
        actions.createPage({
            path: i === 0 ? `Grid` : `Grid${i + 1}`,
            component: require.resolve("./src/templates/gridProjects.js"),
            context: {
                limit: GridPerPage,
                skip: i * GridPerPage,
                numPages,
                currentPage: i + 1,
            }
        })
    })

    const projects = data.allMdx.edges

// create single blog posts
    projects.forEach((edge, i) => {
        const slug = edge.node.frontmatter.slug
        const id = edge.node.id
        actions.createPage({
            path: slug,
            component: require.resolve(`./src/templates/inProject.js`),
            context: {
                id,
                limit: postPerPage,
                skip: i * postPerPage,
                numPages,
                currentPage: i + 1,
            },
        })
    })
} 






/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */


