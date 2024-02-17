import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/base/Button';

const meta: Meta = {
  title: 'Base/Button',
  component: Button,
  tags: ['components', 'autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    children: 'Button',
  },
} satisfies StoryObj<typeof Primary>;
