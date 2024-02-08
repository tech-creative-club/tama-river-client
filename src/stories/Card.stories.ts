import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['components'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {};
