import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Ellipsis } from "lucide-react";
import { useDeleteTodo } from "../../api/useDeleteTodo";
import { toast } from "sonner";
import { useTodos } from "../../api";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuRadioItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
  

export type DeleteTodoProps = {
    todoId: string;
  }
  
export const DeleteTodoDialog = ({todoId}: DeleteTodoProps) => {
    const {refetch :refetchTodos} = useTodos()
    const {mutate: deleteTodo} = useDeleteTodo({
      id:todoId,
        onSuccess: () => {
            toast.success("Berhasil Dihapus"),
            void refetchTodos();
        },
    });

    const handleDeleteTodo = ()=> {
        deleteTodo({id : todoId});
    }
    return(
      <AlertDialog> 
     
      <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Ellipsis className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Button asChild>
            <Link href={`/todo/${todoId}/edit`}>Edit</Link>
          </Button>
        </DropdownMenuItem>
        <AlertDialogTrigger asChild>
          <DropdownMenuItem className="text-red-600 cursor-pointer">
            Hapus
          </DropdownMenuItem>
        </AlertDialogTrigger>
      </DropdownMenuContent>
    </DropdownMenu> 
      <AlertDialogContent> 
        <AlertDialogHeader> 
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle> 
          <AlertDialogDescription> 
            This action cannot be undone. This will permanently delete your 
            account and remove your data from our servers. 
          </AlertDialogDescription> 
        </AlertDialogHeader> 
        <AlertDialogFooter> 
          <AlertDialogCancel>Cancel</AlertDialogCancel> 
          <AlertDialogAction onClick={handleDeleteTodo}> 
            Continue 
          </AlertDialogAction> 
        </AlertDialogFooter> 
      </AlertDialogContent> 
    </AlertDialog> 
    )
  }


