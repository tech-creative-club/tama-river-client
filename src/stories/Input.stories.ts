import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['components', 'autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {};
