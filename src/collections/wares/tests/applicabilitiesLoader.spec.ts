import applicabilitiesLoader from "../loaders/applicabilitiesLoader";

const schema = {
  WareId: expect.any(Number),
  ModifId: expect.any(Number),
};

test("APPLICABILIES LOADER TEST", async () => {
  const WARE_ID = 0;
  const LIMIT = 100;

  try {
    const result = await applicabilitiesLoader(WARE_ID, LIMIT);

    result.recordset.forEach((e) => {
      expect(e).toEqual(expect.objectContaining(schema));
    });
  } catch (e) {
    expect(e).toMatch("error");
  }
});
