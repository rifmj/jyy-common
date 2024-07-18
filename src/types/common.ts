/**
 * @module Common
 */

import { type Tagged } from "type-fest"

/**
 * Тип, представляющий URL.
 * Используется для обозначения строк, содержащих URL-адреса.
 * @example "https://example.com"
 */
export type Url = Tagged<string, "Url">

/**
 * Тип, представляющий цену.
 * Используется для обозначения строк, содержащих значение цены.
 * @example "100.00"
 */
export type Price = Tagged<string, "Price">

/**
 * Тип, представляющий идентификатор бронирования.
 * Используется для уникальной идентификации бронирования.
 * @example "booking123"
 */
export type BookingId = Tagged<string, "BookingId">

/**
 * Тип, представляющий временной интервал.
 * Используется для обозначения временных интервалов.
 * @example "10:00-12:00"
 */
export type TimeInterval = Tagged<string, "TimeInterval">

/**
 * Тип, представляющий начало временного интервала.
 * Используется для обозначения начала временного интервала.
 * @example "10:00"
 */
export type TimeIntervalStart = Tagged<TimeInterval, "TimeIntervalStart">

/**
 * Тип, представляющий конец временного интервала.
 * Используется для обозначения конца временного интервала.
 * @example "12:00"
 */
export type TimeIntervalEnd = Tagged<TimeInterval, "TimeIntervalEnd">

/**
 * Тип, представляющий идентификатор города.
 * Используется для уникальной идентификации города.
 * @example "city123"
 */
export type CityId = Tagged<number, "CityId">

/**
 * Тип, представляющий цвет.
 * Используется для обозначения строк, содержащих цветовые коды.
 * @example "#FFFFFF"
 */
export type Color = Tagged<string, "Color">

/**
 * Тип, представляющий общее количество элементов для пагинации.
 * Используется для обозначения общего числа элементов, доступных для пагинации.
 * @example 100
 */
export type PaginationTotalCount = Tagged<number, "PaginationTotalCount">

/**
 * Тип, представляющий лимит элементов на странице для пагинации.
 * Используется для обозначения максимального числа элементов на одной странице.
 * @example 10
 */
export type PaginationLimit = Tagged<number, "PaginationLimit">

/**
 * Тип, представляющий смещение элементов для пагинации.
 * Используется для обозначения числа пропущенных элементов от начала.
 * @example 20
 */
export type PaginationOffset = Tagged<number, "PaginationOffset">

/**
 * Ответ для пагинации с лимитом и смещением.
 * @template T Тип элементов в ответе.
 */
export type LimitOffsetPaginationResponse<T> = {
  /**
   * Общее количество элементов.
   * Представляет собой общее количество доступных элементов для пагинации.
   */
  totalCount: PaginationTotalCount

  /**
   * Лимит элементов на странице.
   * Представляет собой максимальное количество элементов, отображаемых на одной странице.
   */
  limit: PaginationLimit

  /**
   * Смещение элементов.
   * Представляет собой количество элементов, пропущенных от начала списка.
   */
  offset: PaginationOffset

  /**
   * Массив элементов.
   * Представляет собой массив элементов типа T, содержащий данные текущей страницы.
   */
  items: T[]
}
