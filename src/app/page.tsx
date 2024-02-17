'use client';

import { SummaryCard } from '@/stories/SummaryCard';
import { useEffect, useState } from 'react';
import { TagButton } from '@/stories/TagButton'; // TODO: storiesからimportするのやめろ
import { SummaryCardType } from '@/stories/SummaryCard';
import { Notification } from '@/stories/Notification';

interface RenderComponentProps {
  summaryCardJSON: SummaryCardType[];
  Loading: boolean;
  tags: string[];
  selectedTag: string;
  setTag: (tagStr: string) => void;
}

function RenderComponent(props: RenderComponentProps) {
  const { summaryCardJSON, Loading, tags, selectedTag, setTag } = props;
  // 共通描画責務を持つコンポーネント
  return (
    <div className="size-full max-w-md">
      <div className="flex flex-col space-y-5 pb-5">
        <Notification
          title="開発中のお知らせ"
          text="現在開発中の画面のため、本番とは違う可能性があります。"
          notificationType="warning"
        />
        <div className="p-5 pt-0">
          <div className="hidden-scrollbar w-full overflow-scroll">
            <div className="flex flex-row space-x-3">
              <TagButton tags={tags} selectedTag={selectedTag} onClick={(tagStr) => setTag(tagStr)} />
            </div>
          </div>
        </div>
        <div className="divide-y-smart border-border">
          {summaryCardJSON.map((prop, index) => {
            if (selectedTag === 'すべて' || prop.tag[0].name === selectedTag) {
              return <SummaryCard prop={prop} key={index} loading={Loading} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [summaryCardJSON, setSummaryCardJSON] = useState<SummaryCardType[]>([]);
  const [Loading, setLoading] = useState(true);
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTag, setTag] = useState<string>('すべて');

  useEffect(() => {
    async function fetchData() {
      let response = await (await fetch('/api/events')).json() as SummaryCardType[];
      setSummaryCardJSON(response);
      // TODO: ここでタグを取得する処理を書く
      // TODO: 視覚と聴覚障害は別だろうと思うのと、発達障害と精神障害は同じ括りで良いかもしれない。
      setTags(['すべて', '身体障害', '発達障害', '視覚・聴覚障害', '知的障害', '精神障害']);
    }

    fetchData();

    setTimeout(() => {
      setLoading(false);
    }, 2000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className='flex-1 overflow-scroll'>
      {/* TODO: コンポーネントを切り出す */}
      {/* スマホ&タブレット用 */}
      <div className="flex size-full justify-center space-y-5 p-2 md:hidden">
        {/* <RenderComponent summaryCardJSON={summaryCardJSON} Loading={Loading} tags={tags} selectedTag={selectedTag} setTag={setTag} /> */}
        <Notification title="テスト" text="描画テスト中" notificationType="warning" />
      </div>
      {/* PC用 */}
      <div className="hidden size-full flex-col items-center md:flex">
        {/* <div className="hidden-scrollbar w-full max-w-7xl overflow-scroll p-5 pb-0">
          <Notification title="開発中のお知らせ" text="現在開発中の画面のため、本番とは違う可能性があります。" notificationType="warning"/>
          <div className="flex flex-row space-x-3">
            <TagButton tags={tags} selectedTag={selectedTag} onClick={(str) => setTag(str)} />
          </div>
        </div>
        <div className="hidden h-fit w-full max-w-7xl grid-cols-4 gap-4 md:grid">
          {summaryCardJSON.map((prop, index) => {
            if (selectedTag === 'すべて' || prop.tag[0].name === selectedTag) {
              return <SummaryCard prop={prop} key={index} loading={Loading} desktop={true} />;
            }
          })}
        </div> */}
        <Notification title="テスト" text="描画テスト中" notificationType="warning" />
      </div>
    </main>
  );
}
