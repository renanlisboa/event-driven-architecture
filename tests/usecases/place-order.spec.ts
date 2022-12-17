import { OrderRepositoryInMemory } from '../../src/infra/repositories'
import { PlaceOrder, PlaceOrderInput } from '../../src/application/usecases'

describe('PlaceOrder', () => {
  it('should placed an order', async () => {
    const orderRepository = new OrderRepositoryInMemory()
    const placeOrder = new PlaceOrder(orderRepository)
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
})