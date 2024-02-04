import type { Meta, StoryObj } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { Profiles } from './profiles';

export default {
  title: 'Components/Profiles',
  component: Profiles,
  parameters: {
    layout: 'centered',
    // https://storybookjs.github.io/addon-designs/?path=/story/docs-quick-start--page
    design: {
        type: "figma",
        url: "", // Url to the component's figma file/frame/prototype.
      },
    },
  tags: ['autodocs'],
  args: {
    profiles: [
      {
        id: "1",
        fullName: "Jane Doe",
        location: "3 miles away",
        description: "I'm a part-time dog walker in the North York area. Let me know if you need someone to walk your dog!",
      },
      {
        id: "2",
        fullName: "John Snow",
        location: "5 miles away",
        description: "Snow is coming. I can walk your dog before it arrives.",
        available: true,
      },
      {
        id: "3",
        fullName: "Dany Targaryen",
        location: "10 miles away",
        description: "Hi there! I'm Dany and I'm friendly with dogs!",
      },
      {
        id: "4",
        fullName: "Tyrion Lannister",
        location: "15 miles away",
        description: "Tell me if you need someone to walk your dog. I'm available!",
      },
      {
        id: "5",
        fullName: "Arya Stark",
        location: "20 miles away",
        description: "What is dead may never die. But I can walk your dog!",
        available: true,
      }
    ],
  }
};

type Story = StoryObj<typeof Profiles>;

export const Primary: Story = {};

export const EmptyProfileList: Story = {
  args: {
    profiles: [],
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