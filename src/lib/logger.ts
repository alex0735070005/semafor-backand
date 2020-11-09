import * as logger from "packages/logger";
import { getScriptParams, getDataCollection } from "lib/helpers";

import * as fs from "fs";
import { compose } from "lodash/fp";

import { LOGS_DIR } from "config/common";

const { action } = compose(getDataCollection, getScriptParams)(process.argv);
const IS_WIRTE_LOGS = process.env.WRITE_LOGGER_LOGS === "true";

/**
 * Handler for clear logs and
 * created log folder if not exists
 */
(function () {
  if (IS_WIRTE_LOGS) {
    const removeLogFile = () => {
      fs.unlink(`${LOGS_DIR}/${action}`, (err) => {
        if (err) throw err;
      });
    };
    if (!fs.existsSync(LOGS_DIR)) {
      fs.mkdirSync(LOGS_DIR);
    }
    if (fs.existsSync(`${LOGS_DIR}/${action}`)) {
      removeLogFile();
    }
  }
})();

/**
 * Handler for writing collection logs to files
 *
 * @param logText
 * @returns {string}
 */
export const writeLog = (logText: string): string => {
  if (logText && IS_WIRTE_LOGS) {
    fs.appendFile(`${LOGS_DIR}/${action}`, `${logText}\n`, (err) => {
      if (err) throw err;
    });
  }
  return logText;
};

/**
 * Start log time
 *
 * @param {string} text
 * @returns {number}
 */
export const startLog = (text?: string): number => {
  const { label, startDate } = logger.startLog(text);
  writeLog(label);
  return startDate;
};

/**
 * Info log
 *
 * @param {string} logText
 * @param {string} logText
 * @returns {string}
 */
export const log = compose(writeLog, logger.log);

/**
 * End log time
 *
 * @param {string} logText
 * @param {number} startDate
 * @returns {string}
 */
export const endLog = compose(writeLog, logger.endLog);
