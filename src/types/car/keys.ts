import { type CarId } from "./car"

export enum Keys {
  CarList = "CarList",
  CarMakeList = "CarMakeList",
  CarModelList = "CarModelList",
  CreateCar = "CreateCar",
  CurrentCar = "CurrentCar",
  DeleteCar = "DeleteCar",
  UpdateCar = "UpdateCar",
}

export const GetCarById = (id: CarId) => `Cars/${id}`
