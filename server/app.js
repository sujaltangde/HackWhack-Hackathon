const express = require("express");
const cors = require("cors");
const app = express();
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });

app.use(express.json({ limit: "10mb" }));
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(fileUpload());

// Routes Import
const user = require("./routes/UserRoutes.js");

app.use("/api/", user);

app.get("/api/v1/test", (req, res) => {
  res.json("I am working");
});

module.exports = app;
