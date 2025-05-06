import { OperadorType } from '@ts/Operador.type'

export default function isValidOperador(obj: any): obj is OperadorType {
  return (
    !!obj &&
    typeof obj === 'object' &&
    typeof obj.codigo === 'number' &&
    typeof obj.tag === 'string' &&
    (obj.status === 0 || obj.status === 1) &&
    typeof obj.tipo === 'number'
  )
}
