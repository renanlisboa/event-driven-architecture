import { Event } from "./event"
import { Order } from '../types'

export class OrderPlacedEvent implements Event<Order> {
  name = 'OrderPlaced'
  dateTime: Date
  data: Order

  constructor (data: Order) {
    this.dateTime = new Date()
    this.data = data
  }
}