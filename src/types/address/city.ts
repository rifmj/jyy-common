import { type Tagged } from "type-fest"

import { type Location } from "./location"

/**
 * Тип, представляющий псевдоним города.
 * Используется для уникальной идентификации города по его псевдониму.
 * @example "new-york"
 * @module City
 */
export type CityAlias = Tagged<string, "CityAlias">

/**
 * Тип, представляющий название города.
 * Используется для хранения официального названия города.
 * @example "New York"
 * @module City
 */
export type CityName = Tagged<string, "CityName">

/**
 * Интерфейс, представляющий город.
 */
export interface City {
  /**
   * Псевдоним города.
   * Уникальный идентификатор города.
   */
  alias: CityAlias

  /**
   * Местоположение города.
   * Объект, содержащий координаты и другие данные о местоположении.
   */
  location: Location

  /**
   * Название города.
   * Официальное название города.
   */
  name: CityName
}

/**
 * Тип, представляющий ответ на запрос списка городов.
 * Массив объектов типа City.
 */
export type GetCityListResponse = City[]
