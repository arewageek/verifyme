import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const url = "https://api.sumsub.com/resources/accessTokens/sdk";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-App-Token":
        "sbx:h65BzmO2PTUG8Wxbpi9hsYjZ.s98p5Bgzl4di5jp0Ym8V1T9sQFZKpf74",
    },
    body: JSON.stringify({
      applicantIdentifiers: { email: "arewageek@gmail.com" },
      ttlInSecs: 600,
      levelName: "id-and-liveness",
      userId: "arewa",
    }),
  };

  try {
    let response = await fetch(url, options);
    const res = await response.json();

    return NextResponse.json(res);
  } catch (error: any) {
    console.log({ error });
    return NextResponse.json(error.message);
  }
}
