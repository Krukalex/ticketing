import { Subjects, Publisher, PaymentCreatedEvent } from "@akruktickets/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
