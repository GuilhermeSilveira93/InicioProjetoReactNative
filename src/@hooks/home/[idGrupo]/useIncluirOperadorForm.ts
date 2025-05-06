import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { OperadorType } from '@ts/Operador.type'
import {
  incluirOperadorSchema,
  incluirOperadorSchemaType,
} from '@ts/Schemas/home/[idGrupo]/incluirOperador.schema'
import { FirebaseRealTimeDataBase } from 'sftk_firebase_classes/dist/native'

export default function useIncluirOperadorForm(
  path: string,
  FirebaseServiceInstance: FirebaseRealTimeDataBase,
  dadosAtuais?: Record<string, incluirOperadorSchemaType>
) {
  const form = useForm<incluirOperadorSchemaType>({
    mode: 'all',
    resolver: zodResolver(incluirOperadorSchema),
    defaultValues: {
      codigo: undefined,
      tipo: 1,
      tag: undefined,
    },
  })
  const gravarUsuario = async (data: incluirOperadorSchemaType) => {
    const dataToPush = { ...dadosAtuais, [data.codigo]: { status: 1, ...data } }
    await FirebaseServiceInstance.setContent<Record<number, OperadorType>>(
      path,
      dataToPush
    )
  }

  return {
    form,
    onSubmit: form.handleSubmit(gravarUsuario),
    isSubmitting: form.formState.isSubmitting,
  }
}
