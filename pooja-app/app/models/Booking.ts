import mongoose from "mongoose";


const BookingSchema = new mongoose.Schema(
  {
    poojaId: String,
    name: String,
    phone: String,
    date: String,
  },
  { timestamps: true }
);

export default mongoose.models.Booking ||
  mongoose.model("Booking", BookingSchema);