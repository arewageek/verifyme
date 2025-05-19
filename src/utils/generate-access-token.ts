import axios, { AxiosResponse } from "axios";
import { createAccessToken } from "./sumsub";

interface SumsubTokenResponse {
  token: string;
  userId: string;
  expiresIn: number;
  // Add other response fields as needed
}

export async function generateAccessToken(
  externalUserId: string,
  levelName: string = "id-and-liveness",
  ttlInSecs: number = 1200
): Promise<SumsubTokenResponse | undefined> {
  try {
    const config = createAccessToken(externalUserId, levelName, ttlInSecs);
    const response: AxiosResponse<SumsubTokenResponse> = await axios(config);

    console.log("Access Token Generated:", {
      token: response.data.token,
      expiresIn: response.data.expiresIn,
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Sumsub API Error:", {
        status: error.response?.status,
        data: error.response?.data,
        url: error.config?.url,
      });
    } else {
      console.error("Unexpected Error:", error);
    }
    throw error; // Re-throw to let caller handle it
  }
}
