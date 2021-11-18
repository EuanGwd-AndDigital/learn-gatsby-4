module.exports = {
  siteMetadata: {
    siteUrl: 'https://learngatsby4.gatsbyjs.io/',
    title: 'Learn Gatsby 4',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/blog`,
      },
      __key: 'blog',
    },
    'gatsby-plugin-mdx',
  ],
};
