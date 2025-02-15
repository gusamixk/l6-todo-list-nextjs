import type { ApiResponse, MutationApiProps } from "@/types/api";
import type { CreateTodoFormSchema, MutationCreateTodoProps, Todo } from "../types";
import { useState } from "react";
import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";


export const createTodo = async (values: CreateTodoFormSchema) => {
  const response = await axiosInstance.post<ApiResponse<Todo>>(
    "/todos",
    values,
  );
  return response.data;
};

export const useCreateTodo = ({onSuccess, onError, onMutate}:  MutationCreateTodoProps) => {
  return useMutation({
    mutationKey: ["todos"],
    mutationFn: createTodo,
    onError,
    onSuccess,
    onMutate,
  });
};
  // const [state, setState] = useState<MutationApiProps<Todo>>({
  //   data: {} as Todo,
  //   isPending: false,
  //   isError: false,
  //   error: "",

//   const mutate = async (values: CreateTodoFormSchema) => {
//     try {
//       const todo = await createTodo(values);
//       setState((prev) => ({
//         ...prev,
//         data: todo.data ?? ({} as Todo),
//         isPending: true,
//       }));
//     } catch (error) {
//       if (error instanceof Error) {
//         setState((prev) => ({
//           ...prev,
//           isError: true,
//           error: error.message,
//         }));
//       }
//     } finally {
//       setState((prev) => ({ ...prev, isPending: false }));
//     }
//   };

//   return { ...state, mutate };
// };
