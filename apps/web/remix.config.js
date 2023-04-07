/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  devServerBroadcastDelay: 1000,
  ignoredRouteFiles: ['**/.*'],
  server: './server/index.ts',
  serverBuildPath: 'functions/[[path]].js',
  serverConditions: ['worker'],
  serverDependenciesToBundle: [
    // regex for match everything but not "sanity"
    /^(?![@]?sanity).*$/
  ],
  serverMainFields: ['browser', 'module', 'main'],
  serverMinify: true,
  serverModuleFormat: 'esm',
  serverPlatform: 'neutral',
  future: {
    v2_routeConvention: true,
    v2_errorBoundary: true,
    v2_normalizeFormMethod: true,
    v2_meta: true
  }
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
};
