import type { Meta, StoryObj } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Profile } from './profile';


export default {
  title: 'Modules/Profile',
  component: Profile,
  parameters: {
    // https://storybookjs.github.io/addon-designs/?path=/story/docs-quick-start--page
    design: {
        type: "figma",
        url: "", // Url to the component's figma file/frame/prototype.
      },
    },
  tags: ['autodocs'],
  args: {
    fullName: "Jane Doe",
    location: "3 miles away",
    description: "I'm a part-time dog walker in the North York area. Let me know if you need someone to walk your dog!",
    editMode: true,
  },
};

type Story = StoryObj<typeof Profile>;

export const Primary: Story = {};

export const PrimaryOnDarkWithProfileImage: Story = {
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  ...Primary.args,
  args: {
    profileImg: 'https://github.com/shadcn.png'
  }
};

export const PrimaryOnBackgroundWithNoDescription: Story = {
  parameters: {
    backgrounds: {
      default: 'facebook',
      values: [
        { name: 'twitter', value: '#00aced' },
        { name: 'facebook', value: '#3b5998' },
      ],
    },
  },
  args: {
    location: "Toronto, ON",
    description: "",
  }
};

// https://storybook.js.org/docs/react/essentials/viewport
export const PrimaryOnMobileViewport: Story = {
  ...Primary,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone6',
    },
  },
};