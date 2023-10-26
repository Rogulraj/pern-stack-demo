const express = require("express");
const cors = require("cors");
const pool = require("./db/dbConnection");

const port = 5000;

const app = express();

app.use(express.json());

app.use(cors());

const { demoDataRouter } = require("./expressRoutes/demoData/index");
const userRoute = require("./expressRoutes/userRoute");

app.get("/", async (req, res) => {
  res.send("There We Go!");
});

app.use("/user", demoDataRouter);

app.use("/user", userRoute);

app.listen(port, () => {
  console.log("Server Fired up on http://localhost:5000");
});
