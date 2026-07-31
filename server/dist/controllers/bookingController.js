import { Restaurant } from "../models/Restaurant.js";
import { Booking } from "../models/Booking.js";
// create a new booking
// Post /api/booking
// @access Private
export const createBooking = async (req, res) => {
    try {
        const { restaurantId, date, time, guests, occasion, specialRequests } = req.body;
        if (!restaurantId || !date || !time || !guests) {
            res.status(400).json({ message: "Please provide all required reservation details" });
            return;
        }
        // Check if restaurant exists
        const restaurant = await Restaurant.findById(restaurantId);
        if (!restaurant) {
            res.status(404).json({ message: "Restaurant not found" });
            return;
        }
        // Verify Restaurant is approved
        if (restaurant.status !== "approved") {
            res.status(400).json({ message: "Reservation are not open for this restaurant yet" });
            return;
        }
        //Verify seat avilebility
        const requestedGuests = Number(guests);
        const exitingBookings = await Booking.find({
            restaurant: restaurantId,
            date: new Date(date),
            time,
            status: "confirmed",
        });
        const bookedSeats = exitingBookings.reduce((sum, b) => sum + b.guests, 0);
        const totalSeats = restaurant.totalSeats || 20;
        const avilableSeats = totalSeats - bookedSeats;
        if (requestedGuests > avilableSeats) {
            res.status(400).json({
                message: `Unable to reserve. Only ${avilableSeats} seats are available for this time slot.`,
            });
        }
        const booking = await Booking.create({
            user: req.user?._id,
            restaurant: restaurantId,
            date: new Date(date),
            time,
            guests: Number(guests),
            occasion,
            specialRequests,
            status: "confirmed",
        });
        // Populate restaurant info before returning
        const populateBooking = await booking.populate("restaurant", "name location image address");
        res.status(201).json(populateBooking);
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ message: error.message });
    }
};
// Get login user bookings
// Get /api/booking/my
// @access Private
export const getMyBooking = async (req, res) => {
    try {
        const bookings = await Booking.find({ user: req.user?._id }).populate("restaurant", "name location image address slug").sort({ date: -1, time: -1 });
        res.json(bookings);
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ message: error.message });
    }
};
// Cancle a bookings
// PUT /api/booking/cancle
// @access Private
export const cancleBooking = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (!booking) {
            res.status(404).json({ message: "Booking not found" });
            return;
        }
        // Verify user owns the booking
        if (booking.user.toString() !== req.user?._id.toString()) {
            res.status(401).json({ message: "Not authorized to cancle this booking" });
            return;
        }
        booking.status = "cancelled";
        await booking.save();
        const populateBooking = await booking.populate("restaurant", "name location Image address");
        res.json(populateBooking);
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ message: error.message });
    }
};
