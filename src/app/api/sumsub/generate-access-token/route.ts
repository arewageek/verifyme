import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import createSignature from "@/utils/create-signature";
import main, { createAccessToken } from "@/utils/example";

export async function POST(request: NextRequest) {
  const accessToken = process.env.SUMSUB_ACCESS_TOKEN!;

  const url = "https://api.sumsub.com/resources/accessTokens/sdk";

  const config = {
    baseUrl: "https://api.sumsub.com",
  };

  try {
    const response = await axios(
      createAccessToken("arewa", "id-and-liveness", 1200)
    );
    return NextResponse.json(await response.data);
  } catch (error: any) {
    console.log({ error });
    return NextResponse.json(error.message);
  }
}
