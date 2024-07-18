import { type Tagged } from "type-fest"

import { type Color } from "../common"

export type CarMakeId = Tagged<number, "CarMakeId">

export type CarMakeLabel = Tagged<string, "CarMakeLabel">

export type CarModelId = Tagged<number, "CarModelId">

export type CarModelLabel = Tagged<string, "CarModelLabel">

export type CarId = Tagged<string, "CarId">

export type CarVIN = Tagged<string, "CarVIN">

export type CarLicensePlate = Tagged<string, "CarLicensePlate">

export type CarYear = Tagged<string, "CarYear">

export type CarMake = {
  carMakeId: CarMakeId
  label: CarMakeLabel
}

export type CarModel = {
  carMakeId: CarMakeId
  carModelId: CarModelId
  label: CarModelLabel
}

export type Car = {
  carId: CarId
} & CreateCar

export type DeleteCar = {
  carId: CarId
}

export type CreateCar = {
  color?: Color
  make: CarMake
  model: CarModel
  vin?: CarVIN
  licensePlate?: CarLicensePlate
  year?: CarYear
}

export type UpdateCar = CreateCar
