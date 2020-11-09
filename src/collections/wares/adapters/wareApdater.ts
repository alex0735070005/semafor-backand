/* eslint-disable @typescript-eslint/no-explicit-any */
import { objectKeysToCamelCase } from "lib/helpers";
import * as mapKeys from "lodash/mapKeys";
import generate from "lib/urlGenerator";
import { ObjectType } from "lib/types";

type paramsInterface = {
  WareId: number;
  WareNum: string;
  WareName: string;
  ProducerId: number;
  ProducerName: string;
  ProducerShName: string;
  UnitName: string;
  UnitShName: string;
  IsOEM: boolean;
  WareSaleQnt: number;
  UseMultipleQnt: number;
  PackQnt: number;
  WareLen: number;
  WareWidth: number;
  WareHeight: number;
  WareWeight: number;
  PackLen: number;
  PackWidth: number;
  PackHeight: number;
  PackWeight: number;
  Warranty: number;
  Comment: string;
  GroupId: number;
  BarCode: string;
  RowVer: Buffer;
  BrandName?: string;
};

export default function (ware: paramsInterface): ObjectType<any> {
  const brand = generate(ware.BrandName, false);
  const number = generate(ware.WareNum, true);

  const result = mapKeys(objectKeysToCamelCase(ware), (...params: any[]) => {
    const key = params[1];
    switch (key) {
      case "wareId":
        return "id";
      case "rowVer":
        return "rowVersion";
      default:
        return key;
    }
  });

  return {
    ...result,
    properties: [],
    offers: [],
    images: [],
    groupName: "test group name",
    groupUrlName: "test group url name",
    urlName: {
      brand,
      number,
    },
    brandImageUrl: `Image/Brand/${brand}`,
  };
}
