import { EventDispatcher } from '../src/event-dispatcher.entity'
import { MailerEventHandler } from '../src/mailer-event-handler'

describe('EventDispatcher', () => {
  it('should register an event', async () => {
    const eventDispatcher = new EventDispatcher()
    const mailerEventHandler = new MailerEventHandler()
    jest.spyOn(eventDispatcher, "register")

    eventDispatcher.register(mailerEventHandler)

    expect(eventDispatcher.register).toHaveBeenCalledWith(mailerEventHandler)
    expect(eventDispatcher.eventHandlers).toContain(mailerEventHandler)
  })
})