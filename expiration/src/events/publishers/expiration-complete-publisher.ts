import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@besticket/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
