import { COLLECTION_ACTION_PATH } from "config/paths";

export default async (action: string): Promise<unknown> =>
  await import(`./${COLLECTION_ACTION_PATH}/${action}`);
