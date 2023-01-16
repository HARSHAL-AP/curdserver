const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
const userRoute = require("./routes/useroute");
const {authanticate}=require("./midlewere/authnticate.midleware")
const bookroute=require("./routes/book")

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use("/", userRoute);

app.use(authanticate)
app.use("/book",bookroute)


app.listen(8080, async () => {
  try {
    await connection;
    console.log("Connected To Db");
  } catch (err) {
    console.log(err);
  }
});
