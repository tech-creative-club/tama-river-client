import type { Meta, StoryObj } from '@storybook/react';
import { LoadImageFromSaved } from '@/components/misc/LoadImageFromSaved';

const meta = {
  title: 'Components/LoadImageFromSaved',
  component: LoadImageFromSaved,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof LoadImageFromSaved>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
