import offersLoader from "../loaders/offersLoader";

const schema = {
  WareId: expect.any(Number),
  WareKagId: expect.any(Number),
  WareQnt: expect.any(Number),
  DeliveryTerm: expect.any(Number),
  SupplierId: expect.any(Number),
  RetailPrice: expect.any(Number),
  DateUpd: expect.any(Date),
};

test("OFFERS LOADER TEST", async () => {
  const DATE = "2020-01-01 00:00:00";
  const WARE_KAG_ID = 0;
  const KAG_ID = null;
  const LIMIT = 100;

  try {
    const result = await offersLoader(DATE, LIMIT, WARE_KAG_ID, KAG_ID);

    result.recordset.forEach((e) => {
      expect(e).toEqual(expect.objectContaining(schema));
    });
  } catch (e) {
    expect(e).toMatch("error");
  }
});
