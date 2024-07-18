import "dotenv/config"

import type { Car } from "../src"

import { makeGetRequest } from "../src/api-client"
import {
  fetchCar,
  fetchCarList,
  fetchCarMakeList,
  fetchCarModelList,
  fetchCurrentCar,
} from "../src/modules/car/api"

async function main() {
  try {
    const carMakes = await fetchCarMakeList()
    const carModels = await fetchCarModelList()
    const userCarsList = await fetchCarList()

    // not working
    const carById = await fetchCar(1)
    const currentCar = await fetchCurrentCar()

    const t = await makeGetRequest<Car>(
      `/api/station/control/my_wash_order_history/?limit=100&offset=0`
    )

    debugger
  } catch (e) {
    debugger
  }
  debugger
}

main()
