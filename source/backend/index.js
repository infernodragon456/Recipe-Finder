import app from "./app.js";
import { config } from "dotenv";
import { connectToDatabase } from "./connection.js";
import router from "./router.js";

config();

connectToDatabase()
  .then(() => {
    app.listen(5000, () =>
      console.log("Server opened and connected to database!")
    );
  })
  .catch((err) => console.log(err));

app.use("/", router);
