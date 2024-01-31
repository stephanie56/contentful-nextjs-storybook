import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  // The array of globs tell Storybook where to find stories.
  // Stories are not rendered if they are not included here.
  stories: [
    "../**/*.mdx",
    "../**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-designs", // design integration addon
    '@storybook/addon-a11y',
    '@storybook/addon-interactions', // enable interaction testing addon
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  // More https://storybook.js.org/docs/react/configure/images-and-assets
  staticDirs: ['../public'], // configures the static asset folder in Storybook
  docs: {
    autodocs: "tag",
  },
};
export default config;
