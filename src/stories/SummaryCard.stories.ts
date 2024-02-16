import type { Meta, StoryObj } from '@storybook/react';
import { SummaryCard } from './SummaryCard';
import SummaryCardType from '@/types/SummaryCardType';

const meta: Meta = {
  title: 'Components/SummaryCard',
  component: SummaryCard,
  tags: ['components', 'autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    prop: {
      description: 'SummaryCardのデータ',
      control: {
        type: 'object',
      },
    },
  },
} satisfies Meta<typeof SummaryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    prop: {
      title: 'イベントの名前',
      sport: ['サッカー', '野球'],
      date: '2024-01-01T00:00:00Z',
      url: 'https://example.com',
      image_url: 'https://source.unsplash.com/700x500?park',
      location: {
        name: '会場の名前',
        address: '住所',
        capacity: '100',
      },
    } as SummaryCardType,
    pulse: true,
    desktop: false,
  },
} satisfies Story;
