// URL一覧とSummaryCardを定義
export const runtime = 'edge';
import SummaryCard from '@/types/SummaryCardType';
import { nanoid } from 'nanoid';
import { fakeDataJson } from './const';

/**
 * @params URL一覧とSummaryCardの型を定義
 * @author CYUVi
 * @date 2024-02-02
 * @description URLはともかく、SummaryCardは正確にはHTMLを返すのか
 * それに相当するものを返すのかがわからないので、関連する情報だけを返すものとして定義
 */
// アプリ側

type Names = [string, string, Tag];
type Tag = '身体障害' | '発達障害' | '視覚・聴覚障害' | '知的障害' | '精神障害';

function randomSport() {
  const names = [
    ['地域づくりサッカー', 'soccer', '身体障害'],
    ['野球の試合', 'baseball', '発達障害'],
    ['ソフトボール大会', 'softball', '視覚・聴覚障害'],
    ['みんなでボッチャ！', 'boccia', '知的障害'],
  ] as Names[];
  return names[Math.floor(Math.random() * names.length)];
}

function randomItems() {
  const maxItemCount = 10;
  const randomItemCount = Math.floor(Math.random() * maxItemCount) + 4;
  return Array.from({ length: randomItemCount }, () => {
    const [name, sport, tag] = randomSport();
    return {
      id: nanoid(8),
      title: name,
      sport: [sport],
      tag: [{ name: tag }],
      date: '2024-01-01T00:00:00Z',
      url: 'https://example.com',
      image_url: 'https://source.unsplash.com/700x500?park',
      location: {
        name: '〇〇広場',
        address: '住所',
        capacity: '100',
      },
    } as SummaryCard;
  });
}

async function Handler() {
  // const content: SummaryCard[] = randomItems();
  const content: SummaryCard[] = fakeDataJson;
  return Response.json(content);
}

export { Handler as GET };
