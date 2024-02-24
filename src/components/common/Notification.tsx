'use client';

import { Box, Card } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import WarningIcon from '@mui/icons-material/Warning';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
export interface NotificationProps {
  title: string;
  text: string;
  notificationType: NotificationType;
}

type NotificationType = 'info' | 'warning' | 'error' | 'success';
type NotificationIconComponentsType = Record<NotificationType, React.ElementType>;

const NotificationIconComponents: NotificationIconComponentsType = {
  info: HelpCenterIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  success: CheckCircleIcon,
};

interface NotificationTitleProps {
  title: string;
  type: NotificationType;
}

function NotificationTitle({ title, type }: NotificationTitleProps) {
  const Icon = NotificationIconComponents[type];
  return (
    <Box className="flex items-start space-x-1 text-2xl">
      <Icon fontSize="large" />
      <Box>
        <span>{title}</span>
      </Box>
    </Box>
  );
}

function NotificationText({ text }: { text: string }) {
  return <p className="whitespace-pre-wrap text-gray-500">{text}</p>;
}

export function Notification(props: NotificationProps) {
  return (
    <Card className="m-3 p-3" variant="outlined">
      <Box className="flex flex-col space-y-1.5 p-3">
        <NotificationTitle title={props.title} type={props.notificationType} />
        <NotificationText text={props.text} />
      </Box>
    </Card>
  );
}
