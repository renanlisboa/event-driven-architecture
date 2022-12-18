import { Mailer, Email } from "../../application/contracts"

export class InMemoryMailer implements Mailer {
  readonly emails: Email[] = []

  async send (email: Email): Promise<void> {
    this.emails.push(email)
  }
}