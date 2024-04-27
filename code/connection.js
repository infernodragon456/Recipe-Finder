import { connect, disconnect } from "mongoose";

async function connectToDatabase() {
  try {
    await connect("mongodb://127.0.0.1:27017/recipes");
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
