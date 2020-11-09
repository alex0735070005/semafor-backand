/**
 * This file contains mongoose queries functionality
 */
import * as head from "lodash/head";
import * as isEmpty from "lodash/isEmpty";

import { Ware } from "packages/models/Ware";

export const getWareRowVersion = async (): Promise<Buffer> => {
  const lastWare = await Ware.find({}).sort({ _id: -1 }).limit(1);

  return !isEmpty(lastWare)
    ? head(lastWare).rowVersion
    : Buffer.from("0", "hex");
};

export const insertWares = async (
  wares: ReadonlyArray<unknown>
): Promise<unknown> => {
  return await Ware.insertMany(wares);
};
