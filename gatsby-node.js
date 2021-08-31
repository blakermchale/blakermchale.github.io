/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// Skip these packages when a window error occurs during build
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html" || stage === "develop-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /react-p5/,
              use: loaders.null(),
            },
            {
              test: /react-unity-webgl/,
              use: loaders.null(),
            }
          ],
        },
      })
    }
  }

const { createFilePath } = require('gatsby-source-filesystem')

// Here we're adding extra stuff to the "node" (like the slug)
// so we can query later for all files and get their slug
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      // Individual MDX node
      node,
      // Name of the field you are adding
      name: 'slug',
      // Generated value based on filepath with prefix
      value: `${value}`
    });
  }
}
  
exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
      query {
        allMdx(
          sort: {
            fields: [frontmatter___date, frontmatter___title]
            order: [DESC, DESC]
          }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                short_title
                archived
                title
                gitlab
                github
                image
                heading
                subheading
                description
                date
              }
            }
          }
        }
      }
    `);
    
    // Loop through once to figure out unarchived projects
    let unarchived = []
    let projects = []
    data.allMdx.edges.forEach(edge => {
      const {
        node: {
          fields: {
            slug
          },
          frontmatter: {
            archived, heading, subheading, description,
            image, gitlab, github, title, short_title, date
          }
        }
      } = edge;
      let _title = title;
      if (short_title) {
        _title = short_title;
      }
      if (!archived) {
        unarchived.push({key: slug, slug: slug, title: _title})
      }
      // if (published) {

      // }
      // Use title when heading is not specified
      let _heading = heading;
      if (!!(heading)) {
        _heading = title;
      }
      projects.push({
        key: slug, href: slug, heading: _heading,
        subheading: subheading, description: description,
        image: image, gitlab: gitlab, github: github,
        date: date
      })
    });

    // Create index page
    actions.createPage({
      path: '/',
      component: require.resolve('./src/components/templates/index.tsx'),
      context: { projects: projects },
    });

    // Create individual project pages
    data.allMdx.edges.forEach(edge => {
      const slug = edge.node.fields.slug;
      actions.createPage({
        path: slug,
        component: require.resolve(`./src/components/templates/Post.tsx`),
        context: { slug: slug, unarchived: unarchived },
      });
    });
  }
