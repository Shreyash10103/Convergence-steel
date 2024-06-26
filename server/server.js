import { app } from "./app.js";
import { config } from "dotenv"
import { connectDatabase } from "./config/database.js";
config({
  path: "./config/config.env",
});
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log("server is running on PORT", + process.env.PORT);

});