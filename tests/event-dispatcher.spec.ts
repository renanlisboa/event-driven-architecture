import { InMemoryMailer } from '../src/infra/mailers'
import { EventDispatcher } from '../src/application/event/event-dispatcher'
import { OrderPlacedEventHandler } from '../src/application/event/event-handlers'
import { OrderPlacedEvent } from '../src/domain/events'

describe('EventDispatcher', () => {
  it('should register an event', async () => {
    const eventDispatcher = new EventDispatcher()
    const mailer = new InMemoryMailer()
    const orderPlacedEventHandler = new OrderPlacedEventHandler(mailer)
    jest.spyOn(eventDispatcher, "register")

    eventDispatcher.register(orderPlacedEventHandler)

    expect(eventDispatcher.register).toHaveBeenCalledWith(orderPlacedEventHandler)
    expect(eventDispatcher.eventHandlers).toContain(orderPlacedEventHandler)
  })

  it('should dispatch an event', () => {
    const eventDispatcher = new EventDispatcher()
    const mailer = new InMemoryMailer()
    const orderPlacedEventHandler = new OrderPlacedEventHandler(mailer)
    eventDispatcher.register(orderPlacedEventHandler)
    const orderPlacedEvent = new OrderPlacedEvent({
      orderNumber: 1,
      customer: {
        name: 'Customer',
        email: 'costumer@gmail.com'
      }
    })
    jest.spyOn(orderPlacedEventHandler, "handle")

    eventDispatcher.dispatch(orderPlacedEvent)
    
    expect(orderPlacedEventHandler.handle).toHaveBeenCalledWith(orderPlacedEvent)
  })
})