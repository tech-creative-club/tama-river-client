// URL一覧とSummaryCardを定義
import type { NextRequest } from "next/server";
export const runtime = "edge";
// アプリ側

export async function GET(request: NextRequest) {
    /**  
     * @params URL一覧とSummaryCardの型を定義
     * @author CYUVi
     * @date 2024-02-02
     * @description URLはともかく、SummaryCardは正確にはHTMLを返すのか
     * それに相当するものを返すのかがわからないので、関連する情報だけを返すものとして定義
     */
    type SummaryCard = {
        title: string,
        summary: string,
        url: string,
        contents_img: string
    }

    // 
    const Example: SummaryCard = {
        title: "Example",
        summary: "This is an example.",
        url: "https://example.com",
        contents_img: "https://example.com/contents.jpg"
    }

    return new Response(JSON.stringify(Example));
}