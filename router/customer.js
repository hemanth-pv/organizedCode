const express = require("express");
const connection = require("../mysql");

router = express.Router();
// define the first get API
router.get("/", (request, response) => {
  connection.query("select * from customer", (error, result) => {
    if (error) {
      console.log(error);
      response.send("Some error occurred");
    } else {
      response.send(result);
    }
  });
});

// definer get customer by id API
router.get("/id", (request, response) => {
  // Validate the request parameters
  if (request.body.id == null) {
    response.send("[ERROR] ID is blank");
  } else if (!Number.isInteger(request.body.id)) {
    response.send("[ERROR] Value not allowed");
  } else {
    connection.query(
      `select * from customer where customer_id = ${request.body.id}`,
      (error, result) => {
        if (error) {
          console.log(error);
          response.send("Some error occurred");
        } else {
          response.send(result);
        }
      }
    );
  }
});

router.get("/name", (request, response) => {
  connection.query(
    `select * from customer where customer_name = '${request.body.name}'`,
    (error, result) => {
      if (error) {
        console.log(error);
        response.send("Some error occurred");
      } else {
        response.send(result);
      }
    }
  );
});

// define POST API to insert data into customer table
router.post("/", (request, response) => {
  connection.query(
    `insert into customer (customer_type, customer_name, customer_email, customer_wallet, customer_tolerance) 
    values (${request.body.type},'${request.body.name}','${request.body.email}',${request.body.wallet}, ${request.body.tolerance} )`,
    (error, result) => {
      if (error) {
        console.log(error);
        response.send("Some error occurred");
      } else {
        response.send("Saved Successfully");
      }
    }
  );
});

module.exports = router;
