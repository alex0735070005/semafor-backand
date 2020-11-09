import * as mongoose from "mongoose";

const modelSchema = new mongoose.Schema(
  {
    id: Number,
    name: String,
    value: String,
    availableValues: Object,
    importance: Number,
    rowVersion: Buffer,
  },
  {
    _id: false,
    autoCreate: false,
  }
);

export default mongoose.model("WareProperty", modelSchema);
