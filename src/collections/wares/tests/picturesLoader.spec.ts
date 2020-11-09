import picturesLoader from "../loaders/picturesLoader";

const schema = {
  WareId: expect.any(Number),
  WarePictureId: expect.any(Number),
  Format: expect.nullOrString(),
};

test("PICTURES LOADER TEST", async () => {
  const WARE_ID = 0;
  const LIMIT = 100;

  try {
    const result = await picturesLoader(WARE_ID, LIMIT);

    result.recordset.forEach((e) => {
      expect(e).toEqual(expect.objectContaining(schema));
    });
  } catch (e) {
    expect(e).toMatch("error");
  }
});
