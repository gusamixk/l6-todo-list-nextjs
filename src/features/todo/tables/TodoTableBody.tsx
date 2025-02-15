"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { renderElements } from "@/utils/render-elements";
import { Ellipsis } from "lucide-react";
import { useTodos } from "../api";
import { TodoTableBodySkeleton } from "../components/skeleton";
import { TodoCheckbox } from "../components";
import {Todo} from "@/features/todo/types";
import { DeleteTodoDialog } from "../components/dialog/todoDialog";

export const TodoTableBody = () => {
  const { data: todoList, isLoading: isTodoLoading } = useTodos();

  if (isTodoLoading) {
    return <TodoTableBodySkeleton />;
  }
  

  return (
    <TableBody>
      {renderElements({
        of: todoList?.data,
        render: ( todo: Todo, index : number) => (
          <TableRow key={todo.id}>
            <TableCell className="text-center">{index + 1}</TableCell>
            <TableCell>{todo.text}</TableCell>
            <TableCell className="text-center">
              <TodoCheckbox todoId={todo.id} statusCheked={todo.status} />
            </TableCell>
            <TableCell className="text-center">
              <div className="flex justify-center">
               <DeleteTodoDialog todoId={todo.id}/>
              </div>
            </TableCell>
          </TableRow>
        ),
      })}
    </TableBody>
  );
};
