import * as zod from 'zod'
export const incluirOperadorSchema = zod.object({
  codigo: zod.number({
    message: 'Codigo Invalido',
    invalid_type_error: 'Codigo Invalido',
  }),
  tag: zod.string({ message: 'Tag Invalido' }),
  tipo: zod.number({ message: 'Tipo Invalido' }),
})

export type incluirOperadorSchemaType = zod.infer<typeof incluirOperadorSchema>
