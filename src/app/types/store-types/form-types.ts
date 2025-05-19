export interface ILoginPayload {
  identifier: string;
  password: string;
}

export interface IRegistrationPayload {
  email: string;
  name: string;
  password: string;
  phone: string;
}
