/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `baczektaxionline`,
        siteUrl: `https://www.yourdomain.tld`
    },
    plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sitemap", `gatsby-plugin-offline`, {
        resolve: 'gatsby-plugin-manifest',
        options: {
            name: `Bączek Taxi`,
            short_name: `Bączek`,
            start_url: `/`,
            background_color: `#fddc01`,
            theme_color: `#000`,
            display: `minimal-ui`,
            icon: `src/images/favicon.png`,
        },
    }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
        resolve: 'gatsby-source-filesystem',
        options: {
            "name": "images",
            "path": "./src/images/"
        },
        __key: "images"
    }, {
        resolve: 'gatsby-source-filesystem',
        options: {
            "name": "pages",
            "path": "./src/pages/"
        },
        __key: "pages"
    }, {
        resolve: 'gatsby-plugin-google-gtag',
        options: {
            trackingIds: [
                "259913984",
            ],
        }
    },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `inter\:400,500,700`,
                    `pt serif\:400,700`,
                    `fraunces\:400,500,700`
                ],
                display: 'swap'
            }
        }]
};
