import { Publisher, Subjects, TicketCreatedEvent } from '@vgticket/common'

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated
}