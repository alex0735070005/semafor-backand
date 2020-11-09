import * as mongoose from "mongoose";

const modelSchema = new mongoose.Schema({
  wareId: Number,
  wareKagId: Number,
  supplierId: Number,
  wareQnt: Number,
  retailPrice: Number,
  deliveryTerm: Number,
  offerTypeId: Number,
  dateUpd: String,
});

export default mongoose.model("Offer", modelSchema);
