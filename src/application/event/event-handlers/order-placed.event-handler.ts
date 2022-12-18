import { EventHandler } from '../../contracts'
import { Mailer } from '../../contracts/mailer.contract'
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
      message: `Hello Customer, your order #${event.data.orderNumber} was successfuly placed`
    }
    this.mailer.send(email)
  }
}