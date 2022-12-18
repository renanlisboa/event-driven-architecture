import { OrderRepository, PlaceOrderOutput } from '../contracts/repositories'
import { EventDispatcher } from '../event/event-dispatcher'
import { OrderPlacedEvent } from '../../domain/events'

export class PlaceOrder {
  constructor (
    private readonly orderRepository: OrderRepository,
    private readonly eventDispatcher: EventDispatcher,
  ) {}

  async execute (input: PlaceOrderInput): Promise<PlaceOrderOutput | null> {
    const output = await this.orderRepository.placeOrder(input)
    if (!output) return output
    const orderPlacedEvent = new OrderPlacedEvent({
      orderNumber: output.orderNumber,
      customer: {
        name: 'Customer',
        email: 'costumer@gmail.com'
      }
    })
    this.eventDispatcher.dispatch(orderPlacedEvent)
    return output
  }
}

export type PlaceOrderInput = {
  orderId: string
  customerId: string
  itemId: string
  quantity: number
  total: number
}