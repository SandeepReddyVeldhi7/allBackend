import express from "express"
import dotenv from "dotenv";
import cors from "cors"
import databaseConnection from "./config/dataBase.js";
import userRoutes from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";

dotenv.config();
 
console.log("FRONTEND_URL:", process.env.FRONTEND_URL); // Debugging line


const app = express();

const frontendUrl = process.env.FRONTEND_URL;
if (!frontendUrl) {
  throw new Error("FRONTEND_URL environment variable is not defined");
}

const corsOptions = {
  origin: frontendUrl.trim(),
  credentials: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: "Content-Type,Authorization",
};
app.use(cors(corsOptions));

// Handle preflight requests
app.options('*', cors(corsOptions));

// Connect to the database
databaseConnection();

// Configure body-parser to handle larger payloads
app.use(express.json())
app.use(cookieParser());




// Routes
app.use("/api", userRoutes) 



const PORT = 8080 || process.env.PORT ;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});