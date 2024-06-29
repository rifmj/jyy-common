import { type Tagged } from "type-fest"

/**
 * Тип, представляющий широту.
 * Используется для обозначения значений широты в координатах.
 * @example 37.7749
 */
export type Latitude = Tagged<number, "Latitude">

/**
 * Тип, представляющий долготу.
 * Используется для обозначения значений долготы в координатах.
 * @example -122.4194
 */
export type Longitude = Tagged<number, "Longitude">

/**
 * Тип, представляющий местоположение.
 * Содержит координаты широты и долготы.
 */
export type Location = {
  /**
   * Широта местоположения.
   */
  latitude: Latitude

  /**
   * Долгота местоположения.
   */
  longitude: Longitude
}

/**
 * Тип, представляющий адрес.
 * Содержит информацию о городе, адресе, улице и доме.
 */
export type Address = {
  /**
   * Название города.
   * @example "Москва"
   */
  city: string

  /**
   * Полный адрес.
   * @example "ул. Тверская, д. 1"
   */
  address: string

  /**
   * Название улицы (необязательное поле).
   * @example "Тверская"
   */
  street?: string

  /**
   * Номер дома (необязательное поле).
   * @example "1"
   */
  house?: string
}
