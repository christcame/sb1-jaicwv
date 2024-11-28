import { VisitorInfo } from '../utils/fingerprint';

export interface ApiResponse<T> {
  data: T;
  status: number;
}

export interface ApiError {
  message: string;
  status?: number;
}

export type FingerprintResponse = ApiResponse<VisitorInfo>;