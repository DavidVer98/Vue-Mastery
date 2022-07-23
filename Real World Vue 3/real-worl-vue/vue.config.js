const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: false,
  publicPath: "./",
  chainWebpack: config => {
    config.module.rules.delete('eslint');
}
});
