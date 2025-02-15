/*************  ✨ Codeium Command 🌟  *************/
import { PageContainer } from "@/components/layout/PageContainer";
import { EditTodoForm } from "../forms/EditTodoForm";
import { SectionContainer } from "@/components/layout/SectionContainer"



type EditTodoPageProps = {
    params: Promise<{id: string}>;
};

export const EditTodoPage = async ({params}: EditTodoPageProps) => {
    const todoId = (await params).id
    return (
       <PageContainer>
        <SectionContainer>
            <EditTodoForm todoId={todoId}/>
        </SectionContainer>
       </PageContainer> 
    )
}
