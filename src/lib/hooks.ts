/**
 * This module contains async hooks
 */

import { compose } from "lodash/fp";
import { getDataCollection, getScriptParams } from "lib/helpers";

/**
 * Import collection with action param
 * @param {Object} params
 * @param {string} params.collectionPath
 * @param {string} params.action
 * @returns {Promise}
 */
export const collectionImport = async (params: {
  readonly collectionPath: string;
  readonly action: string;
}): Promise<unknown> => {
  const collection = await import(params.collectionPath);
  return collection.default ? collection.default(params.action) : collection;
};

/**
 * Compose methods for runing collection
 * by npm commands
 * @param {Array} argv - npm scripts array
 */
export const runCollection = compose(
  collectionImport,
  getDataCollection,
  getScriptParams
);
