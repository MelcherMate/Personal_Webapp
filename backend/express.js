import compress from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import path from "path";

// # DotEnv configuration
dotenv.config({
  path: path.resolve(
    __dirname,
    process.env.NODE_ENV === "development" ? ".env.dev" : ".env.prod"
  ),
});

// # Server Creation
const app = express();

// # Middleware
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compress());

if (process.env.NODE_ENV === "development") {
  app.use(helmet());
} else {
  app.use(
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: [
          "'self'",
          "https://matemelcher.com/",
          "https://mate-melcher.onrender.com/",
        ],
        connectSrc: [
          "'self'",
          "https://matemelcher.com/",
          "https://mate-melcher.onrender.com/",
        ],
        imgSrc: ["'self'", "data:"],
      },
    })
  );
}

// # CORS middleware
const corsOptions = {
  origin: process.env.PUBLIC_URL,
  optionsSuccessStatus: 200,
  credentials: true,
};
app.use(cors(corsOptions));

// # Routes
app.get("/api", (req, res) => {
  res.send("API is running");
});

// # Serving static files
if (process.env.NODE_ENV !== "development") {
  const staticPath = path.join(__dirname, "../client/dist");
  app.use(express.static(staticPath));

  // Catch-all route for React frontend
  app.get("/*", (req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });
}

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
