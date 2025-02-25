import { Publisher, OrderCreatedEvent, Subjects } from "@akruktickets/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
