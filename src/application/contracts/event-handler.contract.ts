import { Event } from '../../domain/contracts'

export interface EventHandler {
  eventName: string

  handle: (event: Event) => void
}