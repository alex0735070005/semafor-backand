import * as last from "lodash/last";
import * as isEmpty from "lodash/isEmpty";
import { SYNC_OFFERS_LIMIT, LOAD_OFFERS_DATE } from "config/common";
import { endLog, startLog, log } from "lib/logger";
import { clearOffers } from "../queries";

import { offersLoader } from "../loaders";
import { offersUpdater } from "../updaters";

export default (async function () {
  let wareKagId = 0;
  let countOffers = 0;

  log("info", "CLEAR ALL OFFERS");

  await clearOffers();

  const endLoadTime = startLog("START LOAD OFFERS");

  do {
    const endLoaderTime = startLog();

    const result = await offersLoader(
      LOAD_OFFERS_DATE,
      SYNC_OFFERS_LIMIT,
      wareKagId,
      null
    );

    endLog("mssql response:", endLoaderTime);

    countOffers = !isEmpty(result.recordset)
      ? countOffers + result.recordset.length
      : countOffers;

    wareKagId = !isEmpty(result.recordset)
      ? last(result.recordset).WareKagId
      : null;

    if (wareKagId) {
      const endMongoTime = startLog();
      await offersUpdater(result.recordset);
      endLog("mongo response:", endMongoTime);
      log("info", `inserted offers ${countOffers}`);
    } else {
      endLog("FINISH LOAD OFFERS", endLoadTime);
      log("info", `inserted offers ${countOffers}`);
      process.exit();
    }
  } while (wareKagId);
})();
