import { type Fetcher } from "swr"

import { makeGetRequest, makePostRequest } from "../../api-client"
import { type UpdateUser, type User } from "../../types/user/user"

export const currentUserFetcher: Fetcher<User> = () =>
  makeGetRequest<User>(`/user`)

export const updateCurrentUser: Fetcher<User> = (user: UpdateUser) =>
  makePostRequest<User>(`/user`, user)
