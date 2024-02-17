import { CameraActivation } from '@/stories/CameraActivation';
import { LoadImageFromSaved } from '@/stories/LoadImageFromSaved';
import { Label } from '@/stories/Label';

export default function Add() {
  return (
    <div className="flex size-full flex-col items-center space-y-5 pt-20">
      <CameraActivation />
      <LoadImageFromSaved />
      <Label tag="p" className="max-w-64">
        エージェントを追加することにより、さまざまな情報を受け取る事ができるようになります。
      </Label>
    </div>
  );
}
