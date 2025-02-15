import type { ApiResponse, MutationApiProps } from "@/types/api";
import type { CreateTodoFormSchema, MutationCreateTodoProps, MutationUpdateTodoProps, Todo, UpdateTodoFormSchema } from "../types";
import { useState } from "react";
import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";



export const UpdateTodo = async ({id, values }: {id : string, values: UpdateTodoFormSchema}) => {
  const response = await axiosInstance.patch<ApiResponse<Todo>>(
    `/todos/${id}`,
    values,
  ); 
  return response.data.data;
};

export const useUpdateTodo = ({onSuccess}:  MutationUpdateTodoProps) => {
  return useMutation({
    mutationKey: ["update","todos"],
    mutationFn: UpdateTodo,
    onSuccess,
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























// import { axiosInstance } from "@/lib/axios";
// import type { Todo, UpdateTodoFormSchema } from "../types";
// import type { ApiResponse, MutationApiProps } from "@/types/api";
// import { useState } from "react";

// export const updateTodo = async (id: string, values: UpdateTodoFormSchema) => {
//   const response = await axiosInstance.patch<ApiResponse<Todo>>(
//     `/todos/${id}`,
//     values,
//   );
//   return response.data;
// };

// export const useUpdateTodo = () => {
//   const [state, setState] = useState<MutationApiProps<Todo>>({
//     data: {} as Todo,
//     isPending: false,
//     isError: false,
//     error: "",
//   });

//   const mutate = async (id: string, values: UpdateTodoFormSchema) => {
//     try {
//       const todo = await updateTodo(id, values);
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
