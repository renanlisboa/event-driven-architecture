import { Event } from '../../domain/events/event'

export interface EventHandler {
  eventName: string

  handle: <T>(event: Event<T>) => void
}