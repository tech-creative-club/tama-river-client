'use client';

import React, { useEffect, useState } from 'react';
import { SummaryCard } from '@/stories/SummaryCard';
import { getFavoriteStorage } from '@/utils/favoriteStorage';
import fetchEvents from '@/utils/fetchEvents';

export default function Favorite() {
  const [ResponseJSON, setResponseJSON] = useState<any[]>([]);
  const [Loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState<number>(0);

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

  return (
    <div className="flex size-full flex-col items-center space-y-5 pt-20">
      {Loading ? (
        <h2>Loading...</h2>
      ) : (
        ResponseJSON.map((prop, index) => {
          if (getFavoriteStorage().includes(prop.id)) {
            setFavorites(favorites + 1);
            return <SummaryCard prop={prop} key={index} pulse={Loading} />;
          }
        })
      )}
      {!Loading && favorites === 0 ? <h2>お気に入りはありません</h2> : null}
    </div>
  );
}
