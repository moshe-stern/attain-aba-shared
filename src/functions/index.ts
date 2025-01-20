import dotenv from 'dotenv'
dotenv.config()
const BASE_URL = process.env.NODE_ENV === 'DEVELOPMENT' ? process.env.SERVER : process.env.DEV_SERVER
let SECRET_KEY: string | null = null;

async function auth(secretKey: string) {
  SECRET_KEY = secretKey;
}

async function doFetch(url: string, data?: any, method: string = "POST") {
  try {
    const options: RequestInit = {
      method: data ? method : "GET",
      headers: {
        "Content-Type": "application/json",
        "SECRET_KEY": SECRET_KEY,
      },
      ...(data && { body: JSON.stringify(data) }),
    };

    const response = await fetch(url, options);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export * from "./api";
export { BASE_URL, doFetch, auth };
