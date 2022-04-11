import { Publisher, OrderCancelledEvent, Subjects } from "@vgticket/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled
}