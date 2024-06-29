import { type Tagged } from "type-fest"

import { type UserPhone } from "./user"

export type AccessToken = Tagged<string, "AccessToken">

export type RefreshToken = Tagged<string, "RefreshToken">

export type UserAuth = {
  accessToken?: AccessToken
  /**
   * Отправляет код
   * @param phoneNumber
   */
  authorizeByPhoneNumber(phoneNumber: UserPhone): void
  refreshToken?: RefreshToken
  /**
   * Авторизовывает пользователя
   * @param phoneNumber
   * @param code
   */
  signIn(phoneNumber: UserPhone, code: string): void
  /**
   * Выход пользователя из аккаунта
   */
  signOut(): void
}
