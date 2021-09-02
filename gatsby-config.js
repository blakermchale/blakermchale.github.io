require('dotenv').config();

const { ACCESS_TOKEN, SPACE_ID, ANALYTICS_ID } = process.env;

const remarkSlug = require(`remark-slug`);

const plugins = [
  {
    resolve: `gatsby-theme-mate`,
    options: {
      accessToken: ACCESS_TOKEN,
      spaceId: SPACE_ID,
    },
  },
  {
    resolve: 'gatsby-plugin-mdx',
    options: {
      remarkPlugins: [
        remarkSlug
      ],
      plugins: ['remark-slug'],
      extensions: ['.mdx', '.md'],
      defaultLayout: require.resolve('./src/templates/Post.tsx')
    }
  },
];

if (ANALYTICS_ID) {
  plugins.push({
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: ANALYTICS_ID,
    },
  });
}

module.exports = {
  plugins,
};
