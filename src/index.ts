import { runCollection } from "lib/hooks";
import mongoose from "lib/mongoose";

// build env varables
import * as dotenv from "dotenv";
dotenv.config();

(async function () {
  await mongoose();
  await runCollection(process.argv);
})();
