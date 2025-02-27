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
import { useState } from "react";
import { useCreateTodo, useTodos } from "../api";
import { CreateTodoFormInner } from "./CreateTodoFormInner";
import { useForm } from "react-hook-form";
import { CreateTodoFormSchemas } from "../types";
import { createTodoFormSchemas } from "../schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { z } from "zod";
import { toast } from "sonner";

export const CreateTodoForm = () => {
  const {refetch : refetchTodos} = useTodos();
  const [todo, setTodo] = useState<string>("");
  const { mutate: createTodo, isPending: isCreateTodoPending } =
    useCreateTodo({
      onSuccess: () => {
        form.reset();
        toast.success("Todo added successfully");
        void refetchTodos();
      },
      onError: () => {
        toast.error("Failed to add todo")
      },
      onMutate: () => {
        // toast.loading("Adding todo...")
        },
    });
  
    const handleChangeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setTodo(e.target.value);
  };

  // const OnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   await createTodo({ text: todo });
  // };
  const form = useForm<CreateTodoFormSchemas>({
    defaultValues: {
      text: "",
    },
    resolver: zodResolver(createTodoFormSchemas),
  })
  const onSubmit = (values: CreateTodoFormSchemas) =>
    createTodo(values);
  // createTodo(values)
  // const onSubmit = (values: CreateTodoFormSchemas) => console.log(values);

  return (
    <Card className="mb-20">
      <CardHeader>
        <CardTitle>Plan Your Day</CardTitle>
        <CardDescription>Stay organized with your daily tasks</CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <CreateTodoFormInner
            formId="todo-form"
            onSubmit={onSubmit}
            handleChangeTodo={handleChangeTodo}
          />
        </Form>

      </CardContent>
      <CardFooter className="place-content-end">
        <Button form="todo-form" disabled={isCreateTodoPending}>
          {isCreateTodoPending ? (
            <>
              <Loader2 className="animate-spin" />
              Adding...
            </>
          ) : (
            "Add"
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};
