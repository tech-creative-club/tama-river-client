'use client';

import { SummaryCard } from '@/stories/SummaryCard';
import SummaryCardType from '@/types/SummaryCardType';
import { useEffect, useState } from 'react';
import { Card } from '@/stories/Card';
import { Label } from '@/stories/Label';
import { GET } from '@/app/api/events/route';
import { Button } from '@/stories/Button';

export default function Home() {
  const [ResponseJSON, setResponseJSON] = useState<SummaryCardType[]>([]);
  const [Loading, setLoading] = useState(true);
  const [tags, setTags] = useState<String[]>([]);
  const [selectedTag, setTag] = useState<String>('すべて');

  useEffect(() => {
    async function fetchData() {
      const fetchData = await GET();
      const ResponseJSON = (await fetchData.json()) as SummaryCardType[];

      let newTags: String[] = [];
      ResponseJSON.map((prop) => {
        const { tag } = prop;

        if (tag[0]?.name && !newTags.includes(tag[0].name)) {
          newTags.push(tag[0].name);
        }
      });

      setTags(newTags);
      setResponseJSON(ResponseJSON);
    }

    fetchData();

    setTimeout(() => {
      setLoading(false);
    }, 2000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSelect(str: String) {
    setTag(str);
  }

  return (
    <div className="flex size-full justify-center space-y-5 p-2">
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
                <Button onClick={() => handleSelect('すべて')} active={selectedTag === 'すべて'}>
                  <Label innerText="すべて" size="secondary" weight="medium" />
                </Button>
                {tags?.map((tag, index) => {
                  return (
                    <Button key={index} onClick={() => handleSelect(tag)} active={selectedTag === tag}>
                      <Label innerText={tag as string} size="secondary" weight="medium" />
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="divide-y-smart border-border">
            {ResponseJSON.map((prop, index) => {
              if (selectedTag === 'すべて' || prop.tag[0].name === selectedTag) {
                return <SummaryCard prop={prop} key={index} pulse={Loading} />;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
