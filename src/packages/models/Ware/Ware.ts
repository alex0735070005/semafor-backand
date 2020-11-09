import * as mongoose from "mongoose";
import WareFileInfo from "./FileInfo";
import WareProperty from "./Property";
import WareOffer from "./Offer";
import WareImageInfo from "./ImageInfo";
import WareFilter from "./Filter";

const modelSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      unique: true,
      dropDups: true,
    },
    groupId: Number,
    clientOfferId: mongoose.Schema.Types.ObjectId,
    groupUrlName: String,
    groupName: String,
    name: String,
    hasDuplicateNums: Boolean,
    recommendedPrice: Number,
    clientPrice: Number,
    supplierId: Number,
    wareQntTotal: Number,
    waitQntOrder: Number,
    deliveryTerm: Number,
    onlyForReservation: Boolean,
    haveReserve: Boolean,
    description: String,
    additionalInfo: String,
    applicability: String,
    applicabilities: [
      {
        type: Number,
        ref: "Auto",
      },
    ],
    applicableForModifId: Boolean,
    brandName: String,
    wareNum: String,
    eanCode: String,
    hasOffers: Boolean,
    hasAnalogues: Boolean,
    measureUnit: String,
    saleMultiplier: Number,
    packQnt: Number,
    wareLen: Number,
    wareWidth: Number,
    wareHeight: Number,
    wareWeight: Number,
    packLen: Number,
    packWidth: Number,
    packHeight: Number,
    packWeight: Number,
    actionInfo: String,
    isOEM: Boolean,
    warranty: Number,
    hasImage: Boolean,
    brandImageUrl: String,
    mainImageUrl: {
      type: String,
      default: "Image/Ware/-1",
    },
    reviewRate: Number,
    offers: [WareOffer.schema],
    images: [WareImageInfo.schema],
    files: [WareFileInfo.schema],
    properties: [WareProperty.schema],
    urlName: WareFilter.schema,
    rowVersion: Buffer,
    replacements: [
      {
        type: Number,
        ref: "Ware",
      },
    ],
    /** Properties not used in response and on SemaforWeb side. */
    updatedAt: Date,
    createdAt: Date,
  },
  {
    strict: true,
    toJSON: { virtuals: true },
  }
);

modelSchema.virtual("group", {
  ref: "Group",
  localField: "groupId",
  foreignField: "id",
  justOne: true,
});

modelSchema.virtual("env");

modelSchema.index({ "urlName.brand": 1 });
modelSchema.index({ "urlName.number": 1 });
modelSchema.index({
  "urlName.number": 1,
  "urlName.brand": 1,
});

export default mongoose.model("Ware", modelSchema);
