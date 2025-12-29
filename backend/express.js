import compress from "compression";
import cookieParser from "cookie-parser";
import cookieSession from "cookie-session";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";

// 👉 Vercelen / Renderen AUTOMATIKUS env
dotenv.config();

const app = express();

/* --------------------------------------------------
   Cookie session
-------------------------------------------------- */
app.use(
  cookieSession({
    name: "session",
    keys: [process.env.SESSION_SECRET || "matemelcher"],
    maxAge: 24 * 60 * 60 * 1000,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  })
);

/* --------------------------------------------------
   Middleware
-------------------------------------------------- */
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compress());

/* --------------------------------------------------
   Helmet (Vercel-safe CSP)
-------------------------------------------------- */
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'", "https://www.matemelcher.com"],
        connectSrc: [
          "'self'",
          "https://mate-melcher.onrender.com",
          "https://www.matemelcher.com",
        ],
        imgSrc: ["'self'", "data:", "https:"],
      },
    },
  })
);

/* --------------------------------------------------
   CORS (frontend URL from env)
-------------------------------------------------- */
const corsOptions = {
  origin: process.env.PUBLIC_URL,
  credentials: true,
};

app.use(cors(corsOptions));

/* --------------------------------------------------
   Routes
-------------------------------------------------- */
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

/* --------------------------------------------------
   ❌ NO STATIC SERVING
   ❌ NO app.listen
-------------------------------------------------- */

export default app;
