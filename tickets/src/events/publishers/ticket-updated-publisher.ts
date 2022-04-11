import { Publisher, Subjects, TicketUpdatedEvent } from '@vgticket/common'

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}