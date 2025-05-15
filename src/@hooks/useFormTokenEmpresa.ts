import { TokenEmpresaSchema, TokenEmpresaSchemaType } from '@schemas/TokenEmpresa.schema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export const useFormTokenEmpresa = () => {

  const form = useForm<TokenEmpresaSchemaType>({
    defaultValues: {
      S_TOKEN: ''
    },
    resolver: zodResolver(TokenEmpresaSchema)
  })


  const selectEmpresa = async (data: TokenEmpresaSchemaType) => {

  }

  return {
    submit: form.handleSubmit(selectEmpresa),
    errors: form.formState.errors,
    isSubmitting: form.formState.isSubmitting,
    control: form.control,
    watch: form.watch,
    setValue: form.setValue,
  }
}