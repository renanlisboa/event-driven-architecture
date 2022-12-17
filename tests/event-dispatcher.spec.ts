import { EventDispatcher } from '../src/infra/event-dispatcher'
import { MailerEventHandler } from '../src/application/event-handlers/mailer.event-handler'
import { OrderPlacedEvent } from '../src/domain/events'

describe('EventDispatcher', () => {
  it('should register an event', async () => {
    const eventDispatcher = new EventDispatcher()
    const mailerEventHandler = new MailerEventHandler()
    jest.spyOn(eventDispatcher, "register")

    eventDispatcher.register(mailerEventHandler)

    expect(eventDispatcher.register).toHaveBeenCalledWith(mailerEventHandler)
    expect(eventDispatcher.eventHandlers).toContain(mailerEventHandler)
  })

  it('should dispatch an event', () => {
    const eventDispatcher = new EventDispatcher()
    const mailerEventHandler = new MailerEventHandler()
    eventDispatcher.register(mailerEventHandler)
    const orderPlacedEvent = new OrderPlacedEvent({
      orderId: '1a2b3c',
      customerId: 'a1b2c3',
      itemId: 'c3b2a1',
      quantity: 1,
      total: 100,
    })
    jest.spyOn(mailerEventHandler, "handle")

    eventDispatcher.dispatch(orderPlacedEvent)
    
    expect(mailerEventHandler.handle).toHaveBeenCalledWith(orderPlacedEvent)
  })
})