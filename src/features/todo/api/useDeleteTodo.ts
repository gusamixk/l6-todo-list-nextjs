import { axiosInstance } from "@/lib/axios";
import { ApiResponse } from "@/types/api";
import { DeleteTodoProps, Todo } from "../types";
import { useMutation } from "@tanstack/react-query";

export const DeleteTodo = async (id: DeleteTodoProps) => {
    const response = await axiosInstance.delete<ApiResponse<Todo>>(
      `/todos/${id.id}`
    );
    return response.data.data;
  };
  
  export const useDeleteTodo = ({onSuccess}:  DeleteTodoProps) => {
    return useMutation({
      mutationKey: ["delete-todos"],
      mutationFn: DeleteTodo,
      onSuccess,
    });
  };