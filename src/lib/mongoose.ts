/* eslint-disable no-console */
import * as mongoose from "mongoose";

export default async (): Promise<unknown> => {
  const mongoUrl = `mongodb://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`;

  return mongoose
    .connect(mongoUrl, {
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    .then(() => {
      console.log("Successful connected to MongoDB");
      return "hello";
    })
    .catch((err) => {
      console.error("Error on connection to MongoDB", err);
      process.exit(1);
    });
};
