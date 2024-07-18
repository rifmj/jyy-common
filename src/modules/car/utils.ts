import type { Color } from "../../types"
import type {
  Car,
  CarId,
  CarLicensePlate,
  CarMakeId,
  CarMakeLabel,
  CarModelId,
  CarModelLabel,
  CarYear,
} from "../../types/car"

export const mapFetchCurrentCarResponse = (car: {
  id: number
  color: string
  year: number
  license_place: string
  car_make: number
  car_model: number
  car_type: number
}) => {
  return {
    carId: car.id as CarId,
    make: {
      carMakeId: car.car_make as CarMakeId,
      label: "" as CarMakeLabel,
    },
    model: {
      carModelId: car.car_model as CarModelId,
      carMakeId: car.car_make as CarMakeId,
      label: "" as CarModelLabel,
    },
    licensePlate: car.license_place as CarLicensePlate,
    year: car.year as CarYear,
    color: car.color as Color,
  }
}

export const mapFetchCarList = (carList: any[]): Car[] => {
  return carList.map(value => ({
    carId: value.id,
    licensePlate: value.license_plate,
    year: value.year,
    color: "#ff00ff" as Color,
    make: {
      carMakeId: value.car_make as CarMakeId,
      label: "" as CarMakeLabel,
    },
    model: {
      carMakeId: value.car_make as CarMakeId,
      carModelId: value.car_model as CarModelId,
      label: "" as CarModelLabel,
    },
  }))
}
