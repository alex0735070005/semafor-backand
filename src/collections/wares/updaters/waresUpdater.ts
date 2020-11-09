import { wareAdapter } from "../adapters";
import { insertWares } from "../queries";

export default (async function (
  wares: ReadonlyArray<unknown>
): Promise<unknown> {
  return await insertWares(wares.map(wareAdapter));
});
