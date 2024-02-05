import type {Meta,StoryObj} from '@storybook/react';
import { InfoTooltip } from './InfoTooltip';

const meta : Meta = {
  title: 'Components/InfoTooltip',
  component: InfoTooltip,
  tags: ['components'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof InfoTooltip>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary:Story = {};