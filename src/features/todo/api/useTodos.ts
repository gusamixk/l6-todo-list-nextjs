import { axiosInstance } from "@/lib/axios";
import type {
  ApiResponse,
  QueryApiProps,
  DataResponse,
  MetaProps,
} from "@/types/api";
import type { Todo } from "../types";
import { useEffect, useState } from "react";

export const getTodos = async () => {
  const response =
    await axiosInstance.get<ApiResponse<DataResponse<Todo>>>("/todos");
  return response.data;
};

export const useTodos = () => {
  const [state, setState] = useState<QueryApiProps<Todo[]>>({
    data: [],
    meta: {} as MetaProps,
    isLoading: true,
    isError: false,
    error: "",
  });

  const fetchTodos = async () => {
    try {
      const todos = await getTodos();
      setState((prev) => ({
        ...prev,
        data: todos?.data?.data ?? [],
        meta: todos.data?.meta ?? ({} as MetaProps),
        isLoading: true,
      }));
    } catch (error: unknown) {
      if (error instanceof Error) {
        setState((prev) => ({
          ...prev,
          isError: false,
          error: error.message,
        }));
      }
    } finally {
      setState((prev) => ({ ...prev, isLoading: false }));
    }
  };

  useEffect(() => {
    void fetchTodos();
  }, []);

  return { ...state };
};
