import type { Meta, StoryObj } from '@storybook/react';
import { Notification } from '@/components/common/Notification';

const meta = {
  title: 'Components/Notification',
  component: Notification,
  tags: ['components', 'autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Notification>;
export default meta;

export const Info: StoryObj<typeof meta> = {
  args: {
    title: '参考情報',
    text: 'ここに参考情報が書かれます',
    notificationType: 'info',
  },
};

export const Waring: StoryObj<typeof meta> = {
  args: {
    title: '注意情報',
    text: 'ここに注意情報が書かれます',
    notificationType: 'warning',
  },
};

export const Error: StoryObj<typeof meta> = {
  args: {
    title: 'エラー情報',
    text: 'ここにエラー情報が書かれます',
    notificationType: 'error',
  },
};

export const Success: StoryObj<typeof meta> = {
  args: {
    title: '成功情報',
    text: 'ここに成功情報が書かれます',
    notificationType: 'success',
  },
};
