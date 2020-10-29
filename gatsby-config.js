const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'PSA Web Guidelines',
    siteUrl: 'https://www.carbondesignsystem.com',
    description:
      'These guidelines cover writing for web and the Carbon Fibre design system. Carbon Fibre is a fork of IBM\'s Carbon design system.',
    keywords:
      'design, system, Carbon Fibre, design system, Bluemix, styleguide, style, guide, components, library, pattern, kit, component, cloud',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'component-index-images',
        path: path.join(__dirname, 'src/data/index'),
        ignore: ['**/*.js', '**/*.yml', '**/.*'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'chart-index-images',
        path: path.join(__dirname, 'src/data/chart-index'),
        ignore: ['**/*.js', '**/*.yml', '**/.*'],
      },
    },
    {
      resolve: 'gatsby-remark-images',
      options: {
        maxWidth: 1152,
        linkImagesToOriginal: false,
        quality: 75,
        withWebp: false,
        pngCompressionSpeed: 4,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-lodash',
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        mdxExtensions: ['.mdx'],
        isServiceWorkerEnabled: true,
        iconPath: './src/images/favicon.svg',
        titleType: 'prepend',
        repository: {
          baseUrl: 'https://github.com/carbon-design-system/carbon-website',
          subDirectory: '',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Carbon Design System',
        short_name: 'Carbon',
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-component-index',
      options: {
        directory: path.resolve(__dirname, './src/data/index'),
      },
    },
    {
      resolve: 'gatsby-plugin-chart-index',
      options: {
        directory: path.resolve(__dirname, './src/data/chart-index'),
      },
    },
  ],
};
