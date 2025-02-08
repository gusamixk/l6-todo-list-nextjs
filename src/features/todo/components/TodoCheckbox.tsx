"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { useUpdateTodo } from "../api/useUpdateTodo";

type TodoCheckboxProps = {
  todoId: string;
  statusCheked: boolean;
};

export const TodoCheckbox = ({ todoId, statusCheked }: TodoCheckboxProps) => {
  const { mutate: updateTodo } = useUpdateTodo();
  const handleCheckbox = async (checked: boolean | "indeterminate") => {
    await updateTodo(todoId, { status: Boolean(checked) });
  };

  return (
    <div className="flex justify-center">
      <Checkbox
        checked={Boolean(statusCheked)}
        onCheckedChange={handleCheckbox}
      />
    </div>
  );
};
