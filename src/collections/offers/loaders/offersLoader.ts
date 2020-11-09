import { GET_OFFERS } from "config/procedures";
import { ResponseMssqlType } from "lib/interfaces";
import MssqlConnector from "lib/MssqlConnector";

export default (async function (
  date: string,
  limit: number,
  wareKagId: number,
  kagId: number
): Promise<ResponseMssqlType> {
  const { pool, sql } = await MssqlConnector.connect();

  return await pool
    .request()
    .input("Date", sql.VarChar, date)
    .input("WareKagId", sql.Int, wareKagId)
    .input("Limit", sql.Int, limit)
    .input("KagId", sql.Int, kagId)
    .execute(GET_OFFERS);
});
