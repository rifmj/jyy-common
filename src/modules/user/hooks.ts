import useSWR from "swr"

import { type UseCurrentUser } from "../../types/user"
import { Keys } from "../../types/user/keys"
import { currentUserFetcher } from "./api"

export const useCurrentUser: UseCurrentUser = () => {
  return useSWR(Keys.CurrentUser, currentUserFetcher)
}
