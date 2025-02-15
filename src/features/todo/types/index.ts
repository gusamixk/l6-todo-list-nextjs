import { z } from "zod";
import { createTodoFormSchemas, updateTodoFormSchemas } from "../schemas";

export type Todo = {
  id: string;
  text: string;
  status: boolean;
  created_at: Date | string;
  updated_at: Date | string;
};

export type CreateTodoFormSchema = {
  text: string;
};

export type UpdateTodoFormSchema = {
  text?: string;
  status?: boolean;
};

export type CreateTodoFormSchemas = z.infer<typeof createTodoFormSchemas> 
export type UpdateTodoFormSchemas = z.infer<typeof updateTodoFormSchemas>

export type MutationCreateTodoProps = {
 onSuccess?: () => void,
 onError?: () => void ;
 onMutate: () => void;
}
export type MutationUpdateTodoProps = {
  onSuccess?: () => void,
  onError?: () => void ;
  onMutate: () => void;
 }

export type DeleteTodoProps = {
  id: string;
  onSuccess?: () => void,
  // onError?: () => void ;
  // onMutate: () => void;
}