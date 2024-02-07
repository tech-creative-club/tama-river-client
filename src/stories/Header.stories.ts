import type {Meta,StoryObj} from '@storybook/react';
import { Header } from './Header';

const meta : Meta = {
  title: 'Components/Header',
  component: Header,
  tags: ['components', 'autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary:Story = {};
