const express = require("express");
const pool = require("../../db/dbConnection");

const userRoute = express.Router();

//get all details
userRoute.route("/get/all").get(async (request, response) => {
  try {
    const getQuery = `
    SELECT * FROM "user";
  `;
    const allUserDetails = await pool.query(getQuery);
    response.json(allUserDetails.rows);
  } catch (err) {
    const { message } = err;
    console.error(err);
  }
});

//get specific details
userRoute.route("/get/:id").get(async (request, response) => {
  try {
    const { id } = request.params;
    const getQuery = `
    SELECT * FROM "user" WHERE id = ${id}
  `;
    const getResponse = await pool.query(getQuery);
    response.json(getResponse.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//insert the single data to the user table
userRoute.route("/post").post(async (request, response) => {
  try {
    const { username, password } = request.body;
    const postQuery = `
      INSERT INTO "user" (username, password) VALUES ('${username}', '${password}') 
    `;
    const postResponse = await pool.query(postQuery);
    response.json(postResponse.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

//update single value to the user table
userRoute.route("/put/:id").put(async (request, response) => {
  try {
    const { id } = request.params;
    const { password } = request.body;
    const updateQuery = `
    UPDATE "user" SET password = '${password}' WHERE id = ${id} RETURNING * ;
  `;
    const updateResponse = await pool.query(updateQuery);
    response.json(updateResponse.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

//delete single value to the user table
userRoute.route("/delete/:id").delete(async (request, response) => {
  try {
    const { id } = request.params;
    const deleteQuery = `
    DELETE FROM "user" WHERE id = ${id};
  `;
    const deleteResponse = await pool.query(deleteQuery);
    response.json(deleteResponse.rows[0]);
  } catch (error) {
    const { message } = error;
    console.error(message);
  }
});

module.exports = userRoute;
