'use client';

import { SummaryCard } from '@/stories/SummaryCard';
import { useEffect, useState } from 'react';
import { Card } from '@/stories/Card';
import { Label } from '@/stories/Label';
import { TagButton } from '@/stories/TagButton';
import SummaryCardType from '@/types/SummaryCardType';

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
      setTags(['すべて', '身体障害', '発達障害', '視覚・聴覚障害', '知的障害', '精神障害']);
    }

    fetchData();

    setTimeout(() => {
      setLoading(false);
    }, 2000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* スマホ&タブレット用 */}
      <div className="flex size-full justify-center space-y-5 p-2 md:hidden">
        <div className="size-full max-w-md">
          <div className="flex flex-col space-y-5 pb-5">
            <Card>
              <div className="flex flex-col space-y-1.5">
                <Label innerText="注意！" weight="medium" size="primary" />
                <Label
                  innerText="開発中の画面のため、リリース版とは一部使用が異なる場合がございます。"
                  weight="normal"
                  size="secondary"
                  className="text-muted-foreground"
                />
              </div>
            </Card>
            <div className="p-5 pt-0">
              <div className="hidden-scrollbar w-full overflow-scroll">
                <div className="flex flex-row space-x-3">
                  <TagButton tags={tags} selectedTag={selectedTag} onClick={(str) => setTag(str)} />
                </div>
              </div>
            </div>
            <div className="divide-y-smart border-border">
              {summaryCardJSON.map((prop, index) => {
                if (selectedTag === 'すべて' || prop.tag[0].name === selectedTag) {
                  return <SummaryCard prop={prop} key={index} pulse={Loading} />;
                }
              })}
            </div>
          </div>
        </div>
      </div>
      {/* PC用 */}
      <div className="hidden size-full flex-col items-center md:flex">
        <div className="hidden-scrollbar w-full max-w-7xl overflow-scroll p-5 pb-0">
          <div className="flex flex-row space-x-3">
            <TagButton tags={tags} selectedTag={selectedTag} onClick={(str) => setTag(str)} />
          </div>
        </div>
        <div className="hidden h-fit w-full max-w-7xl grid-cols-4 gap-4 md:grid">
          {summaryCardJSON.map((prop, index) => {
            if (selectedTag === 'すべて' || prop.tag[0].name === selectedTag) {
              return <SummaryCard prop={prop} key={index} pulse={Loading} desktop={true} />;
            }
          })}
        </div>
      </div>
    </>
  );
}
