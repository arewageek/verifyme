import { NextRequest, NextResponse } from "next/server";
import { generateAccessToken } from "@/utils/generate-access-token";
import * as nanoid from "nanoid";

export async function POST(request: NextRequest) {
  try {
    const response = await generateAccessToken(
      nanoid.nanoid(),
      "id-and-liveness",
      1200
    );
    return NextResponse.json(await response);
  } catch (error: any) {
    console.log({ error });
    return NextResponse.json(error.message);
  }
}
