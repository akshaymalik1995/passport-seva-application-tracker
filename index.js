
import express from "express";
import bodyParser from "body-parser";
import passportStatus from "./controllers/passportStatus.js";

const app = express();

app.use(bodyParser.json());

app.post("/api/passport-status", passportStatus)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));