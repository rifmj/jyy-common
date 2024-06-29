import { type Tagged } from "type-fest"

import { type TimeIntervalEnd, type TimeIntervalStart } from "../common"
import { type CarWashId } from "./carWash"

export enum CarWashAvailabilityStatus {
  Available,
  NotAvailable,
  NotWorking,
}

export type CarWashAvailabilitySlotId = Tagged<
  string,
  "CarWashAvailabilitySlotId"
>

/**
 * Представляет временной слот доступности для мойки автомобилей.
 */
export type CarWashAvailabilitySlot = {
  slotId: CarWashAvailabilitySlotId
  /**
   * Время начала слота доступности в 24-часовом формате (ЧЧ:ММ).
   * @example "09:00"
   */
  start: TimeIntervalStart

  /**
   * Время окончания слота доступности в 24-часовом формате (ЧЧ:ММ).
   * @example "10:00"
   */
  end: TimeIntervalEnd
}

export type GetCarWashAvailabilitySlotListMethodParams = {
  carWashId: CarWashId
}

export type GetCarWashAvailabilitySlotListMethod = CarWashAvailabilitySlot[]
