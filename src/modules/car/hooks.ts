import useSWR, { type SWRResponse } from "swr"
import useSWRMutation from "swr/mutation"

import {
  type Car,
  type CarId,
  type CarMake,
  type CarModel,
  type CreateCar,
  type DeleteCar,
  type UpdateCar,
  type UseCarList,
  type UseCarMakeList,
  type UseCarModelList,
  type UseCreateCar,
  type UseCurrentCar,
  type UseDeleteCar,
  type UseUpdateCar,
  type UseUpdateCurrentCar,
} from "../../types/car"
import { GetCarById, Keys } from "../../types/car/keys"
import {
  createCarFetcher,
  deleteCarFetcher,
  fetchCar,
  fetchCarList,
  fetchCarMakeList,
  fetchCarModelList,
  fetchCurrentCar,
  updateCarFetcher,
  updateCurrentCarFetcher,
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

export const useCurrentCar: UseCurrentCar = () => {
  return useSWR<Car | null>(Keys.CurrentCar, fetchCurrentCar)
}

export const useUpdateCurrentCar: UseUpdateCurrentCar = () => {
  return useSWRMutation<
    null,
    any,
    Keys,
    {
      carId: CarId
    }
  >(Keys.UpdateCurrentCar, (arg, extraArg) =>
    updateCurrentCarFetcher(extraArg.arg)
  )
}

export const useCar: (carId: CarId) => SWRResponse<Car, any> = (
  carId: CarId
) => {
  return useSWR<Car>(GetCarById(carId), () => fetchCar(carId))
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

export const useDeleteCar: UseDeleteCar = () => {
  return useSWRMutation<Car, any, Keys, DeleteCar>(Keys.DeleteCar, (key, arg) =>
    deleteCarFetcher({
      carId: key as CarId,
    })
  )
}
