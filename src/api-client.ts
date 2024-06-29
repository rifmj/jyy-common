/**
 * @module API Client
 */

import axios, { type AxiosError, type AxiosRequestConfig } from "axios"

process.env.DEBUG = "*"
// @ts-ignore
process.env.DEBUG_COLORS = true

const debug = require("debug")("http")

export const apiClient = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_BASE_URL,
})

apiClient.interceptors.request.use(async function (config) {
  debug(`request:${config.method}:${config.url}`, config)
  return { ...config }
})

apiClient.interceptors.response.use(
  async response => {
    const config = response.config
    debug(`response:${config.method}:${config.url}`, response)
    return response
  },
  async (error: AxiosError) => {
    const config = error.config
    debug(`error:${config.method}:${config.url}`, error)

    throw error
  }
)

/**
 * Выполняет GET-запрос к указанному URL и возвращает данные ответа.
 *
 * @template T Тип данных, ожидаемых в ответе.
 * @param url URL-адрес для выполнения GET-запроса.
 * @param config Дополнительная конфигурация запроса Axios.
 * @returns Промис, который разрешается данными ответа типа T.
 *
 * @example
 * ```typescript
 * interface User {
 *   id: string;
 *   name: string;
 * }
 *
 * async function fetchUser(userId: string): Promise<User> {
 *   const user = await makeGetRequest<User>(`/users/${userId}`);
 *   return user;
 * }
 * ```
 */
export async function makeGetRequest<T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> {
  const response = await apiClient.get<T>(url, config)
  return response.data
}

/**
 * Выполняет POST-запрос к указанному URL с переданными данными и возвращает данные ответа.
 *
 * @template T Тип данных, ожидаемых в ответе.
 * @param url URL-адрес для выполнения POST-запроса.
 * @param data Данные, отправляемые в теле запроса.
 * @param config Дополнительная конфигурация запроса Axios.
 * @returns Промис, который разрешается данными ответа типа T.
 *
 * @example
 * ```typescript
 * interface CreateUserRequest {
 *   name: string;
 *   email: string;
 * }
 *
 * interface User {
 *   id: string;
 *   name: string;
 *   email: string;
 * }
 *
 * async function createUser(userData: CreateUserRequest): Promise<User> {
 *   const user = await makePostRequest<User>('/users', userData);
 *   return user;
 * }
 * ```
 */
export async function makePostRequest<T>(
  url: string,
  data: any,
  config?: AxiosRequestConfig
): Promise<T> {
  const response = await apiClient.post<T>(url, data, config)
  return response.data
}

/**
 * Выполняет PUT-запрос к указанному URL с переданными данными и возвращает данные ответа.
 *
 * @template T Тип данных, ожидаемых в ответе.
 * @param url URL-адрес для выполнения PUT-запроса.
 * @param data Данные, отправляемые в теле запроса.
 * @param config Дополнительная конфигурация запроса Axios.
 * @returns Промис, который разрешается данными ответа типа T.
 *
 * @example
 * ```typescript
 * interface UpdateUserRequest {
 *   name?: string;
 *   email?: string;
 * }
 *
 * interface User {
 *   id: string;
 *   name: string;
 *   email: string;
 * }
 *
 * async function updateUser(userId: string, userData: UpdateUserRequest): Promise<User> {
 *   const user = await makePutRequest<User>(`/users/${userId}`, userData);
 *   return user;
 * }
 * ```
 */
export async function makePutRequest<T>(
  url: string,
  data: any,
  config?: AxiosRequestConfig
): Promise<T> {
  const response = await apiClient.put<T>(url, data, config)
  return response.data
}
