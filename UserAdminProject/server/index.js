require("dotenv").config();
const express = require("express");
const app = express();
const cors=require('cors');
const authRoute = require("./router/auth");
const contactRoute = require("./router/contact");
const connectToDB = require("./db");
const errorMiddleware = require("./middlewares/error-middleware");
const services = require("./controller/service-controller");
const adminRoute=require("./router/admin-router")



const port = 5000;
const corsOptions={
  origin:"http://localhost:5173",
  method:"GET,POST,PUT,DELETE,PATCH,HEAD",
}
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", services);
app.use("/api/admin",adminRoute );

app.use(errorMiddleware);
connectToDB().then(() => {
  app.listen(port, () => {
    console.log(`server started at post ${port}`);
  });
});
