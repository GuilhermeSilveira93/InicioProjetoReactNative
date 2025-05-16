import Center from '@components/ui/Center'
import P from '@components/ui/P'

export default function HomeScreen() {
  return (
    <Center>
      <P>Olá mundo</P>
      <P>{user?.email}</P>
    </Center>
  )
}