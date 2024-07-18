import "dotenv/config"
import { fetchCar, fetchCarList, fetchCarMakeList, fetchCarModelList, fetchCurrentCar } from "../src/modules/car/api"
import { fetchUserBookingList } from "../src/modules/booking/api"
import { convertDataToBookings } from "../src/modules/booking/utils"

async function main() {
  try {
    const carMakes = await fetchCarMakeList()
    const carModels = await fetchCarModelList()
    const userCarsList = await fetchCarList()

    // not working
    const carById = await fetchCar(1)
    const currentCar = await fetchCurrentCar()

    // const t = await makeGetRequest<Car>(
    //   `/api/station/control/my_wash_order_history/?limit=100&offset=0`
    // )

const bookings = await    fetchUserBookingList()
    const t = convertDataToBookings(bookings.items)

    debugger
  } catch (e) {
    debugger
  }
  debugger
}

main()
