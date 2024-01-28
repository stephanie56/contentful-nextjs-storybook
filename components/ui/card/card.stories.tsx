import type { Meta, StoryObj } from '@storybook/react';

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './card';

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    title: 'Card Title',
    description: 'Card Description',
    content: <p>Hello world this is my paragraph.</p>,
    footer: <footer>This is the card footer</footer>,
  },
  render: (args: any) => (<Card>
    <CardHeader>
      <CardTitle>{args.title}</CardTitle>
      <CardDescription>{args.description}</CardDescription>
    </CardHeader>
    <CardContent>
      {args.content}
    </CardContent>
    <CardFooter>
      {args.footer}
    </CardFooter>
  </Card>
  ),
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

