// app.js
// Entry point: sets up Express and mounts routes

const express = require("express");
const app = express();

const dogRouter = require("./routes/dogRouter");

app.use(express.json());

app.use("/dogs", dogRouter);

const port = 4000;
app.listen(port, () => {
  console.log(`🐕 Server is running on port ${port}`);
});
