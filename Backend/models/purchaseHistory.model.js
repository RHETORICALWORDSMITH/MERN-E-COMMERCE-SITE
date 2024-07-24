import mongoose from "mongoose";

const purchaseHistorySchema = mongoose.Schema({
  name: String,
  price: Number,
  location: String,
  email: String,
  date: { type: Date, required: true },
  category: String,
  image: String,
  title: String,
  id: String,
  noItem: Number,
});

const purchaseHistory = mongoose.model(
  "purchasehistories",
  purchaseHistorySchema
);

export default purchaseHistory;
