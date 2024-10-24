import dotenv from "dotenv";
import path from "path";
import server from "./express";

// # DotEnv configuration
dotenv.config({ path: path.resolve(__dirname + "/.env") });

// # Server Start
const actualPort = process.env.PORT || 10000;
server.listen(actualPort, (err) => {
  if (err) {
    console.log(
      "**------------- SERVER ERROR:",
      err,
      "(thus stopping the server)-------------**"
    );
    process.exit();
  }

  console.log(
    "**------------- SERVER STARTED ON PORT:",
    actualPort,
    "----------**"
  );
});
