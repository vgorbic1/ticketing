import { Subjects, Publisher, ExpirationCompleteEvent } from '@vgticket/common'

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete
}
