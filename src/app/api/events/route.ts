// URL一覧とSummaryCardを定義
export const runtime = 'edge';
import SummaryCard from '@/types/SummaryCardType';
/**
 * @params URL一覧とSummaryCardの型を定義
 * @author CYUVi
 * @date 2024-02-02
 * @description URLはともかく、SummaryCardは正確にはHTMLを返すのか
 * それに相当するものを返すのかがわからないので、関連する情報だけを返すものとして定義
 */
// アプリ側

function randomSport() {
  const names = [
    ['地域づくりサッカー', 'soccer'],
    ['野球の試合', 'baseball'],
    ['ソフトボール大会', 'softball'],
    ['みんなでボッチャ！', 'boccia'],
  ];
  return names[Math.floor(Math.random() * names.length)];
}

function randomItems() {
  const maxItemCount = 4;
  const randomItemCount = Math.floor(Math.random() * maxItemCount) + 1;
  return Array.from({ length: randomItemCount }, () => {
    const [name, sport] = randomSport();
    return {
      id: '000000',
      name: name,
      sport: [sport],
      date: '2024-01-01T00:00:00Z',
      url: 'https://example.com',
      image: 'https://source.unsplash.com/700x500?park',
      location: {
        name: '〇〇広場',
        address: '住所',
        capacity: '100',
      },
    } as SummaryCard;
  });
}

async function Handler() {
  const content = randomItems();
  return Response.json(content);
}

export { Handler as GET };
