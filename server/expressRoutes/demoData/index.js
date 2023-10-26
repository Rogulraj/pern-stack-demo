const express = require("express");

const demoDataRouter = express.Router();

demoDataRouter.route("/demo").get(async (req, res) => {
  res.json([
    { name: "raj", amount: 2000 },
    { name: "raj", amount: 2000 },
    { name: "raj", amount: 2000 },
    { name: "raj", amount: 2000 },
  ]);
});

module.exports.demoDataRouter = demoDataRouter;
