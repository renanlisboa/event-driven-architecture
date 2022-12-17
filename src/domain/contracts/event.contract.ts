export interface Event<T> {
  name: string
  dateTime: Date
  data: T
}