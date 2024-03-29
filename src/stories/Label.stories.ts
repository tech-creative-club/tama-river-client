import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '@/components/common/Label';

const meta: Meta = {
  title: 'Common/Label',
  component: Label,
  tags: ['components', 'autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Label',
    type: 'p',
    border: false,
  },
};
