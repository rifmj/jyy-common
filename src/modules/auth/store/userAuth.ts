import { makePostRequest } from "../../../api-client"
import { type UserPhone } from "../../../types/user"
import {
  type AccessToken,
  type UserAuth as IUserAuth,
  type RefreshToken,
} from "../../../types/user/auth"

export class UserAuth implements IUserAuth {
  accessToken?: AccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIzMzc2OTk1LCJpYXQiOjE3MjA3ODQ5OTUsImp0aSI6IjU0M2RmZDgyYzg1ZDQ4YjZiMzY1ZTI2NDU2YzA4YzE2IiwidXNlcl9pZCI6MX0.x-f6jyke5o0MNMgFi-MPmfQlvo4jcV3JMqWtKUd6iho" as AccessToken
  // accessToken?: AccessToken
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
