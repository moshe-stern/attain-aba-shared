import { BASE_URL, doFetch } from "..";
import {
  IClient,
  IClientResponseRecord,
  ICubeStatus,
  IProvider,
} from "../../types";

async function getProvidersByEmail(
  emails: string[],
): Promise<IProvider[] | undefined> {
  const res = await doFetch(
    BASE_URL + "/providers/providers-by-emails",
    emails,
  );
  return res?.ok ? res.json() : undefined;
}

async function createClientResponse(rec: Omit<IClientResponseRecord, "id">) {
  const res = await doFetch(BASE_URL + "/twilio/client-response", rec);
  return res?.ok;
}

async function getClientResponseByPhoneNumber(
  number: string,
): Promise<IClientResponseRecord | undefined> {
  const res = await doFetch(
    BASE_URL + `/twilio/client-response?phoneNumber=${number}`,
  );
  return res?.ok ? res.json() : undefined;
}

async function getClientByPhoneNumber(
  number: string,
): Promise<IClient | undefined> {
  const res = await doFetch(BASE_URL + `/client?phoneNumber=${number}`);
  return res?.ok ? res.json() : undefined;
}

async function getCubeStatuses(): Promise<ICubeStatus[] | undefined> {
  const res = await doFetch(BASE_URL + "/cube-status");
  return res?.ok ? res.json() : undefined;
}

async function getMsgBoard() {
  const res = await doFetch(BASE_URL + "/cube-status/message-board");
  return res?.ok ? res.json() : undefined;
}

async function updateMsgBoard(message: string) {
  const res = await doFetch(
    BASE_URL + "/cube-status/message-board",
    { message },
    "PATCH",
  );
  return res?.ok ? res.json() : undefined;
}

async function getSecret(token: string) {
  return fetch(BASE_URL + "/secret-key", {
    method: "POST",
    body: JSON.stringify(token),
  });
}

export {
  getProvidersByEmail,
  createClientResponse,
  getClientResponseByPhoneNumber,
  getClientByPhoneNumber,
  getCubeStatuses,
  updateMsgBoard,
  getMsgBoard,
  getSecret,
};
