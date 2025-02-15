import { axiosInstance } from "@/lib/axios";
import type {
  ApiResponse,
  QueryApiProps,
  DataResponse,
  MetaProps,
} from "@/types/api";
import type { Todo } from "../types";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

 
export const getTodosById = async (id?: string) => {
    if(!id) throw new Error("id is required")
  const response =
    await axiosInstance.get<ApiResponse<Todo>>(`/todos/${id}`);
  return response.data.data;
};


export const useTodosById = (id : string ) => {
  return useQuery ({
    queryKey: ["todos"],
    queryFn: () => getTodosById(id),
  });
}