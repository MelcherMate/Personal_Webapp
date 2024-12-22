import dotenv from "dotenv";
import path from "path";
import app from "./express";

// # DotEnv configuration
dotenv.config({ path: path.resolve(__dirname + "/.env") });

console.log("*********************************************************");
console.log(
  "**------------- PROCESS ENV:",
  process.env.NODE_ENV,
  "-------------**"
);

// # Server Start
const actualPort = process.env.PORT || 10000;

app.listen(actualPort, (err) => {
  if (err) {
    console.error(
      "**------------- SERVER ERROR:",
      err,
      "(thus stopping the server)-------------**"
    );
    process.exit(1); // Exit with error
  }

  console.log(
    "**------------- SERVER STARTED ON PORT:",
    actualPort,
    "----------**"
  );
  console.log("*********************************************************");
});
