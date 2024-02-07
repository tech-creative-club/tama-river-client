import { Label } from './Label';

export const LoadImageFromSaved = () => {
  return (
    <div className="inline-flex items-center justify-center gap-2.5 rounded-full bg-zinc-200 px-5 py-0.5">
      <Label innerText="保存した画像から読み取る" size="quaternary" weight="medium" />
    </div>
  );
};
