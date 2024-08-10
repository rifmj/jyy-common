import { type Fetcher } from "swr"

import {
  makeDeleteRequest,
  makeGetRequest,
  makePostRequest,
  makePutRequest,
} from "../../api-client"
import {
  type Car,
  type CarId,
  type CarMake,
  type CarModel,
  type CreateCar,
  type UpdateCar,
} from "../../types/car"
import { mapFetchCarList, mapFetchCurrentCarResponse } from "./utils"

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
  return mapFetchCarList(request)
}

export const fetchCar: (id: CarId) => Promise<Car> = (id: CarId) => {
  return makeGetRequest<Car>(`/api/car/${id}/`)
}

export const fetchCurrentCar: () => Promise<Car | null> = async () => {
  const car = await makeGetRequest<any>(`/api/car/current-car/`)
  if (car?.id) return mapFetchCurrentCarResponse(car)
  return null
}

export const createCarFetcher: Fetcher<Car, CreateCar> = car =>
  makePostRequest<Car>("/api/car/create/", car)

export const updateCarFetcher: Fetcher<
  Car,
  { carId: CarId; car: UpdateCar }
> = ({ carId, car }) => makePutRequest<Car>(`/cars/${carId}`, car)

export const updateCurrentCarFetcher: Fetcher<any, { carId: CarId }> = ({
  carId,
}) => {
  return makePostRequest<any>(`/api/car/current-car/`, { car_id: carId })
}

export const deleteCarFetcher: Fetcher<Car, { carId: CarId }> = ({ carId }) =>
  makeDeleteRequest<Car>(`/api/car/${carId}/`)
