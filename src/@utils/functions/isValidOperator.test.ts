import { OperadorType } from '@ts/Operador.type'
import isValidOperador from '@utils/functions/isValidOperator'

describe('teste função isValidOperador', () => {
  it('deve retornar true para um objeto válido', () => {
    const obj: OperadorType = {
      codigo: 123,
      tag: 'ABC123',
      status: 1,
      tipo: 2,
    }
    expect(isValidOperador(obj)).toBe(true)
  })

  it('deve retornar false se "codigo" não for um número', () => {
    const obj = {
      codigo: '123',
      tag: 'ABC123',
      status: 1,
      tipo: 2,
    }

    expect(isValidOperador(obj)).toBe(false)
  })
  it('deve retornar false se "tag" não for uma string', () => {
    const obj = {
      codigo: 123,
      tag: 123,
      status: 1,
      tipo: 2,
    }
    expect(isValidOperador(obj)).toBe(false)
  })
  it('deve retornar false se "status" não for 0 ou 1', () => {
    const obj = {
      codigo: 123,
      tag: 'ABC123',
      status: 2,
      tipo: 2,
    }

    expect(isValidOperador(obj)).toBe(false)
  })

  it('deve retornar false se "tipo" não for um número', () => {
    const obj = {
      codigo: 123,
      tag: 'ABC123',
      status: 1,
      tipo: 'admin',
    }

    expect(isValidOperador(obj)).toBe(false)
  })

  it('deve retornar false se o objeto for null', () => {
    expect(isValidOperador(null)).toBe(false)
  })

  it('deve retornar false se o objeto for um array', () => {
    expect(isValidOperador([])).toBe(false)
  })
})
