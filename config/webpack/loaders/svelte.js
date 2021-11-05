const sveltePreprocess = require("svelte-preprocess");

module.exports = {
  test: /\.svelte$/,
  use: [
    {
      loader: "svelte-loader",
      options: {
        hotReload: true,
        preprocess: sveltePreprocess({
          postcss: true,
        }),
      },
    },
  ],
};
