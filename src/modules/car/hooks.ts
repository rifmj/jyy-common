import useSWR from "swr"
import useSWRMutation from "swr/mutation"

import {
  type Car,
  type CarId,
  type CarMake,
  type CarModel,
  type CreateCar,
  type UpdateCar,
} from "../../types/car/car"
import {
  type UseCarList,
  type UseCarMakeList,
  type UseCarModelList,
  type UseCreateCar,
  type UseUpdateCar,
} from "../../types/car/hooks"
import { Keys } from "../../types/car/keys"
import {
  createCarFetcher,
  fetchCarList,
  fetchCarMakeList,
  fetchCarModelList,
  updateCarFetcher,
} from "./api"

export const useCarMakeList: UseCarMakeList = () => {
  return useSWR<CarMake[]>(Keys.CarMakeList, fetchCarMakeList)
}

export const useCarModelList: UseCarModelList = () => {
  return useSWR<CarModel[]>(Keys.CarModelList, fetchCarModelList)
}

export const useCarList: UseCarList = () => {
  return useSWR<Car[]>(Keys.CarList, fetchCarList)
}

export const useCreateCar: UseCreateCar = () => {
  return useSWRMutation<Car, any, Keys, CreateCar>(
    Keys.CreateCar,
    (arg, extraArg) => createCarFetcher(extraArg.arg)
  )
}

export const useUpdateCar: UseUpdateCar = () => {
  return useSWRMutation<Car, any, Keys, UpdateCar>(Keys.UpdateCar, (key, arg) =>
    updateCarFetcher({
      carId: key as CarId,
      car: arg.arg,
    })
  )
}
