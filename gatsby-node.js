const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const { data } = await graphql(`
    {
      allShopifyProduct {
        edges {
          node {
            id
            shopifyId
            handle
          }
        }
      }
    }
  `);

  data.allShopifyProduct.edges.forEach(({ node }) => {
    createPage({
      path: `products/${node.handle}`,
      context: {
        shopifyId: node.shopifyId,
      },
      component: path.resolve(
        './src/templates/ProductTemplate/ProductTemplate.js'
      ),
    });
  });
};
