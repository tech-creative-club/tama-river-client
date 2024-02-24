'use client';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import { useState } from 'react';
import SocialLink from '@/components/misc/SocialLink';
import GitHubIcon from '@mui/icons-material/GitHub';

interface SnackbarState extends SnackbarOrigin {
  open: boolean;
};

const usedOSSLibs = `タマリバは
Next.js
Tailwind CSS
MUI componentで構成されています。`

export default function Page() {

  const [snackbarState, setSnackbarState] = useState<SnackbarState>({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = snackbarState;

  const handleClick = (newState: SnackbarOrigin) => () => {
    setSnackbarState({ ...newState, open: true });
  }

  const handleClose = () => {
    setSnackbarState({ ...snackbarState, open: false });
  }

  function cleaeStorage() {
    localStorage.clear();
    console.log('cleared');
    handleClick({ vertical: 'top', horizontal: 'center' })();
  }

  return (
    <div className="flex size-full flex-col items-center">
      <div className="hidden-scrollbar size-full max-w-7xl overflow-scroll p-5 pb-0">
        <div className="relative flex size-full flex-col">
          <h2 className="text-2xl font-semibold">設定・その他</h2>
          <div className="grid size-full max-w-7xl grid-rows-2 gap-8 py-5 md:grid-cols-3">
            <div className="w-full rounded-lg border-2 p-5">
              <h2 className="pb-5 text-xl font-semibold">タマリバユーザデータのリセット</h2>
              <p className="text-sm text-secondary-foreground">
                これを実行するといいね情報などが全てリセットされます。
              </p>
              <button
                className="mt-5 w-full rounded-lg bg-primary p-3 font-semibold text-white"
                onClick={() => {cleaeStorage()}}
              >
                実行
              </button>
              <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="リセットしました"

              />
            </div>
            <div className="w-full rounded-lg border-2 p-5">
              <h2 className="pb-5 text-xl font-semibold">使用技術について</h2>
              <p className="whitespace-normal text-sm text-secondary-foreground">
                {usedOSSLibs}
              </p>
              <SocialLink Icon={GitHubIcon} id="tama-river-client" href="https://github.com/tech-creative-club/tama-river-client" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
