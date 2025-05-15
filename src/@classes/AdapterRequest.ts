import { api } from '@/src/lib/api'
import { AxiosError, AxiosResponse, ResponseType } from 'axios'

type HttpRequest = {
  url: string
  method: 'get' | 'post' | 'put' | 'delete' | 'patch'
  responseType?: ResponseType
  body?: any
  params?: any
  headers?: any
}
export interface HttpClient<T = never> {
  request: (data: HttpRequest) => Promise<{
    statusCode: number
    success: boolean
    body: T
    message?: string
  }>
}

export class AdapterRequest implements HttpClient {
  async request<T>(data: HttpRequest): Promise<{
    statusCode: number
    success: boolean
    body: T
    message: string
  }> {
    let axiosResponse: AxiosResponse
    try {
      axiosResponse = await api<T>({
        url: data.url,
        responseType: data.responseType as ResponseType,
        params: data.params,
        method: data.method,
        data: data.body,
        headers: data.headers,
      })
      return {
        statusCode: axiosResponse.status,
        success: true,
        message: 'Requisição feita com sucesso!',
        body: axiosResponse.data,
      }
    } catch (error) {
      const _error = error as AxiosError<{ message: string }>

      return {
        statusCode: _error.response?.status ?? 200,
        message: _error.response?.data.message ?? 'Error',
        success: false,
        body: [] as T,
      }
    }
  }
}
