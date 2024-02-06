import type { Meta, StoryObj } from '@storybook/react';
import { SummaryCardComp } from './SummaryCard';
import SummaryCardType from '@/types/SummaryCardType';

const meta: Meta = {
  title: 'Components/SummaryCard',
  component: SummaryCardComp,
  tags: ['components', 'autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    plop: {
      description: 'SummaryCardのデータ',
      control: {
        type: 'object',
      },
    },
  },
} satisfies Meta<typeof SummaryCardComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    plop: {
      id: '000000',
      name: 'イベントの名前',
      sport: ['サッカー', '野球'],
      date: '2024-01-01T00:00:00Z',
      url: 'https://example.com',
      image: 'https://source.unsplash.com/700x500?park',
      location: {
        name: '会場の名前',
        address: '住所',
        capacity: '100',
      },
    } as SummaryCardType,
  },
} satisfies Story;
