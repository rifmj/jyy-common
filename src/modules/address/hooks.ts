import useSWR from "swr"
import useSWRMutation from "swr/mutation"

import { type City, type GetCityListResponse } from "../../types"
import { type UseCityList, type UseSetUserCity } from "../../types"
import { type CityId } from "../../types"
import { fetchCityList, setUserCity } from "./api"

/**
 * Хук для получения списка городов.
 *
 * @returns SWRResponse, который разрешается списком городов типа GetCityListResponse.
 *
 * @example
 * ```typescript
 * import { useCityList } from "@/modules/address/hooks";
 *
 * const { data, error } = useCityList();
 *
 * if (error) {
 *   console.error("Ошибка при получении списка городов:", error);
 * }
 *
 * if (data) {
 *   console.log("Список городов:", data);
 * }
 * ```
 */
export const useCityList: UseCityList = () => {
  return useSWR<GetCityListResponse>("/cities", fetchCityList)
}

/**
 * Хук для установки текущего города пользователя.
 *
 * @param cityId Идентификатор города, который нужно установить для пользователя.
 * @returns SWRMutationResponse, который разрешается данными установленного города типа City.
 *
 * @example
 * ```typescript
 * import { useSetUserCity } from "@/modules/address/hooks";
 *
 * const { trigger, data, error } = useSetUserCity();
 *
 * async function handleSetCity(cityId: CityId) {
 *   const result = await trigger(cityId);
 *   if (result) {
 *     console.log("Город пользователя установлен:", result);
 *   }
 * }
 *
 * // Вызов функции handleSetCity при выборе города
 * handleSetCity("city123");
 * ```
 */
export const useSetUserCity: UseSetUserCity = () => {
  return useSWRMutation<City, { cityId: CityId }>(
    ["/user/city"],
    ({ cityId }) => setUserCity(cityId)
  )
}
