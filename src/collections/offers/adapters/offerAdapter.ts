/* eslint-disable @typescript-eslint/no-explicit-any */
import { objectKeysToCamelCase, getDateString } from "lib/helpers";
import { ObjectType } from "lib/types";

type paramsInterface = {
  WareId: number;
  WareKagId: number;
  WareQnt: number;
  DeliveryTerm: number;
  SupplierId: number;
  RetailPrice: number;
  DateUpd: Date;
};

export default function (ware: paramsInterface): ObjectType<any> {
  return {
    ...objectKeysToCamelCase(ware),
    dateUpd: getDateString(ware.DateUpd),
  };
}
