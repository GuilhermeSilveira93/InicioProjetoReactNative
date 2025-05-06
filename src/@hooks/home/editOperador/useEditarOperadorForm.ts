import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import {
  editarOperadorSchema,
  editarOperadorSchemaType,
} from '@ts/Schemas/home/editOpeardor/editarOperador.schema'
import { FirebaseRealTimeDataBase } from 'sftk_firebase_classes/dist/native'

type useEditarOperadorFormProps = {
  path: string
  FirebaseServiceInstance: FirebaseRealTimeDataBase
  dadosAtuais?: { codigo: string; status: number; tag: string; tipo: number }
}

export default function useEditarOperadorForm({
  path,
  FirebaseServiceInstance,
  dadosAtuais,
}: useEditarOperadorFormProps) {
  const form = useForm<editarOperadorSchemaType>({
    mode: 'all',
    resolver: zodResolver(editarOperadorSchema),
    defaultValues: {
      status: dadosAtuais?.status.toString() == '1',
    },
  })
  const editarUsuario = async (data: editarOperadorSchemaType) => {
    const dataToPush = { ...dadosAtuais, status: Number(data.status) }
    await FirebaseServiceInstance.setContent<
      Record<number, editarOperadorSchemaType>
    >(path, dataToPush)
  }

  return {
    form,
    onSubmit: form.handleSubmit(editarUsuario),
    isSubmitting: form.formState.isSubmitting,
  }
}
