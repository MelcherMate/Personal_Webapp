import dotenv from "dotenv";
import path from "path";
import app from "./express";

// # DotEnv configuration
dotenv.config({ path: path.resolve(__dirname + "/.env") });

// # Server Start
const actualPort = process.env.PORT || 10000;
app.listen(actualPort, (err) => {
  if (err) {
    console.log(
      "**------------- APP ERROR:",
      err,
      "(thus stopping the APP)-------------**"
    );
    process.exit();
  }

  console.log(
    "**------------- APP STARTED ON PORT:",
    actualPort,
    "----------**"
  );
});
