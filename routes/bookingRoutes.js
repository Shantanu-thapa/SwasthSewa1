const express = require("express");
const protect = require("../middleware/jwtmiddleware");

const {
  createBooking,
  getAllBookings,
  getBookingById,
  updateBooking,
  deleteBooking,
} = require("../controller/bookingController");

const router = express.Router();

// CREATE BOOKING
router.post("/BOOK",protect , createBooking);

// GET ALL BOOKINGS
router.get("/BOOK", protect ,  getAllBookings);

// GET SINGLE BOOKING
router.get("/:id", protect,  getBookingById);

// UPDATE BOOKING
router.put("/Book/:id", protect ,  updateBooking);

// DELETE BOOKING
router.delete("/Book/:id", protect ,  deleteBooking);

module.exports = router;
