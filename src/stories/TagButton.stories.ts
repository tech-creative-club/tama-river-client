import type { Meta, StoryObj } from '@storybook/react';
import { TagButton } from './TagButton';

const meta: Meta = {
  title: 'Components/TagButton',
  component: TagButton,
  tags: ['components', 'autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TagButton>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {};
