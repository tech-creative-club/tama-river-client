import { Label } from '@/stories/Label';

export default function NotFound() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex flex-col items-center space-y-2 pb-20">
        <Label innerText="このページはご利用いただけません" size="primary" weight="medium" />
        <Label
          innerText="リンクに問題があるか、ページが削除された可能性があります。"
          size="tertiary"
          weight="normal"
          className="text-zinc-500"
        />
      </div>
    </div>
  );
}
