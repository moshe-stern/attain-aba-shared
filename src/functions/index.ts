const BASE_URL =
  "https://db-api-manager-bucrh8bmd2d4ghdg.eastus-01.azurewebsites.net";

async function doFetch(url: string, data?: any) {
  try {
    const options = data
      ? {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      : null;
    const response = options ? await fetch(url, options) : await fetch(url);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export * from "./api";
export { BASE_URL, doFetch };
