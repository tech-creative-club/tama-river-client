import type { Meta, StoryObj } from '@storybook/react';
import { QRCodeReader } from '@/components/page/qr/QRCodeReader';

const meta: Meta = {
  title: 'Components/QRCodeReader',
  component: QRCodeReader,
  tags: ['components', 'autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof QRCodeReader>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {};
