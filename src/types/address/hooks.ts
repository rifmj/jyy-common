import { type SWRResponse } from "swr"
import { type SWRMutationResponse } from "swr/mutation"

import { type CityId } from "../common"
import { type City, type GetCityListResponse } from "./city"

export type UseCityList = () => SWRResponse<GetCityListResponse>

export type UseSetUserCity = (cityId: CityId) => SWRMutationResponse<City>
