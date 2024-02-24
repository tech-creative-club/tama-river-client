'use client';

import { SummaryCard } from '@/components/common/SummaryCard';
import { useEffect, useState } from 'react';
import { TagButton } from '@/components/TagButton';
import { SummaryCardProp } from '@/components/common/SummaryCard';
import { Notification } from '@/components/common/Notification';

type DeviceType = 'mobile' | 'desktop';

interface RenderComponentProps {
  summaryCardJSON: SummaryCardProp[];
  Loading: boolean;
  tags: string[];
  selectedTag: string;
  setTag: (tagStr: string) => void;
  device: DeviceType;
}

const deviceType = {
  mobile: 'mobile',
  desktop: 'desktop',
};

function DesktopRenderComponent(props: RenderComponentProps) {
  const { summaryCardJSON, Loading, tags, selectedTag, setTag } = props;
  const notificationText = `タグごとに情報のジャンル分けができ、画像をタップすると本記事に飛びます。
  いいねを押すとお気に入りを保存できます。`;
  return (
    <>
      <div className="w-full max-w-7xl p-5 pb-0">
        <Notification title="使い方ヒント" text={notificationText} notificationType="info" />
        <TagButton tags={tags} selectedTag={selectedTag} onClick={(str) => setTag(str)} variant="normal" />
      </div>
      <div className="hidden h-fit w-full max-w-7xl grid-cols-4 gap-4 md:grid">
        {summaryCardJSON.map((prop, index) => {
          if (selectedTag === 'すべて' || prop.tags[0].name === selectedTag) {
            return <SummaryCard prop={prop} key={index} loading={Loading} desktop={true} />;
          }
        })}
      </div>
    </>
  );
}

function MobileRenderComponent(props: RenderComponentProps) {
  const { summaryCardJSON, Loading, tags, selectedTag, setTag } = props;
  const notificationText = `タグごとに情報のジャンル分けができ、画像をタップすると本記事に飛びます。
  いいねを押すとお気に入りを保存できます。`;
  return (
    <div className="size-full max-w-md">
      <div className="flex flex-col space-y-5 pb-5">
        <Notification
          title="使い方ヒント"
          text={notificationText}
          notificationType="info"
        />
        <div className="p-5 pt-0">
          <TagButton
            tags={tags}
            selectedTag={selectedTag}
            onClick={(tagStr) => setTag(tagStr)}
            variant="wrapped"
          />
        </div>
        <div className="divide-y-smart border-border">
          {summaryCardJSON.map((prop, index) => {
            if (selectedTag === 'すべて' || prop.tags[0].name === selectedTag) {
              return <SummaryCard prop={prop} key={index} loading={Loading} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}

function RenderComponent(props: RenderComponentProps) {
  const { device } = props;
  return (
    <>
      {device === deviceType.mobile ? (
        <MobileRenderComponent {...props} />
      ) : (
        <DesktopRenderComponent {...props} />
      )}
    </>
  );
}

export default function Home() {
  const [summaryCardJSON, setSummaryCardJSON] = useState<SummaryCardProp[]>([]);
  const [Loading, setLoading] = useState(true);
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTag, setTag] = useState<string>('すべて');

  useEffect(() => {
    async function fetchData() {
      const response = (await (await fetch('/api/events')).json()) as SummaryCardProp[];
      setSummaryCardJSON(response);
      //setLoading(false);
      const Tags: string[] = response
        .map((e) => {
          return e.tags;
        })
        .flat()
        .map((e) => {
          return e.name;
        });
      const uniqueTags = Array.from(new Set(Tags).values());
      setTags(['すべて', ...uniqueTags]);

      // TODO: 視覚と聴覚障害は別だろうと思うのと、発達障害と精神障害は同じ括りで良いかもしれない。
    }

    fetchData();

    setTimeout(() => {
      setLoading(false);
    }, 1000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const props = { summaryCardJSON, Loading, tags, selectedTag, setTag };
  return (
    <main className="flex-1 overflow-scroll">
      {/* スマホ&タブレット用 */}
      <div className="flex size-full justify-center space-y-5 p-2 md:hidden">
        <RenderComponent device="mobile" {...props} />
      </div>
      {/* PC用 */}
      <div className="hidden size-full flex-col items-center md:flex">
        <RenderComponent device="desktop" {...props} />
      </div>
    </main>
  );
}
