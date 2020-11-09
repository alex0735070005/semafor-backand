import * as last from "lodash/last";
import * as isEmpty from "lodash/isEmpty";
import { getWareRowVersion } from "../queries";
import { log } from "lib/logger";

import { waresLoader } from "../loaders";
import { waresUpdater } from "../updaters";

import { LANGUAGE, SYNC_WARES_LIMIT } from "config/common";

export default (async function () {
  let wareRowVersion = await getWareRowVersion();
  let countWares = 0;

  while (wareRowVersion) {
    const result = await waresLoader(
      LANGUAGE,
      SYNC_WARES_LIMIT,
      wareRowVersion
    );

    countWares = !isEmpty(result.recordset)
      ? countWares + result.recordset.length
      : countWares;

    log("info", `SYNC WARES ${countWares}`);

    wareRowVersion = !isEmpty(result.recordset)
      ? last(result.recordset).RowVer
      : null;

    if (wareRowVersion) {
      await waresUpdater(result.recordset);
    } else {
      log("info", `FINISH WARES SYNC: ${countWares}`);
      process.exit();
    }
  }
})();
