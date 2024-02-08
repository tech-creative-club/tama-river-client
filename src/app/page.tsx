'use client';

import { SummaryCard } from '@/stories/SummaryCard';
import SummaryCardType from '@/types/SummaryCardType';
import { useEffect, useState } from 'react';
import { Card } from '@/stories/Card';
import { Label } from '@/stories/Label';
import { GET } from '@/app/api/events/route';

export default function Home() {
  const [ResponseJSON, setResponseJSON] = useState<SummaryCardType[]>([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const fetchData = await GET();

      setResponseJSON((await fetchData.json()) as SummaryCardType[]);
    }

    fetchData();

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

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
          <div className="divide-y-smart border-border">
            {ResponseJSON.map((prop, index) => {
              return <SummaryCard prop={prop} key={index} pulse={Loading} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
