import { type Fetcher } from "swr"

import { makeGetRequest } from "../../api-client"
import { type LimitOffsetPaginationResponse } from "../../types"
import {
  type GetCarWashAvailabilitySlotListMethod,
  type GetCarWashAvailabilitySlotListMethodParams,
} from "../../types/carWash"
import { type CarWash, type CarWashId } from "../../types/carWash"
import { type CarWashDetails } from "../../types/carWash"

export const washListFetcher: Fetcher<
  LimitOffsetPaginationResponse<CarWash>
> = () => makeGetRequest<LimitOffsetPaginationResponse<CarWash>>(`/car-wash`)

export const carWashDetailsFetcher: Fetcher<
  CarWashDetails,
  CarWashId
> = carWashId =>
  true
    ? {
        workingHours: [],
        services: [
          {
            serviceId: "8b7a7d3c-b2a4-4c3b-9c7a-3e8a1a2b8c3b",
            name: "Стандартная мойка",
            emoji: "🚗",
            price: 500,
            duration: 30,
          },
          {
            serviceId: "4f5a4d9b-1c2a-4c4b-9d7a-4e8a2b3c4d5e",
            name: "Мойка с воском",
            emoji: "🧼",
            price: 800,
            duration: 45,
          },
          {
            serviceId: "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
            name: "Глубокая чистка салона",
            emoji: "🧽",
            price: 1200,
            duration: 60,
          },
          {
            serviceId: "7e6d5c4b-3a2b-1c0d-9e8a-7b6a5c4d3e2f",
            name: "Полировка кузова",
            emoji: "✨",
            price: 2000,
            duration: 90,
          },
          {
            serviceId: "3c2b1a0d-9e8a-7b6c-5d4e-3f2a1b0c9d8e",
            name: "Чистка ковриков",
            emoji: "🪣",
            price: 300,
            duration: 20,
          },
          {
            serviceId: "9a8b7c6d-5e4f-3a2b-1c0d-9e8a7b6c5d4e",
            name: "Чистка стекол",
            emoji: "🧴",
            price: 200,
            duration: 15,
          },
          {
            serviceId: "5c4b3a2b-1c0d-9e8a-7b6c-5d4e3f2a1b0c",
            name: "Удаление пятен",
            emoji: "🧽",
            price: 700,
            duration: 40,
          },
          {
            serviceId: "1b2c3d4e-5f6a-7b8c-9d0e-1f2a3b4c5d6e",
            name: "Химчистка",
            emoji: "🧪",
            price: 2500,
            duration: 120,
          },
          {
            serviceId: "7b6a5c4d-3e2f-1a0b-9e8c-7d6c5b4a3e2f",
            name: "Обработка антикоррозийной защитой",
            emoji: "🛡️",
            price: 1500,
            duration: 60,
          },
          {
            serviceId: "3a2b1c0d-9e8a-7b6c-5d4e-3f2a1b0c9d8e",
            name: "Мойка двигателя",
            emoji: "🔧",
            price: 1000,
            duration: 50,
          },
          {
            serviceId: "9c8b7a6d-5e4f-3a2b-1c0d-9e8a7b6c5d4e",
            name: "Удаление запахов",
            emoji: "🌸",
            price: 600,
            duration: 30,
          },
          {
            serviceId: "5d4c3b2a-1c0d-9e8a-7b6c-5d4e3f2a1b0c",
            name: "Полировка фар",
            emoji: "💡",
            price: 400,
            duration: 25,
          },
          {
            serviceId: "1e2f3a4b-5c6d-7a8b-9c0d-1e2f3a4b5c6d",
            name: "Чистка шин и дисков",
            emoji: "🛞",
            price: 500,
            duration: 30,
          },
          {
            serviceId: "7c6b5a4d-3e2f-1a0b-9e8c-7d6c5b4a3e2f",
            name: "Удаление налета и ржавчины",
            emoji: "🔨",
            price: 1400,
            duration: 60,
          },
          {
            serviceId: "3b2c1a0d-9e8a-7b6c-5d4e-3f2a1b0c9d8e",
            name: "Восстановление цвета",
            emoji: "🎨",
            price: 1800,
            duration: 90,
          },
        ],
        name: "ТРЦ Сарыарка",
      }
    : makeGetRequest<CarWashDetails>(`/car-wash/${carWashId}`)

export const carWashAvailabilitySlotListFetcher: Fetcher<
  GetCarWashAvailabilitySlotListMethod,
  GetCarWashAvailabilitySlotListMethodParams
> = params =>
  makeGetRequest<GetCarWashAvailabilitySlotListMethod>(
    `/car-wash/${params.carWashId}/availability`,
    { params }
  )
