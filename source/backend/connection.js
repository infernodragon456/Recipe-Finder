import { connect, disconnect } from "mongoose";

async function connectToDatabase() {
  try {
    await connect("mongodb://localhost:27017/");
  } catch (error) {
    console.log(error);
  }
}

async function disconnectFromDatabase() {
  try {
    await disconnect();
  } catch (error) {
    console.log(error);
  }
}

export { connectToDatabase, disconnectFromDatabase };
