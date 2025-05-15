import * as zod from 'zod'
import { idioma } from '@ct/idioma/i18n'

export const TokenEmpresaSchema = zod.object({
  S_TOKEN: zod.string({message: idioma.t('TOKENERRADO')}),
})

export type TokenEmpresaSchemaType = zod.infer<typeof TokenEmpresaSchema>