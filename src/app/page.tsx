import { SummaryCardComp } from '@/stories/SummaryCard';
import SummaryCardType from '@/types/SummaryCardType';
export const revalidate = 0;

export default async function Home() {
  const fetchData = await fetch(
    `${process.env.PUBLIC_URL ? process.env.PUBLIC_URL : 'http://localhost:3000'}/api/events`
  );
  const ResponseJSON = (await fetchData.json()) as SummaryCardType[];
  return (
    <>
      {ResponseJSON.map((plop, index) => {
        return <SummaryCardComp plop={plop} key={index} />;
      })}
    </>
  );
}
