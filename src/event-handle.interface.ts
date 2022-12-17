import { Event } from './event.type'

export interface EventHandler {
  handle: (event: Event) => void
}