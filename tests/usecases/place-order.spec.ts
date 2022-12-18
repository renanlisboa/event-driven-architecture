import { OrderRepositoryInMemory } from '../../src/infra/repositories'
import { InMemoryMailer } from '../../src/infra/mailers'
import { PlaceOrder, PlaceOrderInput } from '../../src/application/usecases'
import { EventDispatcher } from '../../src/application/event/event-dispatcher'
import { OrderPlacedEventHandler } from '../../src/application/event/event-handlers'

describe('PlaceOrder', () => {
  it('should placed an order', async () => {
    const orderRepository = new OrderRepositoryInMemory()
    const eventDispatcher = new EventDispatcher()
    const placeOrder = new PlaceOrder(orderRepository, eventDispatcher)
    const input = {
      orderId: '1a2b3c',
      customerId: 'a1b2c3',
      itemId: 'c3b2a1',
      quantity: 1,
      total: 100,
    } as PlaceOrderInput
    
    const output = await placeOrder.execute(input)
    
    expect(output).not.toBe(null)
  })

  it('should send an email to the customer after the order is placed', async () => {
    const orderRepository = new OrderRepositoryInMemory()
    const eventDispatcher = new EventDispatcher()
    const mailer = new InMemoryMailer()
    const mailerEventHandler = new OrderPlacedEventHandler(mailer)
    eventDispatcher.register(mailerEventHandler)
    const placeOrder = new PlaceOrder(orderRepository, eventDispatcher)
    const input = {
      orderId: '1a2b3c',
      customerId: 'a1b2c3',
      itemId: 'c3b2a1',
      quantity: 1,
      total: 100,
    } as PlaceOrderInput
    jest.spyOn(mailer, 'send')

    await placeOrder.execute(input)
    
    expect(mailer.send).toHaveBeenCalled()
    expect(mailer.emails).toHaveLength(1)
  })
})