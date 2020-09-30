const express = require("express");
const connection = require("../mysql");

router = express.Router();

router.get("/", (request, response) => {
  connection.query("Select * from seller", (error, result) => {
    if (error) {
      console.log(error);
      response.send("Error occurred");
    } else {
      response.send(result);
    }
  });
});

router.get("/id", (request, response) => {
  connection.query(
    `Select * from seller where seller_id = ${request.body.id}`,
    (error, result) => {
      if (error) {
        console.log(error);
        response.send("Error occurred");
      } else {
        response.send(result);
      }
    }
  );
});

router.get("/name", (request, response) => {
  connection.query(
    `Select * from seller where seller_name = '${request.body.name}'`,
    (error, result) => {
      if (error) {
        console.log(error);
        response.send("Error occurred");
      } else {
        response.send(result);
      }
    }
  );
});

router.post("/", (request, response) => {
  connection.query(
    `insert into seller (seller_name, seller_wallet) 
    values ('${request.body.name}',${request.body.wallet})`,
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

router.put("/", (request, response) => {
  connection.query(
    `update seller set seller_name = '${request.body.name}', 
    seller_wallet = ${request.body.wallet} where seller_id = ${request.body.id}`,
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

router.delete("/id", (request, response) => {
  connection.query(
    `delete from seller where seller_id = ${request.body.id}`,
    (error, result) => {
      if (error) {
        console.log(error);
        response.send("Error occurred");
      } else {
        response.send("Success!");
      }
    }
  );
});

module.exports = router;
