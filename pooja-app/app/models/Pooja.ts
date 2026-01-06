import mongoose from "mongoose";

const PoojaSchema = new mongoose.Schema(
  {
    title: String,
    shortDesc: String,
    price: Number,
  },
  { timestamps: true }
);

export default mongoose.models.Pooja ||
  mongoose.model("Pooja", PoojaSchema);
