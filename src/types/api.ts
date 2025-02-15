import { type ZodError } from "zod";

export type ApiResponse<T> = {
  status: boolean;
  statusCode: number;
  message: string;
  data?: T;
  errors?: string;
  details?: ZodError;
};

export type MetaProps = {
  total: number;
  page: number;
  last_page: number;
  limit: number;
};

export type DataResponse<T> = {
  data: T[];
  meta: MetaProps;
};

export type QueryApiProps<T> = {
  data: T;
  meta: MetaProps;
  isLoading: boolean;
  isError: boolean;
  error: string;
};

export type MutationApiProps<T> = {
  data: T;
  isPending: boolean;
  isError: boolean;
  error: string;
};
