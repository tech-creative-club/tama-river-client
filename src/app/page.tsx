'use client';

import { SummaryCardComp } from '@/stories/SummaryCard';
import SummaryCardType from '@/types/SummaryCardType';
import { useEffect, useState } from 'react';

export default function Home() {
  const [ResponseJSON, setResponseJSON] = useState<SummaryCardType[]>([]);

  useEffect(() => {
    async function fetchData() {
      const fetchData = await fetch(
        `${process.env.PUBLIC_URL ? process.env.PUBLIC_URL : 'http://localhost:3000'}/api/events`
      );

      setResponseJSON((await fetchData.json()) as SummaryCardType[]);
    }

    fetchData();
  }, []);

  return (
    <div className="p-5">
      {ResponseJSON.map((plop, index) => {
        return <SummaryCardComp plop={plop} key={index} />;
      })}
    </div>
  );
}
