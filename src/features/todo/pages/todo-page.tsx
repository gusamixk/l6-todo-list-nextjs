import { PageContainer } from "@/components/layout/PageContainer";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Input } from "@/components/ui/input";
import { TodoTable } from "../tables/TodoTable";
import { CreateTodoForm } from "../forms/CreateTodoForm";

export const TodoPage = () => {
  return (
    <PageContainer withHeader withFooter>
      <SectionContainer className="min-h-screen">
        {/* Form */}
        <CreateTodoForm />
        {/* Search */}
        <div className="mb-5">
          <Input type="text" placeholder="search" />
        </div>
        {/* Table */}
        <TodoTable />
      </SectionContainer>
    </PageContainer>
  );
};
