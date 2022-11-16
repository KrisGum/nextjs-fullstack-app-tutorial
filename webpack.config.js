module.exports = {
  resolve: {
    fallback: {
      util: require.resolve("util/"),
      extensions: [".ts", ".tsx", ".js"]
    }
  }
};