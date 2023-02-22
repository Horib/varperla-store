const { withStoreConfig } = require("./store-config")
const store = require("./store.config.json")

module.exports = withStoreConfig({
  features: store.features,
  reactStrictMode: true,
  images: {
    domains: [
      "medusa-public-images.s3.eu-west-1.amazonaws.com",
      // "varperla-media.s3.amazonaws.com",
      "varperla-space.ams3.digitaloceanspaces.com",
      "localhost",
    ],
  },
})

//Test2

console.log("next.config.js", JSON.stringify(module.exports, null, 2))
