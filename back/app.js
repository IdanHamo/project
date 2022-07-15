const express = require("express");
const morgan = require("morgan");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const users = require("./routes/users");
const auth = require("./routes/auth");

mongoose
  .connect("mongodb://localhost/final-react")
  .then(() => console.log("connected to the server"))
  .catch(() => console.log("connection failed"));

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/users", users);
app.use("/auth", auth);
const port = 3100;

app.listen(port, () => console.log("listening to port" + port));
