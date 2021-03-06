module.exports = {
  plugins: {
    "postcss-nesting": {},
    "postcss-preset-env": {
      stage: 2
    },
    "postcss-assets": false,
    "postcss-import": {},
    "postcss-extend-rule": {},
    "postcss-advanced-variables": {},
    "postcss-plugin-bem-atrule": {
      defaultNamespace: "el",
      style: "suit",
      separators: {
        descendent: "__",
        modifier: "--"
      },
      shortcuts: {
        utility: "util",
        component: "b",
        modifier: "m",
        descendent: "e"
      }
    },
    "postcss-atroot": {},
    "postcss-property-lookup": {},
    "postcss-nested": {},
    "postcss-nested-ancestors": {},
    "postcss-calc": {},
    "postcss-sass-color-functions": {},
    lost: false,
    "postcss-utils": {}
  }
};
