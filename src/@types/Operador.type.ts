export type OperadorType = {
  codigo: number
  tag: string
  status: 0 | 1
  tipo: number
}

export type OperadorTypeRecord = Record<string, OperadorType>

export type FolderType = Record<string, OperadorTypeRecord & { status: 0 | 1 }>
