'use client';

import React, { useEffect, useState } from 'react';
import SummaryCardType from '@/types/SummaryCardType';
import { SummaryCard } from '@/stories/SummaryCard';
import { getFavoriteStorage } from '@/utils/favoriteStorage';

export default function Add() {
  const [ResponseJSON, setResponseJSON] = useState<SummaryCardType[]>([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const fetchData = await fetch('/api/events');
      const ResponseJSON = (await fetchData.json()) as SummaryCardType[];

      let newTags: String[] = [];
      ResponseJSON.map((prop) => {
        const { tag } = prop;

        if (tag[0]?.name && !newTags.includes(tag[0].name)) {
          newTags.push(tag[0].name);
        }
      });

      setResponseJSON(ResponseJSON);
    }

    fetchData();

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="flex size-full flex-col items-center space-y-5 pt-20">
      {Loading ? (
        <h2>Loading...</h2>
      ) : (
        ResponseJSON.map((prop, index) => {
          if (getFavoriteStorage().includes(prop.id)) {
            return <SummaryCard prop={prop} key={index} pulse={Loading} />;
          }
        })
      )}
    </div>
  );
}
