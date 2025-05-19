import crypto from "crypto";

export default function createSignature(url: string) {
  console.log("Creating a signature...");

  const secret = process.env.SUMSUB_SECRET_KEY!;

  const timestamp = Math.floor(Date.now() / 1000);
  const signature = crypto.createHmac("sha256", secret);

  signature.update(timestamp + "POST" + url);

  //   if (config.data instanceof FormData) {
  //     signature.update(config.data.getBuffer());
  //   } else if (config.data) {
  //     signature.update(config.data);
  //   }

  //   config.headers["X-App-Access-Ts"] = timestamp;
  //   config.headers["X-App-Access-Sig"] = signature.digest("hex");

  return { signature: signature.digest("hex"), timestamp };
}
