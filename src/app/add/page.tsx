import { CameraActivation } from '@/components/page/CameraActivation';
import { LoadImageFromSaved } from '@/components/misc/LoadImageFromSaved';
import { Label } from '@/components/common/Label';
import { Notification } from '@/components/common/Notification';

export default function Add() {
  const errorText = 'この機能はv0.1.0では未実装です。';
  return (
    <div className="flex size-full flex-col items-center space-y-5 pt-20">
      <Notification title="未実装" text={errorText} notificationType="error" />
      <CameraActivation />
      <LoadImageFromSaved />
      <Label tag="p" className="max-w-64">
        エージェントを追加することにより、さまざまな情報を受け取る事ができるようになります。
      </Label>
    </div>
  );
}
