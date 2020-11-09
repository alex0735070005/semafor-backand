/**
 * This file contains mongoose queries functionality
 */
import { Offer } from "packages/models/Offer";

export const insertOffers = async (
  offers: ReadonlyArray<unknown>
): Promise<unknown> => {
  return await Offer.insertMany(offers);
};

export const clearOffers = async (): Promise<unknown> => await Offer.remove({});
