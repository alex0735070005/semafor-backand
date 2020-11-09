import replacementsLoader from "../loaders/replacementsLoader";

const schema = {
  WareId: expect.any(Number),
  WareTwoId: expect.any(Number),
  RowVer: expect.any(Buffer),
};

test("REPLACEMENTS LOADER TEST", async () => {
  const ROW_VERSION = Buffer.from("0", "hex");
  const WARE_ID = 0;
  const LIMIT = 100;

  try {
    const result = await replacementsLoader(WARE_ID, LIMIT, ROW_VERSION);

    result.recordset.forEach((e) => {
      expect(e).toEqual(expect.objectContaining(schema));
    });
  } catch (e) {
    expect(e).toMatch("error");
  }
});
