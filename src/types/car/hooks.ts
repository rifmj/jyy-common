import { type SWRResponse } from "swr"
import { type SWRMutationResponse } from "swr/mutation"

import {
  type Car,
  type CarId,
  type CarMake,
  type CarModel,
  type DeleteCar,
  type UpdateCar,
} from "./car"
import { type Keys } from "./keys"

export type UseCarMakeList = () => SWRResponse<CarMake[]>

export type UseCarModelList = () => SWRResponse<CarModel[]>

export type UseCarList = () => SWRResponse<Car[]>

export type UseCurrentCar = () => SWRResponse<Car>

export type UseCreateCar = () => SWRMutationResponse<Car>

export type UseUpdateCurrentCar = () => SWRMutationResponse<
  null,
  any,
  Keys,
  { carId: CarId }
>

export type UseUpdateCar = () => SWRMutationResponse<Car, any, Keys, UpdateCar>

export type UseDeleteCar = () => SWRMutationResponse<Car, any, Keys, DeleteCar>
