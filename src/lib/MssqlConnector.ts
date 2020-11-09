import * as sql from "mssql";

import * as dotenv from "dotenv";

dotenv.config();

import { MSSQL_CONFIG } from "config/mssqlConfig";
import { ObjectType } from "lib/types";

type ResponseMssqlType = {
  readonly recordset: ReadonlyArray<unknown>;
  readonly recordsets: ReadonlyArray<unknown>;
};

type PullType = {
  request(): PullType;
  input(param: string, type: string, value: unknown): PullType;
  execute(procedure: string): ResponseMssqlType;
};

type connetionType = {
  readonly pool: PullType;
  readonly sql: ObjectType<string>;
};

export default class MssqlConnector {
  static instance: PullType;

  static async connect(): Promise<connetionType> {
    if (!this.instance) {
      try {
        this.instance = await sql.connect(MSSQL_CONFIG);
        console.log("\x1b[35m%s\x1b[0m", "Successful connected to MSSQL");
        return { pool: this.instance, sql };
      } catch (er) {
        console.log("IS NOT CONNECTIONS TO MSSQL", er);
        //process.exit();
      }
    }

    return { pool: this.instance, sql };
  }
}
