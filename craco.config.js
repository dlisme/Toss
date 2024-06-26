const CracoAntDesignPlugin = require("craco-antd");

const path = require("path");

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        // You can customize the theme in here, or by creating an
        // antd.customize.json file in your project's root directory.
        customizeTheme: {
          "@font-size-base": "12px",
          "@breadcrumb-font-size": "12px",
          "@heading-color": "#262626",
          "@text-color": "#595959",
          "@text-color-secondary": "#8C8C8C",
          "@line-height-base": 1.6666,
          "@primary-color": "#40a9ff",
          "form-item-margin-bottom": "32px",
          "descriptions-item-padding-bottom": "32px",
          // "@menu-dark-inline-submenu-bg": "#6667ab",
          // "@menu-bg": "#6667ab",
          // "@menu-dark-item-active-bg": "#fff",
          "menu-dark-bg": "#6667c6",
        },
        lessLoaderOptions: {
          // Any other less-loader options
          // See: https://webpack.js.org/loaders/less-loader/
        },
      },
    },
  ],
  // eslint-disable-next-line object-curly-spacing
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    configure: webpackConfig => {
      if (process.env.NODE_ENV !== "development") {
        webpackConfig.output.publicPath = "/";
      }

      return webpackConfig;
    },
  },
  devServer: { sockPort: 80 },
};
