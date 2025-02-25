import { Publisher, OrderCancelledEvent, Subjects } from "@akruktickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
