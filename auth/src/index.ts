import mongoose from "mongoose";
import { app } from "./app";

const start = async () => {
  console.log("starting up");
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be defined");
  }
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI must be defined");
    }
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(3000, () => {
      console.log("listening on port 3000");
    });
    console.log("connected to mongodb");
  } catch (err) {
    console.log(err);
  }
};

start();
