'use client';

export default function Page() {
  function cleaeStorage() {
    localStorage.clear();
    console.log('cleared');
  }

  return (
    <div className="flex size-full flex-col items-center">
      <div className="hidden-scrollbar size-full max-w-7xl overflow-scroll p-5 pb-0">
        <div className="relative flex size-full flex-col">
          <h2 className="text-2xl font-semibold">設定</h2>
          <div className="grid size-full max-w-7xl grid-cols-2 gap-8 py-5 md:grid-cols-3">
            <div className=" rounded-lg border-2 p-5">
              <h2 className="pb-5 text-xl font-semibold">ローカルストレージの削除</h2>
              <p className="text-sm text-secondary-foreground">
                これを実行するとローカルストレージ内のキーが全て削除されます。
              </p>
              <button
                className="mt-5 w-full rounded-lg bg-primary p-3 font-semibold text-white"
                onClick={() => cleaeStorage()}
              >
                実行
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
