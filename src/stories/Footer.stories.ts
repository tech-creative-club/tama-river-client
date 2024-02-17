import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from '@/components/layout/Footer';

const meta = {
  title: 'Layout/Footer',
  component: Footer,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    path: '/',
    fixed: true,
  },
};
