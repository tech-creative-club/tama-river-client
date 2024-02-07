'use client';

import { SummaryCardComp } from '@/stories/SummaryCard';
import SummaryCardType from '@/types/SummaryCardType';
import { useEffect, useState } from 'react';

export default function Home() {
  const [ResponseJSON, setResponseJSON] = useState<SummaryCardType[]>([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const fetchData = await fetch(
        `${process.env.PUBLIC_URL ? process.env.PUBLIC_URL : 'http://localhost:3000'}/api/events`
      );

      setResponseJSON((await fetchData.json()) as SummaryCardType[]);
    }

    fetchData();

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="flex h-full w-full justify-center space-y-5 p-2">
      <div className="w-full h-full max-w-md">
        <div className="flex flex-col space-y-5 divide-y-smart border-border pb-10">
          {ResponseJSON.map((plop, index) => {
            return <SummaryCardComp plop={plop} key={index} pulse={Loading} />;
          })}
        </div>
      </div>
    </div>
  );
}
