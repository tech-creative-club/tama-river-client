import type { Meta, StoryObj } from '@storybook/react';
import { CameraActivation } from '@/components/page/CameraActivation';

const meta = {
  title: 'Components/CameraActivation',
  component: CameraActivation,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CameraActivation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
