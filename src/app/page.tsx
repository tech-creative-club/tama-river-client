import { SummaryCardComp } from '@/stories/SummaryCard';
import SummaryCardType from '@/types/SummaryCardType';
import { GET } from '@/app/api/events/route';
export const revalidate = 0;

export default async function Home() {
  const fetchData = await GET();
  const ResponseJSON = (await fetchData.json()) as SummaryCardType[];
  return (
    <>
      {ResponseJSON.map((prop, index) => {
        return <SummaryCardComp prop={prop} key={index} />;
      })}
    </>
  );
}
