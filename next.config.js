module.exports = {
  target: "serverless",
  exportTrailingSlash: true,
  poweredByHeader: false,
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
};
