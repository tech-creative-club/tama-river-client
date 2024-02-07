import React from 'react';
import { Label } from './Label';

export const QRCodeReader = () => {
  return (
    <div className="absolute left-0 top-0 flex h-screen w-screen flex-col items-center justify-center space-y-5 bg-black/85">
      <Label innerText="QRコードを枠内にうつしてください" className="text-white" />
      <div className="relative size-60 bg-gray-500">
        <div>
          <div className="absolute left-2 top-2 h-8 w-1.5 bg-white"></div>
          <div className="absolute left-2 top-2 h-1.5 w-8 bg-white"></div>
        </div>
        <div>
          <div className="absolute right-2 top-2 h-8 w-1.5 bg-white"></div>
          <div className="absolute right-2 top-2 h-1.5 w-8 bg-white"></div>
        </div>
        <div>
          <div className="absolute bottom-1 left-2 h-8 w-1.5 bg-white"></div>
          <div className="absolute bottom-1 left-2 h-1.5 w-8 bg-white"></div>
        </div>
        <div>
          <div className="absolute bottom-1 right-2 h-8 w-1.5 bg-white"></div>
          <div className="absolute bottom-1 right-2 h-1.5 w-8 bg-white"></div>
        </div>
      </div>
    </div>
  );
};
