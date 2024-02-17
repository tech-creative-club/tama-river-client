'use client';
import React, { useEffect, useState } from 'react';
import { SummaryCard, SummaryCardProp } from '@/stories/SummaryCard';

export default function Favorite() {
  const [favoriteSummaryCardJSON, setFavoriteSummaryCardJSON] = useState<SummaryCardProp[]>([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await (await fetch('/api/events')).json() as SummaryCardProp[];
      const favorites = JSON.parse(localStorage.getItem('favorite') ?? '[]');
      const favSumCardJSON = response.filter((event) => favorites.includes(event.url));
      setFavoriteSummaryCardJSON(favSumCardJSON);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div className="flex size-full flex-col items-center space-y-5 pt-20">
      {Loading ? (
        <h2>Loading...</h2>
      ) : favoriteSummaryCardJSON.length === 0 ? (
        <h2>お気に入り登録するとここに表示されます！</h2>
      ) : (
        favoriteSummaryCardJSON.map((prop, index) => {
          return <SummaryCard prop={prop} key={index} loading={Loading} />;
        })
      )}
    </div>
  );
}
