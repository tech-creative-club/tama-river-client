import type { Meta, StoryObj } from '@storybook/react';
import { NoImage } from '@/components/common/SummaryCard/NoImage';

const meta = {
  title: 'Common/NoImage',
  component: NoImage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof NoImage>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {};
