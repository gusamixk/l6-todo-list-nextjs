import { Input } from "@/components/ui/input";

type CreateTodoFormInnerProps = {
  formId: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChangeTodo: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const CreateTodoFormInner = ({
  formId,
  onSubmit,
  handleChangeTodo,
}: CreateTodoFormInnerProps) => {
  return (
    <form id={formId} onSubmit={onSubmit}>
      <Input
        type="text"
        placeholder="Input your todo here"
        onChange={handleChangeTodo}
      />
    </form>
  );
};
