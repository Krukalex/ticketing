import { Publisher, Subjects, TicketUpdatedEvent } from "@akruktickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
