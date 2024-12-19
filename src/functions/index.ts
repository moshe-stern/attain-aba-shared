const BASE_URL =
  "https://db-api-manager-bucrh8bmd2d4ghdg.eastus-01.azurewebsites.net";
let SECRET_KEY: string | null = null;

async function auth(secretKey: string) {
  SECRET_KEY = secretKey;
}

async function doFetch(url: string, data?: any, method: string = "POST") {
  try {
    if (!SECRET_KEY) {
      throw new Error("Secret Key not set");
    }
    const options: RequestInit = {
      method: data ? method : "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "x-secret-key": SECRET_KEY,
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
