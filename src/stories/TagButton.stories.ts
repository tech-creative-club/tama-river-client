import type { Meta, StoryObj } from '@storybook/react';
import { TagButton } from '@/components/TagButton';

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
export const Primary: Story = {
  args: {
    tags: ['tag1', 'tag2', 'tag3'],
  },
};
