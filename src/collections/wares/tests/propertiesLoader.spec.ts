import propertiesLoader from "../loaders/propertiesLoader";

const schema = {
  WareId: expect.any(Number),
  WarePropId: expect.any(Number),
  RowVer: expect.any(Buffer),
  Importance: expect.nullOrString(),
  WarePropTypeName: expect.any(String),
  PropValue: expect.any(String),
};

test("PROPERTIES LOADER TEST", async () => {
  const ROW_VERSION = Buffer.from("0", "hex");
  const LANGUAGE = "Ru-ru";
  const LIMIT = 100;

  try {
    const result = await propertiesLoader(LANGUAGE, LIMIT, ROW_VERSION);

    result.recordset.forEach((e) => {
      expect(e).toEqual(expect.objectContaining(schema));
    });
  } catch (e) {
    expect(e).toMatch("error");
  }
});
