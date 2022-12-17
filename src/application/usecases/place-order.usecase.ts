import { OrderRepository, PlaceOrderOutput } from '../contracts/repositories'

export class PlaceOrder {
  constructor (
    private readonly orderRepository: OrderRepository
  ) {}

  async execute (input: PlaceOrderInput): Promise<PlaceOrderOutput | null> {
    return this.orderRepository.placeOrder(input)
  }
}

export type PlaceOrderInput = {
  orderId: string
  customerId: string
  itemId: string
  quantity: number
  total: number
}