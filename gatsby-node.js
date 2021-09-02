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

exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
      query {
        allContentfulProject {
            edges {
              node {
                projectUrl
                post {
                    childMdx {
                        body
                    }
                }
              }
            }
          }
      }
    `);

    // Create individual project pages
    data.allContentfulProject.edges.forEach(edge => {
        if (!edge.node.post) {
            return;
        }
        const projectUrl = edge.node.projectUrl;
        const post = edge.node.post.childMdx.body;
        if (post && projectUrl.startsWith("/")) {
            actions.createPage({
                path: projectUrl,
                component: require.resolve(`./src/templates/Post.tsx`),
                context: { slug: projectUrl },
            });
        }
    });
}
