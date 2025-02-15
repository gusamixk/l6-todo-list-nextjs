"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { useUpdateTodo } from "../api/useUpdateTodo";
import { toast } from "sonner";
import { useTodos } from "../api";

type TodoCheckboxProps = {
  todoId: string;
  statusCheked: boolean;
};

export const TodoCheckbox = ({ todoId, statusCheked }: TodoCheckboxProps) => {
  const {refetch} = useTodos()
  const { mutate: UpdateTodo } = useUpdateTodo({
    onSuccess: () => {
      // toast.success("Berhasil Dipilih");
      void refetch();
    },

    onMutate:( ) => {
      toast.loading("Loading...");
    }
});

  const handleCheckbox = async (checked: boolean | "indeterminate") => {
    await UpdateTodo({id : todoId,  values :{ status: Boolean(checked) }});
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
