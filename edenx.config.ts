import { appTools, defineConfig } from '@edenx/app-tools';

// https://edenx.bytedance.net/configure/app/usage
export default defineConfig({
  plugins: [
    appTools({
      bundler: 'webpack', // Set to 'experimental-rspack' to enable rspack ⚡️🦀
    }),
  ],
});
