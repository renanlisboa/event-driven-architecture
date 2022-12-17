import { Event } from '../../domain/contracts'

export interface EventHandler {
  eventName: string

  handle: <T>(event: Event<T>) => void
}