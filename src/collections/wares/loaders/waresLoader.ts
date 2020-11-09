import { GET_WARES } from "config/procedures";
import { ResponseMssqlType } from "lib/interfaces";
import MssqlConnector from "lib/MssqlConnector";

export default (async function (
  language: string,
  limit: number,
  rowVersion: Buffer
): Promise<ResponseMssqlType> {
  const { pool, sql } = await MssqlConnector.connect();

  return await pool
    .request()
    .input("RowVersion", sql.VarBinary, rowVersion)
    .input("Culture", sql.VarChar, language)
    .input("Limit", sql.Int, limit)
    .execute(GET_WARES);
});
