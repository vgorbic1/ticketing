import  { Subjects, Publisher, PaymentCreatedEvent } from '@vgticket/common'

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated
}