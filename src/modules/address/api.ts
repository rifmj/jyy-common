import { makeGetRequest, makePostRequest } from "../../api-client"
import { type City, type GetCityListResponse } from "../../types/address/city"
import { type CityId } from "../../types/common"

/**
 * Получает список городов с сервера.
 *
 * @returns Промис, который разрешается списком городов типа GetCityListResponse.
 *
 * @example
 * ```typescript
 * import { fetchCityList } from "@/api-client";
 *
 * async function loadCities() {
 *   const cities = await fetchCityList();
 *   console.log(cities);
 * }
 * ```
 */
export const fetchCityList = async (): Promise<GetCityListResponse> => {
  return makeGetRequest<GetCityListResponse>("/cities")
}

/**
 * Устанавливает текущий город пользователя на сервере.
 *
 * @param cityId Идентификатор города, который нужно установить для пользователя.
 * @returns Промис, который разрешается данными установленного города типа City.
 *
 * @example
 * ```typescript
 * import { setUserCity } from "@/api-client";
 *
 * async function updateUserCity(cityId: CityId) {
 *   const city = await setUserCity(cityId);
 *   console.log(city);
 * }
 * ```
 */
export const setUserCity = async (cityId: CityId): Promise<City> => {
  return makePostRequest<City>(`/user/city`, { cityId })
}
