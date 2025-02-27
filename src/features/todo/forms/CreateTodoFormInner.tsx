import { Input } from "@/components/ui/input";
import { CreateTodoFormSchemas } from "../types";
import { z } from "zod";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFormContext } from "react-hook-form";
import { createTodoFormSchemas } from "../schemas";

type CreateTodoFormInnerProps = {
  formId: string;
  // onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onSubmit: (values: CreateTodoFormSchemas) => void;
  handleChangeTodo: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

  // const form = useForm<z.infer<typeof createTodoFormSchemas>({
  //   defaultValues: {
  //     text:"",
  //   },
  //   resolver: zodResolver(createTodoFormSchemas),
  // })

export const CreateTodoFormInner = ({
  formId,
  onSubmit,
  handleChangeTodo,
}: CreateTodoFormInnerProps) => {
  const form = useFormContext<z.infer<typeof createTodoFormSchemas>>();
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
              type="formId"
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
