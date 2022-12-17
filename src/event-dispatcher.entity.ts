import { EventHandler } from './event-handle.interface'

export class EventDispatcher {
  readonly eventHandlers: EventHandler[] = []

  register(eventHandler: EventHandler): void {
    this.eventHandlers.push(eventHandler)
  }
}