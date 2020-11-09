import waresLoader from "../loaders/waresLoader";

const schema = {
  WareId: expect.any(Number),
  WareNum: expect.any(String),
  WareName: expect.any(String),
  ProducerId: expect.any(Number),
  ProducerName: expect.any(String),
  ProducerShName: expect.any(String),
  UnitName: expect.any(String),
  UnitShName: expect.any(String),
  IsOEM: expect.any(Boolean),
  WareSaleQnt: expect.nullOrNumber(),
  UseMultipleQnt: expect.any(Number),
  PackQnt: expect.any(Number),
  WareLen: expect.nullOrNumber(),
  WareWidth: expect.nullOrNumber(),
  WareHeight: expect.nullOrNumber(),
  WareWeight: expect.nullOrNumber(),
  PackLen: expect.nullOrNumber(),
  PackWidth: expect.nullOrNumber(),
  PackHeight: expect.nullOrNumber(),
  PackWeight: expect.nullOrNumber(),
  Warranty: expect.any(Number),
  Comment: expect.nullOrString(),
  GroupId: expect.nullOrNumber(),
  BarCode: expect.nullOrString(),
  RowVer: expect.any(Buffer),
};

test("WARES LOADER TEST", async () => {
  const ROW_VERSION = Buffer.from("0", "hex");
  const LANGUAGE = "Ru-ru";
  const LIMIT = 100;

  try {
    const result = await waresLoader(LANGUAGE, LIMIT, ROW_VERSION);

    result.recordset.forEach((e) => {
      expect(e).toEqual(expect.objectContaining(schema));
    });
  } catch (e) {
    expect(e).toMatch("error");
  }
});
