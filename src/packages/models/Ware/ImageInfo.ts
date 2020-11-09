import * as mongoose from "mongoose";

const modelSchema = new mongoose.Schema(
  {
    imageUrl: String,
    image: String,
    height: Number,
    width: Number,
    mimeType: String,
  },
  {
    _id: false,
    autoCreate: false,
  }
);

export default mongoose.model("WareImageInfo", modelSchema);
