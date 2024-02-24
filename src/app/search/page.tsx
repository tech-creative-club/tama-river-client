'use client';

import { useEffect, useState } from 'react';
import { SummaryCard, SummaryCardProp } from '@/components/common/SummaryCard';
import TextField from '@mui/material/TextField';

export default function Search() {
  const [ResponseJSON, setResponseJSON] = useState<SummaryCardProp[]>([]);
  const [Loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState<string>('');

  useEffect(() => {
    async function fetchData() {
      const response = (await (await fetch('/api/events')).json()) as SummaryCardProp[];
      setResponseJSON(response as SummaryCardProp[]);
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <div className="flex size-full flex-col items-center space-y-5 pt-20">
      <div className="w-full px-5">
        <TextField
          label="検索"
          variant="outlined"
          fullWidth
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      {Loading ? (
        <h2>Loading...</h2>
      ) : (
        ResponseJSON.flat().map((prop, index) => {
          if (prop.title.includes(searchText) || prop.tags[0].name.includes(searchText)) {
            return <SummaryCard prop={prop} key={index} loading={Loading} />;
          }
        })
      )}
    </div>
  );
}
