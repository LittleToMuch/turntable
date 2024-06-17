import { appTools, defineConfig } from '@edenx/app-tools';

// https://edenx.bytedance.net/configure/app/usage
export default defineConfig({
  output: {
    convertToRem: {
      pxtorem: {
        rootValue: 108,
      },
    },
  },
  plugins: [
    appTools({
      bundler: 'webpack', // Set to 'experimental-rspack' to enable rspack ⚡️🦀
    }),
  ],
});
