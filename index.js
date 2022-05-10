const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT||5000;
console.log(port);
dotenv.config();

//middleware
app.use(cors());
app.options("*", cors());
app.use(bodyParser.json());

//routers
const userRoute= require('./routes/user');
const authRoute= require('./routes/auth');
const productRoute= require('./routes/product');
const cartRoute= require('./routes/cart');
const orderRoute= require('./routes/order');
const stripeRoute= require('./routes/stripe');

app.use('/api/auth',authRoute);
app.use('/api/users',userRoute);
app.use('/api/products',productRoute);
app.use('/api/carts',cartRoute);
app.use('/api/orders',orderRoute);
app.use('/api/checkouts',stripeRoute);


//mongoose connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("Error Connect",err));

//port listen
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
