// URL一覧とSummaryCardを定義
import { NextRequest} from "next/server";
export const runtime = "edge";
import SummaryCard from '@/types/SummaryCardType';
/**  
 * @params URL一覧とSummaryCardの型を定義
 * @author CYUVi
 * @date 2024-02-02
 * @description URLはともかく、SummaryCardは正確にはHTMLを返すのか
 * それに相当するものを返すのかがわからないので、関連する情報だけを返すものとして定義
 */
// アプリ側

async function Handler(
    request: Request
) {
    const Examples: SummaryCard[] = [
        {
            id: "000000",
            name: "イベントの名前",
            sport: ["soccer"],
            date: "2024-01-01T00:00:00Z",
            url: "https://example.com",
            image: "https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg",
            location: {
              name: "〇〇広場",
              address: "住所",
              capacity: "100"
            },
        },{
            id: "000000",
            name: "イベントの名前",
            sport: ["soccer"],
            date: "2024-01-01T00:00:00Z",
            url: "https://example.com",
            image: "https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg",
            location: {
              name: "〇〇広場",
              address: "住所",
              capacity: "100"
            },
        }
    ]

    return Response.json(Examples);
}
export { Handler as GET}
