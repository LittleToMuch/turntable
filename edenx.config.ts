import { appTools, defineConfig } from '@edenx/app-tools';

// https://edenx.bytedance.net/configure/app/usage
export default defineConfig({
  output: {
    convertToRem: {
      pxtorem: {
        rootValue: 108,
      },
    },
    distPath: {
      image: 'turntable/static/image',
    }
  },
  plugins: [
    appTools({
      bundler: 'webpack', // Set to 'experimental-rspack' to enable rspack ⚡️🦀
    }),
  ],
});
