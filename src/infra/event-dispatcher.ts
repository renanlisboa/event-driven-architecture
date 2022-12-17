import { EventHandler } from '../application/event-handlers'
import { Event } from '../domain/events'

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