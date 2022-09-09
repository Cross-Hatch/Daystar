// const path = require("path");
// // Get paths of Gatsby's required rules, which as of writing is located at:
// // https://github.com/gatsbyjs/gatsby/tree/fbfe3f63dec23d279a27b54b4057dd611dce74bb/packages/
// // gatsby/src/utils/eslint-rules
// const gatsbyRequiredRules = path.join(
//   process.cwd(),
//   "node_modules",
//   "gatsby",
//   "dist",
//   "utils",
//   "eslint-rules"
// );

module.exports = {
  siteMetadata: {
    title: `Daystar Web App`,
    description: `Web application for Daystar Max Enterprise`,
    author: `@schniffenhausen`,
    siteUrl: `https://daystarmax.com`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/daystar-ico.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `http://34.133.115.37/graphql`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Poppins`],
        display: `swap`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    // {
    //   resolve: "gatsby-plugin-eslint",
    //   options: {
    //     // Gatsby required rules directory
    //     rulePaths: [gatsbyRequiredRules],
    //     // Default settings that may be ommitted or customized
    //     stages: ["production"],
    //     extensions: ["js", "jsx", "ts", "tsx"],
    //     exclude: ["node_modules", "bower_components", ".cache", "public"],
    //     // Any additional eslint-webpack-plugin options below
    //     // ...
    //   },
    // },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve:"gatsby-plugin-firebase",
      options:{
        credentials:{
          apiKey: "AIzaSyBlK2GAMl1pn5HHNRr47tP2LcZLeZAqyXo",
          authDomain: "daystar-b9a30.firebaseapp.com",
          projectId: "daystar-b9a30",
          storageBucket: "daystar-b9a30.appspot.com",
          messagingSenderId: "394586632743",
          appId: "1:394586632743:web:9079bff162853500aa1402"
        }
      }
    }
  ],
}
