import { MMKV } from 'react-native-mmkv'

abstract class Storage {
  static setItem: (
    key: string,
    value: boolean | string | number | ArrayBuffer
  ) => void

  static getItemBoolean: (key: string) => boolean | null
  static removeItem: (key: string) => void
  static removeAll: () => void
  static getItem: <T>(key: string) => T | null
  static getString: (key: string) => string | null
}

export class LocalStorage extends Storage {
  constructor() {
    super()
  }

  private static storage = new MMKV()

  static setItem(key: string, value: boolean | string | number | ArrayBuffer) {
    this.storage.set(key, value)
  }

  static getString(key: string): string | null {
    const value = this.storage.getString(key)
    if (!value) return null
    return value
  }

  static getItem<T>(key: string): T | null {
    const value = this.storage.getString(key)
    if (!value) return null
    return JSON.parse(value)
  }

  static getItemBoolean(key: string): boolean | null {
    const value = this.storage.getBoolean(key)
    if (!value) return null
    return value
  }

  static removeItem(key: string) {
    this.storage.delete(key)
  }

  static removeAll() {
    this.storage.clearAll()
  }
}
