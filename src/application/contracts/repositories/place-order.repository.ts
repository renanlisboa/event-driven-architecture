import { Order } from '../../../domain/types'

export interface OrderRepository {
  placeOrder: (order: Order) => Promise<PlaceOrderOutput | null>
}

export type PlaceOrderOutput = {
  orderNumber: number
}