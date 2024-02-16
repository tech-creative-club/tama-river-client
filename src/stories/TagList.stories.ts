import type {Meta,StoryObj} from '@storybook/react';
import { TagList } from './TagList';

const meta : Meta = {
  title: 'Components/TagList',
  component: TagList,
  tags: ['components', 'autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TagList>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary:Story = {};
