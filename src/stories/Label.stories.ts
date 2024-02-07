import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';

const meta: Meta = {
  title: 'Components/Label',
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
    innerText: 'Label',
  },
};
