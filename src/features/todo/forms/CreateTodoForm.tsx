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
import { useCreateTodo } from "../api";
import { CreateTodoFormInner } from "./CreateTodoFormInner";

export const CreateTodoForm = () => {
  const [todo, setTodo] = useState<string>("");
  const { mutate: createTodo, isPending: isCreateTodoPending } =
    useCreateTodo();

  const handleChangeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createTodo({ text: todo });
  };

  return (
    <Card className="mb-20">
      <CardHeader>
        <CardTitle>Plan Your Day</CardTitle>
        <CardDescription>Stay organized with your daily tasks</CardDescription>
      </CardHeader>

      <CardContent>
        <CreateTodoFormInner
          formId="todo-form"
          onSubmit={onSubmit}
          handleChangeTodo={handleChangeTodo}
        />
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
