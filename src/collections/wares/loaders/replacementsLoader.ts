import { GET_WARES_REPLACEMENTS } from "config/procedures";
import { ResponseMssqlType } from "lib/interfaces";
import MssqlConnector from "lib/MssqlConnector";

export default (async function (
  wareId: number,
  limit: number,
  rowVersion: Buffer
): Promise<ResponseMssqlType> {
  const { pool, sql } = await MssqlConnector.connect();

  return await pool
    .request()
    .input("WareId", sql.Int, wareId)
    .input("RowVersion", sql.VarBinary, rowVersion)
    .input("Limit", sql.Int, limit)
    .execute(GET_WARES_REPLACEMENTS);
});
