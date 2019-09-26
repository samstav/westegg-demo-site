module.exports = {
  siteMetadata: {
    title: "Nailed it. 🔨",
    message: "Si se puede.",
    pattern: "Arrows",
    color: "#4c4c4c",
    titleFont: "Righteous",
    messageFont: "Roboto",
    social: ["https://github.com/samstav", "https://twitter.com/peechramji"],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-under-construction",
        short_name: "Under Construction",
        start_url: "/",
        background_color: "#4c4c4c",
        theme_color: "#4c4c4c",
        display: "standalone",
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-offline"
  ],
}
