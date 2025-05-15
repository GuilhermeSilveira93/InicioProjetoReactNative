import * as zod from 'zod'
import { idioma } from '@ct/idioma/i18n'

export const LoginSchema = zod.object({
  S_LOGIN: zod.string({message: idioma.t('LOGINERRADO')}),
  S_SENHA: zod.string({message: idioma.t('SENHAERRADO')})
})

export type LoginSchemaType = zod.infer<typeof LoginSchema>