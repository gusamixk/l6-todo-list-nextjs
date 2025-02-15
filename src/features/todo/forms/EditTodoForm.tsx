"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useTodos } from "../api";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { z } from "zod";
import { toast } from "sonner";
import { useUpdateTodo } from "../api/useUpdateTodo";
import { UpdateTodoFormSchema } from "../types";
import { updateTodoFormSchemas } from "../schemas";
import { EditTodoFormInner } from "./EditTodoFormInner";
import { useTodosById } from "../api/useTodo";
import { useRouter } from "next/navigation";

type EditTodoFormProps = {
  todoId : string;
}

export const EditTodoForm = ({ todoId }: EditTodoFormProps) => {
  const { data: todoData } = useTodosById(todoId);
  const router = useRouter();
  // console.log(todoData);
  const { mutate: UpdateTodo , isPending: isUpdateTodoPending} =
    useUpdateTodo({

      onSuccess: () => {
        router.push("/todo");
        toast.success("Todo added successfully");
      },
      onError: () => {
        toast.error("Failed to add todo")
      },
      onMutate: () => {
        toast.loading("Adding todo...")},
    });
  
    const handleChangeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setTodo(e.target.value);
  };

  // const OnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   await createTodo({ text: todo });
  // };

  const form = useForm<UpdateTodoFormSchema>({
    defaultValues: {
      text: "",
    },
    resolver: zodResolver(updateTodoFormSchemas),
  })
  const onSubmit = (values: UpdateTodoFormSchema) => {
    UpdateTodo({id: todoId, values});
  }; 
 
  useEffect(() => {
    if (todoData) {
      form.reset({text : todoData.text}); 
    }
  }, [todoData, form]);

  return (
    <Card className="mb-20">
      <CardHeader>
        <CardTitle>Plan Your Day</CardTitle>
        <CardDescription>Stay organized with your daily tasks</CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <EditTodoFormInner
            formId="todo-form"
            onSubmit={onSubmit}
            handleChangeTodo={handleChangeTodo}
          />
        </Form>

      </CardContent>
      <CardFooter className="place-content-end">
        <Button form="todo-form" disabled={isUpdateTodoPending || !form.formState.isDirty}>
          {isUpdateTodoPending ? (
            <>
              <Loader2 className="animate-spin" />
              Update...
            </>
          ) : (
            "Update"
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};
