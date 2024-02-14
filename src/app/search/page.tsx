'use client';

import { useEffect, useState } from 'react';
import { SummaryCard } from '@/stories/SummaryCard';
import { Input } from '@/stories/Input';
import fetchEvents from '@/utils/fetchEvents';

export default function Search() {
  const [ResponseJSON, setResponseJSON] = useState<any[]>([]);
  const [Loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState<string>('');

  useEffect(() => {
    async function fetchData() {
      const response = await fetchEvents();
      setResponseJSON(response as any[]);

      let newTags: String[] = [];
      ResponseJSON.flat().map((prop) => {
        const { tag } = prop;

        if (tag[0]?.name && !newTags.includes(tag[0].name)) {
          newTags.push(tag[0].name);
        }
      });
    }

    fetchData();

    setTimeout(() => {
      setLoading(false);
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handle() {
    const input = document.getElementById('search') as HTMLInputElement;
    setSearchText(input.value);
  }

  return (
    <div className="flex size-full flex-col items-center space-y-5 pt-20">
      <div className="w-full px-5">
        <Input id="search" onChange={() => handle()} placeholder="検索する文字" />
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
