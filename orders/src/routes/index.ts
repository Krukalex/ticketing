import { requireAuth } from "@akruktickets/common";
import { Request, Response, Router } from "express";
import { Order } from "../models/orders";

const router = Router();

router.get("/api/orders", requireAuth, async (req: Request, res: Response) => {
  const orders = await Order.find({ userId: req.currentUser!.id }).populate(
    "ticket"
  );

  res.send(orders);
});

export { router as indexOrderRouter };
