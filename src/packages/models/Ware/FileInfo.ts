import * as mongoose from "mongoose";

const modelSchema = new mongoose.Schema(
  {
    id: Number,
    name: String,
    ext: String,
    mimeType: String,
    // type       : File, // @TODO Check this values. What kind of type file is.
    description: String,
    url: String,
  },
  {
    _id: false,
    autoCreate: false,
  }
);

export default mongoose.model("WareFileInfo", modelSchema);
