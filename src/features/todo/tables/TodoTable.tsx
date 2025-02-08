import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TodoPagination } from "../components";
import { TodoTableBody } from "./TodoTableBody";

export const TodoTable = () => {
  return (
    <Card className="mb-5">
      <CardContent>
        <Table>
          <TableCaption>
            {/* Pagination */}
            <TodoPagination />
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px] text-center">No</TableHead>
              <TableHead className="w-full">Todo</TableHead>
              <TableHead className="w-[100px] text-center">Status</TableHead>
              <TableHead className="w-[80px] text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          {/* Body  */}
          <TodoTableBody />
        </Table>
      </CardContent>
    </Card>
  );
};
