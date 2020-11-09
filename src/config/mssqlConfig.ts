export const MSSQL_CONFIG = {
  user: process.env.MSSQL_USER,
  password: process.env.MSSQL_PASSWORD,
  server: process.env.MSSQL_SERVER_IP,
  database: process.env.MSSQL_DATABASE,
  connectionTimeout: 10000,
  requestTimeout: 120000,
  pool: {
    max: 1000,
    min: 0,
    idleTimeoutMillis: 3000,
  },
};
