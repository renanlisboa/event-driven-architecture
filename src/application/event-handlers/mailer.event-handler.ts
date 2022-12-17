import { EventHandler } from './event-handler'
import { Event } from '../../domain/events/event'

export class MailerEventHandler implements EventHandler {
  eventName = 'OrderPlaced'

  handle <T>(event: Event<T>): void {
    console.log(event)
  }
}