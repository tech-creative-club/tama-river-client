import { Label } from '@/stories/Label';

export default function NotFound() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex flex-col items-center space-y-2 pb-20">
        <Label variant="large" tag="h2">このページはご利用いただけません</Label>
        <Label tag="p">リンクに問題があるか、ページが削除された可能性があります。</Label>
      </div>
    </div>
  );
}
