import { BASE_URL, doFetch } from "..";
import {

  ICubeStatus,
} from "../../types";
import {AttainDataLake, AttainDMAttainAutomation} from "@attain/db/types"

async function getProvidersByEmail(
  emails: string[],
) {
  const res = await doFetch(
    BASE_URL + "/providers/providers-by-emails",
    emails,
  );
  return res?.ok ? res.json() as Promise<AttainDataLake.InsightsProvider[]> : undefined;
}

async function createClientResponse(rec: Omit<AttainDMAttainAutomation.TwilioClientResponses, "id">) {
  const res = await doFetch(BASE_URL + "/twilio/client-response", rec);
  return res?.ok;
}

async function getClientResponseByPhoneNumber(
  number: string,
) {
  const res = await doFetch(
    BASE_URL + `/twilio/client-response?phoneNumber=${number}`,
  );
  return res?.ok ? res.json() as Promise<AttainDMAttainAutomation.TwilioClientResponses[]> : undefined;
}

async function getClientByPhoneNumber(
  number: string,
) {
  const res = await doFetch(BASE_URL + `/client?phoneNumber=${number}`);
  return res?.ok ? res.json() as Promise<AttainDataLake.InsightsClient[]> : undefined;
}

async function getCubeStatuses() {
  const res = await doFetch(BASE_URL + "/cube-status");
  return res?.ok ? res.json() as Promise<ICubeStatus[]> : undefined;
}

async function getMsgBoard() {
  const res = await doFetch(BASE_URL + "/cube-status/message-board");
  return res?.ok ? res.json() as Promise<string> : undefined;
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
