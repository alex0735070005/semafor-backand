import { offerAdapter } from "../adapters";
import { insertOffers } from "../queries";

export default (async function (
  offers: ReadonlyArray<unknown>
): Promise<unknown> {
  return await insertOffers(offers.map(offerAdapter));
});
