'use client';

import React, { useEffect, useState } from 'react';
import { SummaryCard } from '@/stories/SummaryCard';
import SummaryCardType from '@/types/SummaryCardType';
import { getFavoriteStorage } from '@/utils/favoriteStorage';
import fetchEvents from '@/utils/fetchEvents';

export default function Favorite() {
  const [ResponseJSON, setResponseJSON] = useState<SummaryCardType[]>([]);
  const [Loading, setLoading] = useState(true);
  const [favoritesCount, setFavoritesCount] = useState<number>(0);

  useEffect(() => {
    async function fetchData() {
      const response = await fetchEvents();
      setResponseJSON(response as SummaryCardType[]);
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <div className="flex size-full flex-col items-center space-y-5 pt-20">
      {Loading ? (
        <h2>Loading...</h2>
      ) : favoritesCount === 0 ? (
        <h2>お気に入りがありません</h2>
      ) : (
        ResponseJSON.map((prop, index) => {
          if (getFavoriteStorage().includes(prop.url)) {
            setFavoritesCount(favoritesCount + 1);
            return <SummaryCard prop={prop} key={index} pulse={Loading} />;
          }
        })
      )}
    </div>
  );
}
