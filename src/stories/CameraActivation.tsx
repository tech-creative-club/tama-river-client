import { Noto_Sans_JP } from 'next/font/google';
import QrCodeScanner from '@/components/icons/QrCodeScanner';

const NotoSansJP = Noto_Sans_JP({ subsets: ['latin'] });

export const CameraActivation = () => (
  <div
    className={`flex w-fit min-w-80 justify-center rounded-md border-2 border-zinc-900 bg-white ${NotoSansJP.className}`}
  >
    <div className="inline-flex flex-col items-center justify-start gap-5 px-10 py-7">
      <QrCodeScanner />
      <div className="text-center text-sm font-semibold text-zinc-900">カメラでQRコードを読み取る</div>
    </div>
  </div>
);