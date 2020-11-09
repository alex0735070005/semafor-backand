import { GET_WARES_APPLICABILITIES } from "config/procedures";
import { ResponseMssqlType } from "lib/interfaces";
import MssqlConnector from "lib/MssqlConnector";

export default (async function (
  wareId: number,
  limit: number
): Promise<ResponseMssqlType> {
  const { pool, sql } = await MssqlConnector.connect();

  return await pool
    .request()
    .input("WareId", sql.Int, wareId)
    .input("Limit", sql.Int, limit)
    .execute(GET_WARES_APPLICABILITIES);
});
