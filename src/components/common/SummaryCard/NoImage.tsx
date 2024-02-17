import { Label } from '@/components/common/Label';

export function NoImage() {
  return (
    <div className="flex size-full items-center justify-center bg-gray-300">
      <Label tag="h4" className=" text-zinc-700">
        No Image
      </Label>
    </div>
  );
}
