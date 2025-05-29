// app/api/download-brochure/route.ts
import { NextRequest } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest) {
  // const data = await req.json();
  const url = "https://d24ksaw8earfo7.cloudfront.net/brochure-sample.pdf";

  try {
    const axiosResponse = await axios.get(url, {
      responseType: "stream",
    });

    const stream = axiosResponse.data;

    const headers = new Headers();
    headers.set("Content-Type", "application/pdf");
    headers.set(
      "Content-Disposition",
      'attachment; filename="sattva-bhumi-brochure.pdf"'
    );
    return new Response(stream as any, {
      status: 200,
      headers,
    });
  } catch (error: any) {
    console.error("Download error:", error.message);
    return new Response("Failed to download PDF", { status: 500 });
  }
}
