interface IClientResponseRecord {
  id: number;
  phoneNumber: string;
  responseType: string;
  body: string;
  responseDate: Date;
}

interface IProvider {
  id: string;
  email: string;
  subRegion: string;
}

interface IClient {
  orgId: number;
  state?: string;
}

interface IClientResponse {
  ApiVersion: string;
  SmsSid: string;
  SmsStatus: string;
  SmsMessageSid: string;
  NumSegments: string;
  ToState: string;
  From: string;
  MessageSid: string;
  AccountSid: string;
  ToCity: string;
  FromCountry: string;
  ToZip: string;
  FromCity: string;
  To: string;
  FromZip: string;
  ToCountry: string;
  Body: string;
  NumMedia: string;
  FromState: string;
}

interface ICoordinator {
  Company: number;
  States: string[];
  Coordinator: string;
  Email: string;
  Phone: string;
}

enum EStatus {
  THERE_WILL_BE_A_CHANGE = 1,
  NO_CHANGE = 2,
  I_DO_NOT_KNOW_YET = 3,
}

interface ICubeStatus {
  loadTime?: string;
  pipelineName?: string;
  name: string;
}

class AppError extends Error {
  status: number;
  isOperational: boolean;
  constructor(message: string, status: number) {
    super(message);
    this.status = status || 500;
    this.isOperational = true;
  }
}

export {
  IProvider,
  IClientResponseRecord,
  IClient,
  EStatus,
  ICoordinator,
  IClientResponse,
  ICubeStatus,
  AppError,
};
