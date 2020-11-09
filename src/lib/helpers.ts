/**
 * This module need to contains only pure helper functions
 */

import * as camelCase from "lodash/camelCase";
import { ObjectType } from "lib/types";
import { COLEECTION_PATH } from "config/paths";

/**
 * Get npm script params from process.argv
 * @param argv
 */
export function getScriptParams(
  argv: ReadonlyArray<string>
): ObjectType<string> {
  return argv.reduce(
    (ac: ObjectType<string>, arg: string, i: number): ObjectType<string> =>
      /^--/.test(arg)
        ? {
            ...ac,
            [arg.replace("--", "")]: argv[i + 1],
          }
        : ac,
    {}
  );
}

/**
 * Get collection action and collection name
 * from object params.action
 * @param argv
 */
export function getDataCollection(params: {
  readonly action: string;
}): ObjectType<string> {
  const data = params.action.split("-");

  return {
    collectionPath: `${COLEECTION_PATH}/${data[0]}`,
    action: data[1],
  };
}

/**
 * Convert object keys to camelCase
 * @param obj
 */
export function objectKeysToCamelCase(
  obj: ObjectType<unknown>
): ObjectType<unknown> {
  return Object.keys(obj).reduce(
    (ac, k) => ({
      ...ac,
      [camelCase(k)]: obj[k],
    }),
    {}
  );
}

export const getLastYearISODateString = (): string => {
  const dateNow = new Date();
  dateNow.setFullYear(dateNow.getFullYear() - 2);
  return dateNow.toISOString().split("T")[0];
};

export const getDateString = (date: Date): string =>
  date.toISOString().replace(/T/, " ").replace(/\..*/, "");
