import { NextRequest } from "next/server";
import crypto from "crypto";

export async function POST(request: NextRequest) {
  const url =
    "https://api.sumsub.com/resources/applicants?levelName=id-and-liveness";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-App-Token":
            "sbx:h65BzmO2PTUG8Wxbpi9hsYjZ.s98p5Bgzl4di5jp0Ym8V1T9sQFZKpf74",
      "X-App-Secret"
    },
    body: JSON.stringify({ externalUserId: "arewa" }),
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => console.log({ json }))
    .catch((err) => console.error(err));
}