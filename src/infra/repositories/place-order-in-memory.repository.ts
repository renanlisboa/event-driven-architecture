import { 
  OrderRepository, 
  PlaceOrderOutput 
} from '../../application/contracts/repositories'
import { Order } from '../../domain/types'

export class OrderRepositoryInMemory implements OrderRepository {
  private readonly orders: Order[] = []

  async placeOrder (order: Order): Promise<PlaceOrderOutput | null> {
    this.orders.push(order)
    if (this.orders.length == 0) return null
    return { orderNumber: this.orders.length }
  }
}