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
  state: string;
}

export { IProvider, IClientResponseRecord, IClient };
