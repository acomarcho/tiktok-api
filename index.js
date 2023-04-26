// Dependencies
const express = require("express");
const cors = require("cors");

const igRouter = require("./routes/tiktok");

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use("/tiktok", igRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
