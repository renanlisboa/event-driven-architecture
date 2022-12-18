import { EventHandler, Mailer } from '../../contracts'
import { OrderPlacedEvent } from '../../../domain/events'

export class OrderPlacedEventHandler implements EventHandler {
  eventName = 'OrderPlaced'

  constructor (private readonly mailer: Mailer) {}

  handle (event: OrderPlacedEvent): void {
    const email = {
      recipient: {
        name: event.data.customer.name,
        email: event.data.customer.email
      },
      message: `
        ORDER #${event.data.orderNumber}
        
        Hello ${event.data.customer.name}, your order was successfuly placed.
      `
    }
    this.mailer.send(email)
  }
}