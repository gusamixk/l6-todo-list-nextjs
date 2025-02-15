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
  