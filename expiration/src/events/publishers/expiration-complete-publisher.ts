import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@akruktickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
