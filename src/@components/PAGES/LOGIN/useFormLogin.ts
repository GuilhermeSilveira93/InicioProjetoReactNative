import { LoginSchema, LoginSchemaType } from '../../../@schemas/Login.schema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export const useFormLogin = () => {

  const form = useForm<LoginSchemaType>({
    defaultValues: {
      S_LOGIN: '',
      S_SENHA: ''
    },
    resolver: zodResolver(LoginSchema)
  })


  const signInWithLoginAndPassword = async (data: LoginSchemaType) => {

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