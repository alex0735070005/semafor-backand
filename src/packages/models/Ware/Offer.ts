import * as mongoose from "mongoose";

const modelSchema = new mongoose.Schema(
  {
    wareId: Number,
    wareKagId: Number,
    supplierId: Number,
    wareQntTotal: Number,
    clientPrice: Number,
    recommendedPrice: Number,
    deliveryTerm: Number,
    deliveryDate: Date,
    offerTypeId: Number,
    offerLastDateUpdated: Date,
    offerId: { type: mongoose.ObjectId, auto: true },
  },
  {
    _id: false,
    autoCreate: false,
  }
);

export default mongoose.model("WareOffer", modelSchema);
