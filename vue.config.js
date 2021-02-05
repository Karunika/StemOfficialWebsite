//vue.config.js
const fs = require(`fs`);

module.exports = {
  chainWebpack: config => {
    config.plugin(`html`).tap(args => {
      args[0].title = `STEM Discord`;
      return args;
    });
  },
  devServer: {
    port: 3000,
    https: process.env.PROD ? false : {
      key: fs.readFileSync(`./local/key.pem`),
      cert: fs.readFileSync(`./local/cert.pem`)},
    public: `https://localhost:3000`,
  },
  pluginOptions: {
    express: {
      shouldServeApp: true,
      serverDir: `./srv`,
    },
  },
};