'use client';

import { useEffect, useState } from 'react';
import { SummaryCard } from '@/stories/SummaryCard';
import SummaryCardType from '@/types/SummaryCardType';
import { Input } from '@/stories/Input';
import fetchEvents from '@/utils/fetchEvents';

export default function Search() {
  const [ResponseJSON, setResponseJSON] = useState<SummaryCardType[]>([]);
  const [Loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState<string>('');

  useEffect(() => {
    async function fetchData() {
      const response = await fetchEvents();
      setResponseJSON(response as SummaryCardType[]);
      setLoading(false);
    }

    fetchData();
  }, []);

  function handle(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(e.target.value);
  }

  return (
    <div className="flex size-full flex-col items-center space-y-5 pt-20">
      <div className="w-full px-5">
        <Input id="search" onChange={(e) => handle(e)} placeholder="検索する文字" />
      </div>
      {Loading ? (
        <h2>Loading...</h2>
      ) : (
        ResponseJSON.flat().map((prop, index) => {
          if (prop.name.includes(searchText) || prop.tag[0].name.includes(searchText)) {
            return <SummaryCard prop={prop} key={index} pulse={Loading} />;
          }
        })
      )}
    </div>
  );
}
