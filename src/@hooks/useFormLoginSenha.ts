import { LoginSenhaSchema, LoginSenhaSchemaType } from '@schemas/LoginSenha.schema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export const useFormLoginSenha = () => {

  const form = useForm<LoginSenhaSchemaType>({
    defaultValues: {
      S_LOGIN: '',
      S_SENHA: ''
    },
    resolver: zodResolver(LoginSenhaSchema)
  })


  const signInWithLoginAndPassword = async (data: LoginSenhaSchemaType) => {

  }

  return {
    submit: form.handleSubmit(signInWithLoginAndPassword),
    errors: form.formState.errors,
    isSubmitting: form.formState.isSubmitting,
    control: form.control,
    watch: form.watch,
    setValue: form.setValue,
  }
}