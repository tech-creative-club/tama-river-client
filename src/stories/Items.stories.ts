import type { Meta, StoryObj } from '@storybook/react';
import { Items } from './Items';

const meta: Meta = {
  title: 'Components/Items',
  component: Items,
  tags: ['components', 'autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Items>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    desktop: false,
  },
};
