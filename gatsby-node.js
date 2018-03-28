

// exports.sourceNodes = async ({ boundActionCreators }) => {
//   const { createNode } = boundActionCreators;
// }

// // fetch raw data from the api
// const fetchAPI = () => axios.get(`https://siyucapital.com/api/newsletters/`);
// // await results
// const res = await fetchAPI();

//map the results to create nodes

// const axios = require('axios');

// exports.createPages = async ({ boundActionCreators }) => {
//   const { createPage } = boundActionCreators;

//   const fetchAPI = () => axios.get(`https://siyucapital.com/api/newsletters/`);

//   let posts = await fetchAPI();
//   posts = posts.data;
//   posts.forEach((post, index) => {
//     createPage({
//       path: index,
//       component: post,
//     });
//   });

//   return posts;
// }

// const path = require('path');

// exports.createPages = ({ boundActionCreators, graphql }) => {
//   const { createPage } = boundActionCreators;

//   const blogPostTemplate = path.resolve(`src/templates/post.js`);
//   return graphql(`{
//     allMarkdownRemark(
//       sort: { order: DESC, fields: [frontmatter___date] }
//       limit: 1000
//     ) {
//       edges {
//         node {
//           html
//           id
//           frontmatter {
//             date
//             path
//             title
//           }
//         }
//       }
//     }
//   }`)
//   .then(result => {
//     if (result.errors) {
//       return Promise.reject(result.errors)
//     }

//     const posts = result.data.allMarkdownRemark.edges;

//     // Create pages for each markdown file.
//     posts.forEach(({ node }, index) => {
//       createPage({
//         path: node.frontmatter.path,
//         component: blogPostTemplate,
//       });
//     });

//     return posts;
//   })
// };
const path = require('path');
const axios = require('axios');
const crypto = require('crypto');
const striptags = require('striptags');

// Create nodes from each newsletter
exports.sourceNodes = ({
  boundActionCreators: { createNode, createPage },
  // create a unique id in gatsby data store
  createNodeId,
}) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://siyucapital.com/api/newsletters/`)
      .then(response => {
        const posts = response.data;

        posts.forEach((post, i) => {
          const postNode = {
            ...post,

            title: post.title,
            id: `${i}`,
            parent: null,
            children: [],

            internal: {
              type: `Post`,
              contentDigest: generateContentDigest(post),
            },
          }
          createNode(postNode);
        })
        resolve()
      })
      .catch(reject)
  })
}

const generateContentDigest = data =>
  crypto
    .createHash(`md5`)
    .update(JSON.stringify(data))
    .digest(`hex`)

// Create Slugs from the title of the newsletters 
exports.onCreateNode = ({ node, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === `Post`) {
    createNodeField({
      node,
      name: 'slug',
      value: node.title.split(' ').slice(0, 2).toString().replace(/,/g, '-')
    });
    createNodeField({
      node,
      name: 'date',
      value: node.title.split(' ').slice(2).toString()
    })
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
    {
      allPost {
        edges {
          node {
            id,
            author,
            title,
            fields{
              slug
            }
          }
        }
      }
    }
    `
    ).then(result => {
      result.data.allPost.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      })
      resolve()
    })
  })
};