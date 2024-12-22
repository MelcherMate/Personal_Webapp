import compress from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import path from "path";

// # DotEnv configuration
if (process.env.NODE_ENV === "development") {
  dotenv.config({ path: path.resolve(__dirname + "/.env.dev") });
} else {
  dotenv.config({ path: path.resolve(__dirname + "/.env.prod") });
}

// # Server Creation
const app = express();

// # Middleware
app.use(cookieParser());
// parse body params and attach them to req.body
app.use(express.urlencoded({ extended: true }));
// To parse the incoming requests with JSON payloads
app.use(express.json());
app.use(compress());
// secure apps by setting various HTTP headers

if (process.env.NODE_ENV === "development") {
  app.use(helmet());
} else {
  app.use(
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: [
          "'self'",
          "'unsafe-inline'",
          "https://matemelcher.com/",
          "https://www.matemelcher.com/",
          "https://mate-melcher.onrender.com/",
        ],
        connectSrc: [
          "'self'",
          "'unsafe-inline'",
          "https://matemelcher.com/",
          "https://www.matemelcher.com/",
          "https://mate-melcher.onrender.com/",
        ],
        imgSrc: ["*", "data:"],
      },
    })
  );
}

// # CORS middleware
var corsFrontendSources = process.env.PUBLIC_URL;
var corsOptions = {
  origin: corsFrontendSources,
  optionsSuccessStatus: 200,
  credentials: true,
};
app.use(cors(corsOptions));

// # Routes
app.get("/", (req, res) => {
  res.send("API is running");
});

// # Serving
if (process.env.NODE_ENV === "development") {
} else {
  // serving the frontend dev, and prod folders as static resources
  app.use("/", express.static(path.join(__dirname, "../client/src/dist/")));
  /* final catch-all route to index.html defined last; trailing / is important (!!!) */
  app.get("/*", (req, res, next) => {
    res.sendFile(path.join(__dirname, "../client/src/dist/"));
  });
  app.use("*", function (req, res, next) {
    // serve files upon refresh window
  });

  app.use("*", function (req, res, next) {});
}

app.use("*", function (req, res, next) {});
export default app;
