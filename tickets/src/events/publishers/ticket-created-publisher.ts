import { Publisher, Subjects, TicketCreatedEvent } from "@akruktickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
