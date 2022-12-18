export interface Mailer {
  emails: Email[]

  send: (email: Email) => void
}

export type Email = {
  recipient: {
    name: string
    email: string
  }
  message: string
}