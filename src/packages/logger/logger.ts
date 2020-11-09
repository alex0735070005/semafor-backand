/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */

const IS_ENABLE = process.env.ENABLE_LOGGER === "true";

const TYPES = {
  info: {
    label: "INFO",
    color: "\x1b[36m",
  },
  warn: {
    label: "WARN",
    color: "\x1b[33m",
  },
  error: {
    label: "ERROR",
    color: "\x1b[31m",
  },
  log: {
    label: "LOG",
    color: "\x1b[37m",
  },
  start: {
    label: "TIME_START",
    color: "\x1b[37m",
  },
  end: {
    label: "TIME_END",
    color: "\x1b[37m",
  },
};

/**
 * Start log handler
 *
 * @param {string} startText
 * @returns {Object} - object with time and text
 * @returns {number} - time for endLog handler
 * @returns {string} - log string
 */
export const startLog = (
  startText: string
): { startDate: number; label: string } => {
  const startDate = Number(new Date());

  if (IS_ENABLE && startText) {
    const label = `[${TYPES.start.label}] ${startText}`;
    console.log(TYPES.start.color, label);

    return { startDate, label };
  }

  return { startDate, label: "" };
};

/**
 * End log handler requirements startLog
 *
 * @param {string} endText
 * @param {number} startDate
 */
export const endLog = function (endText: string, startDate: number): string {
  const endDate = Number(new Date());

  const LOG_STR = `[${TYPES.end.label}] ${endText} ${Number(
    ((endDate - startDate) / 1000).toFixed(1)
  )}`;

  if (IS_ENABLE) {
    console.log(TYPES.end.color, LOG_STR);
  }

  return LOG_STR;
};

/**
 * Log handler
 *
 * @param {string} type
 * @param {string} logText
 */
export const log = (type: string, logText: string): string => {
  const LOG_STR = `[${TYPES[type].label}] ${logText}`;

  if (IS_ENABLE) {
    console.log(TYPES[type].color, LOG_STR);
  }
  return LOG_STR;
};
