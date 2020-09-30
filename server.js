const express = require("express");
const bodyParser = require("body-parser");

const customer_router = require("./router/customer");
const seller_router = require("./router/seller");

app = express();

app.use(bodyParser.json());

app.use("/customer", customer_router);
app.use("/seller", seller_router);

app.listen(3000);
