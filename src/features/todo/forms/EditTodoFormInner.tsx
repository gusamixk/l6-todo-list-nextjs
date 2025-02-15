import { Input } from "@/components/ui/input";
import { UpdateTodoFormSchema, UpdateTodoFormSchemas } from "../types";
import { z } from "zod";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFormContext } from "react-hook-form";
import type {updateTodoFormSchemas } from "../schemas";

type EditTodoFormInnerProps = {
  formId: string;
  // onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onSubmit: (values: UpdateTodoFormSchema) => void;
  handleChangeTodo: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const EditTodoFormInner = ({
  formId,
  onSubmit,
  handleChangeTodo,

}: EditTodoFormInnerProps) => {
  const form = useFormContext<UpdateTodoFormSchema>();
  return (
    <form id={formId} onSubmit={form.handleSubmit(onSubmit)}>
    <FormField
      control={form.control}
      name="text"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Todo</FormLabel>
          <FormControl>
            <Input
              {...field}
              type="text"
              placeholder="Enter your todo"
              // onChange={handleChangeTodo}
            />
          </FormControl>
          <FormDescription>Create your todo</FormDescription>
          {form.formState.errors.text && (
            <FormMessage>{form.formState.errors.text.message}</FormMessage>
          )}
        </FormItem>
      )}
    />
  </form>
  );
};
