module.exports = {
  target: "serverless",
  trailingSlash: true,
  poweredByHeader: false,
  exportPathMap: async function () {
    return {
      "/": { page: "/", query: { path: "writings" } },
      "/writings": { page: "/", query: { path: "writings" } },
      "/projects": { page: "/", query: { path: "projects" } },
      "/resume": { page: "/", query: { path: "resume" } },
      "/about": { page: "/about" },
    };
  },
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
};
