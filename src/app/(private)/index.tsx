import { useSession } from '@providers/SessionProvider'
import Center from '@components/ui/Center'
import P from '@components/ui/P'
import { Platform } from 'react-native'

export default function HomeScreen() {
  const { user } = useSession()

  if (Platform.OS === 'web') {
    /* JOGA SEU COMPONENTE WEB AQUI*/
  }

  return (
    <Center>
      <P>Olá mundo</P>
      <P>{user?.email}</P>
    </Center>
  )
}