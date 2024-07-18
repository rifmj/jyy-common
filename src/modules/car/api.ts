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
  type CarMake,
  type CarMakeId,
  type CarMakeLabel,
  type CarModel,
  type CarModelId,
  type CarModelLabel,
  type CreateCar,
  type UpdateCar,
} from "../../types/car"

export const fetchCarMakeList: Fetcher<CarMake[]> = async () => {
  const data = await makeGetRequest<any[]>("/api/car/makes/")
  return data.map(value => ({
    carMakeId: value.id,
    label: value.name,
  }))
}

export const fetchCarModelList: Fetcher<CarModel[]> = async () => {
  const data = await makeGetRequest<any[]>("/api/car/models/")
  return data.map(value => ({
    carMakeId: value.make,
    carModelId: value.id,
    label: value.name,
  }))
}

export const fetchCarList: Fetcher<Car[]> = async () => {
  const request = await makeGetRequest<any[]>("/api/car/")
  return request.map(value => ({
    carId: value.id,
    licensePlate: value.license_plate,
    year: value.year,
    color: "#ff00ff" as Color,
    make: {
      carMakeId: value.car_make as CarMakeId,
      label: "Toyota" as CarMakeLabel,
    },
    model: {
      carMakeId: value.car_make as CarMakeId,
      carModelId: value.car_model as CarModelId,
      label: "Land Cruiser 200" as CarModelLabel,
    },
  }))
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
