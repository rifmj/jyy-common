import { type SWRResponse } from "swr"

import { type User } from "./user"

export type UseCurrentUser = () => SWRResponse<User>
