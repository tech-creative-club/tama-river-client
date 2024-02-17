import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '@/components/layout/Header';

const meta: Meta = {
  title: 'Layout/Header',
  component: Header,
  tags: ['components', 'autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    title: 'たまりば',
    fixed: true,
    desktop: false,
  },
};
