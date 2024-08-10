import { type CarId } from "./car"

export enum Keys {
  CarList = "CarList",
  CarMakeList = "CarMakeList",
  CarModelList = "CarModelList",
  CreateCar = "CreateCar",
  CurrentCar = "CurrentCar",
  DeleteCar = "DeleteCar",
  UpdateCar = "UpdateCar",
  UpdateCurrentCar = "UpdateCurrentCar",
}

export const GetCarById = (id: CarId) => `Cars/${id}`
