import { type SWRResponse } from "swr"
import { type SWRMutationResponse } from "swr/mutation"

import { type Car, type CarMake, type CarModel, type UpdateCar } from "./car"
import { type Keys } from "./keys"

export type UseCarMakeList = () => SWRResponse<CarMake[]>

export type UseCarModelList = () => SWRResponse<CarModel[]>

export type UseCarList = () => SWRResponse<Car[]>

export type UseCreateCar = () => SWRMutationResponse<Car>

export type UseUpdateCar = () => SWRMutationResponse<Car, any, Keys, UpdateCar>
