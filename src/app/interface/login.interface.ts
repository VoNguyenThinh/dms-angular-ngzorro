export interface LoginPayload {
  email: string;
  password: string;
}

export interface ResponseMethod {
  onSuccess?: (result: any) => void;
  onError?: (error: any) => void;
}
