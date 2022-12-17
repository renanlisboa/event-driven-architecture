import { EventHandler } from '../application/contracts'
import { Event } from '../domain/contracts'

export class EventDispatcher {
  readonly eventHandlers: EventHandler[] = []

  register (eventHandler: EventHandler): void {
    this.eventHandlers.push(eventHandler)
  }

  dispatch <T>(event: Event<T>): void {
    for (const eventHandler of this.eventHandlers) {
      if (eventHandler.eventName != event.name) continue
      eventHandler.handle(event)
    }
  }
}