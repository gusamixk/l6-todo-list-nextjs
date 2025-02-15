import { z } from "zod";


export const createTodoFormSchemas = z.object({
    text: z.string().min(1, "Todo Wajib di isi").max(100, "Maksimal 100")
})

export const updateTodoFormSchemas = createTodoFormSchemas.partial();