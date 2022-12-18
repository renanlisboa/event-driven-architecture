import { Event } from "../contracts"

export class OrderPlacedEvent implements Event {
  name = 'OrderPlaced'
  dateTime: Date
  data: OrderPlacedEventData

  constructor (data: OrderPlacedEventData) {
    this.dateTime = new Date()
    this.data = data
  }
}

type OrderPlacedEventData = {
  orderNumber: number
  customer: {
    name: string
    email: string
  }
}