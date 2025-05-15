// testes de componentes, deve ser tsx, igual à aplicação.
import P from '@components/ui/P'

import { render } from '@testing-library/react-native'

describe('Component: P', () => {
  it('P: Renderiza componente de texto com texto dentro.', () => {
    // render retornar algumas opções, uma delas é o debug, que no console, poderemos ver o que está sendo renderizado.
    render(<P color="red">teste</P>)
  })
})
