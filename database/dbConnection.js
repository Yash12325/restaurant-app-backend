import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "RESTAURANT",
    })
    .then(() => {
      console.log("Connected to db succfuly");
    })
    .catch((err) => {
      console.log(`err occured while connecting to db ${err}`);
    });
};
