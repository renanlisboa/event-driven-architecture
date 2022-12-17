import { EventHandler } from '../contracts'
import { Event } from '../../domain/contracts'

export class MailerEventHandler implements EventHandler {
  eventName = 'OrderPlaced'

  handle <T>(event: Event<T>): void {
    console.log(event)
  }
}