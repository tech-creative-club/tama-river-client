'use client';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const cleanStorage = () => {
    localStorage.clear();
    console.log('cleared');
    router.push('/');
  };
  return (
    <div>
      <h1>デバッグ用：ストレージ削除</h1>
      <Button
        onClick={() => {
          cleanStorage();
        }}
        variant="contained"
        className="bg-blue-500"
      >
        storage削除
      </Button>
    </div>
  );
}
