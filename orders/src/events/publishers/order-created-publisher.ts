import { Publisher, OrderCreatedEvent, Subjects } from "@vgticket/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated
}