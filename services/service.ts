import Axios from "axios";
export const UPLOADS_BASE_URL = "/images";
export const BASE_URL = process.env.BASE_URL + "/api";

export const doFetch = async (url: string) => {
  try {
    const response = await Axios(BASE_URL + url, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_KEY}`,
      },
      responseType: "json",
    });
    return response.data.data[0].attributes as any;
  } catch (error) {
    console.error("API call error:", error);
    throw error;
  }
};



