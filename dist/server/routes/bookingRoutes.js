import { Router } from "express";
import { protect } from "../middlewares/auth.js";
import { cancleBooking, createBooking, getMyBooking } from "../controllers/bookingController.js";
const bookingRouter = Router();
bookingRouter.post("/", protect, createBooking);
bookingRouter.get("/my", protect, getMyBooking);
bookingRouter.put("/:id/cancle", protect, cancleBooking);
export default bookingRouter;
