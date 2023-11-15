const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/user.routes");
const comicsRouter = require("./routes/comics.routes");
require("dotenv").config();
require("./database");

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api", comicsRouter);
app.use("/api/user", userRouter);

app.use("*", (req, res) => {
  res.status(404).json({ message: "Page not found" });
});

app.listen(process.env.PORT, () => {
  console.log(`listen server in port ${process.env.PORT}`);
});

app.listen();
