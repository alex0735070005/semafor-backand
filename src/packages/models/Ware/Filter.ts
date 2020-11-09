import * as mongoose from "mongoose";

const modelSchema = new mongoose.Schema(
  {
    brand: String,
    number: String,
  },
  {
    _id: false,
    autoCreate: false,
  }
);

export default mongoose.model("WareFilter", modelSchema);
