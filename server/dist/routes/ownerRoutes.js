import { Router } from 'express';
import { createOwnerRestaurant, getOwnerBookings, getOwnerRestaurant, updateOwnerBookingStatus, updateOwnerRestaurant } from '../controllers/ownerController.js';
import upload from '../config/multer.js';
import { ownerOnly, protect } from '../middlewares/auth.js';
const ownerRouter = Router();
ownerRouter.use(protect);
ownerRouter.use(ownerOnly);
ownerRouter.get('/restaurant', getOwnerRestaurant);
ownerRouter.post('/restaurant', upload.single('image'), createOwnerRestaurant);
ownerRouter.put('/restaurant', upload.single('image'), updateOwnerRestaurant);
// Supporting both singular/plural and with/without /status suffix endpoints
ownerRouter.get('/booking', getOwnerBookings);
ownerRouter.get('/bookings', getOwnerBookings);
ownerRouter.put('/booking/:id', updateOwnerBookingStatus);
ownerRouter.put('/bookings/:id', updateOwnerBookingStatus);
ownerRouter.put('/booking/:id/status', updateOwnerBookingStatus);
ownerRouter.put('/bookings/:id/status', updateOwnerBookingStatus);
export default ownerRouter;
