
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // webpack: (config, options) => {
  //   config.module.rules.push({
  //     test: /\.mdx/,
  //     use: [
  //       options.defaultLoaders.babel,
  //       {
  //         loader: '@mdx-js/loader',
  //         options: pluginOptions.options,
  //       },
  //     ],
  //   })

  //   return config
  // },
  // webpack(config) {
  //   config.resolve.modules.push(__dirname);
  //   return config;
  // },
  // compiler: {
  //   baseUrl: '.',
  //   rootDir: '.',
  //   paths: {
  //     'src/*': ['src/*'],
  //     'public/*': ['public/*'],
  //   },
  // },
  // env: {
  //   KAKAO_JS_KEY: process.env.KAKAO_JS_KEY,
  //   KAKAO_API_KEY: process.env.KAKAO_API_KEY,
  //   KAKAO_REDIRECT_URI: process.env.KAKAO_REDIRECT_URI,
  // },
  // include: ['next-env.d.ts', '**/*.ts', '**/*.tsx'],
  // exclude: ['node_modules', '**/node_modules', 'dist'],
}

module.exports = nextConfig;