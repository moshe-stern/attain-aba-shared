import { BASE_URL, doFetch } from "..";
import { IClientResponseRecord, IProvider } from "../../types";

async function getProvidersByEmail(
  emails: string[],
): Promise<IProvider[] | undefined> {
  const res = await doFetch(
    BASE_URL + "/providers/providers-by-emails",
    emails,
  );
  return res ? res.json() : undefined;
}

async function createClientResponse(rec: Omit<IClientResponseRecord, "id">) {
  const res = await doFetch(BASE_URL + "/twilio/client-response", rec);
  return res ? res.ok : undefined;
}

async function getClientResponseByPhoneNumber(
  number: string,
): Promise<IClientResponseRecord | undefined> {
  const res = await doFetch(
    BASE_URL + `/twilio/client-response?phoneNumber=${number}`,
  );
  return res ? res.json() : undefined;
}

export {
  getProvidersByEmail,
  createClientResponse,
  getClientResponseByPhoneNumber,
};
