import * as zod from 'zod'
export const editarOperadorSchema = zod.object({
  status: zod.boolean({ message: 'Status Invalido' }),
})

export type editarOperadorSchemaType = zod.infer<typeof editarOperadorSchema>
