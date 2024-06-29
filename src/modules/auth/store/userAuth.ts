import { makePostRequest } from "../../../api-client"
import { type UserPhone } from "../../../types/user"
import {
  type AccessToken,
  type UserAuth as IUserAuth,
  type RefreshToken,
} from "../../../types/user/auth"

export class UserAuth implements IUserAuth {
  accessToken?: AccessToken = "123" as AccessToken
  phoneNumber?: string
  refreshToken?: RefreshToken

  authorizeByPhoneNumber(phoneNumber: UserPhone): void {
    // TODO: Call send sms code method
  }

  async checkOtpCode(code: number) {
    const request = await makePostRequest(`/user/use-otp/`, {
      code,
    })
    return request
  }

  async sendOtpCode(phoneNumber: string) {
    this.phoneNumber = phoneNumber
    const request = await makePostRequest(`/user/send-otp/`, {
      auth_type: "phone_number",
      phone_number: "+77782993192",
    })
    return request
  }

  signIn(phoneNumber: UserPhone, code: string): void {
    this.accessToken = "1" as AccessToken
    this.refreshToken = "2" as RefreshToken
  }

  signOut(): void {
    this.accessToken = undefined
    this.refreshToken = undefined
  }

  get isAuthorized() {
    return Boolean(this.accessToken)
  }
}
