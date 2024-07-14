import { type Fetcher } from "swr"

import {
  makeDeleteRequest,
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

export const fetchCarMakeList: Fetcher<CarMake[]> = () => {
  return makeGetRequest<CarMake[]>("/api/car/makes")
}

export const fetchCarModelList: Fetcher<CarModel[]> = () => {
  return makeGetRequest<CarModel[]>("/api/car/models")
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
  return makeGetRequest<Car[]>("/api/car/")
}

export const fetchCar: (id: CarId) => Promise<Car> = (id: CarId) => {
  return makeGetRequest<Car>(`/api/car/${id}/`)
}

export const fetchCurrentCar: Fetcher<Car> = () => {
  return makeGetRequest<Car>(`/api/car/current-car/`)
}

export const createCarFetcher: Fetcher<Car, CreateCar> = car =>
  makePostRequest<Car>("/api/car/create/", car)

export const updateCarFetcher: Fetcher<
  Car,
  { carId: CarId; car: UpdateCar }
> = ({ carId, car }) => makePutRequest<Car>(`/cars/${carId}`, car)

export const deleteCarFetcher: Fetcher<Car, { carId: CarId }> = ({ carId }) =>
  makeDeleteRequest<Car>(`/api/car/${carId}/`)
