import { type Fetcher } from "swr"

import {
  makeGetRequest,
  makePostRequest,
  makePutRequest,
} from "../../api-client"
import { type Color } from "../../types"
import {
  type Car,
  type CarId,
  type CarLicensePlate,
  type CarMake,
  type CarMakeId,
  type CarMakeLabel,
  type CarModel,
  type CarModelId,
  type CarModelLabel,
  type CarYear,
  type CreateCar,
  type UpdateCar,
} from "../../types/car/car"
import { CAR_MAKE_MOCKS, CAR_MAKE_MODELS } from "./mocks"

export const fetchCarMakeList: Fetcher<CarMake[]> = () => {
  if (process.env.NODE_ENV === "development") {
    return CAR_MAKE_MOCKS.map(value => ({
      carMakeId: value.carMakeId as CarMakeId,
      label: value.label as CarMakeLabel,
    }))
  }
  return makeGetRequest<CarMake[]>("/car-makes")
}

export const fetchCarModelList: Fetcher<CarModel[]> = () => {
  if (process.env.NODE_ENV === "development") {
    return CAR_MAKE_MODELS.map(value => ({
      carModelId: value.id as CarModelId,
      label: value.label as CarModelLabel,
    }))
  }
  return makeGetRequest<CarModel[]>("/car-models")
}

export const fetchCarList: Fetcher<Car[]> = () => {
  if (process.env.NODE_ENV === "development") {
    return [
      {
        carId: "124" as CarId,
        make: { carMakeId: 1 as CarMakeId, label: "Toyota" as CarMakeLabel },
        model: {
          carModelId: 2 as CarModelId,
          label: "Land Cruiser 200" as CarModelLabel,
        },
        licensePlate: "L 001 AP" as CarLicensePlate,
        year: "2014" as CarYear,
        color: "#ff00ff" as Color,
      },
      {
        carId: "126" as CarId,
        make: { carMakeId: 1 as CarMakeId, label: "Mersedes" as CarMakeLabel },
        model: {
          carModelId: 2 as CarModelId,
          label: "CLS" as CarModelLabel,
        },
        licensePlate: "001 AP 01" as CarLicensePlate,
        year: "2021" as CarYear,
        color: "#ff0000" as Color,
      },
    ]
  }
  return makeGetRequest<Car[]>("/cars")
}

export const createCarFetcher: Fetcher<Car, CreateCar> = car =>
  makePostRequest<Car>("/cars", car)

export const updateCarFetcher: Fetcher<
  Car,
  { carId: CarId; car: UpdateCar }
> = ({ carId, car }) => makePutRequest<Car>(`/cars/${carId}`, car)
