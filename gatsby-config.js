const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Machival`,
    siteUrl: `https://localhost`,
    description: `A minimal Gatsby starter in typescript and styled components`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-typescript-starter',
        short_name: 'gatsby-typescript-starter',
        start_url: '/',
        background_color: '#404040',
        theme_color: '#404040',
        display: 'minimal-ui',
        icon: 'src/assets/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: path.resolve(__dirname, 'src/assets/svg'),
        },
      },
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/RootLayout.tsx'),
      },
    },
    `gatsby-plugin-offline`,
  ],
};
