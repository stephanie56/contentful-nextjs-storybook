import type { Meta, StoryObj } from '@storybook/react';

import { Avatar, AvatarFallback, AvatarImage } from './avatar';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: 'https://github.com/shadcn.png',
    alt: 'demo avatar',
  },
  render: (args: any) => (
    <Avatar>
      <AvatarImage {...args} />
      <AvatarFallback />
    </Avatar>
  ),
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};