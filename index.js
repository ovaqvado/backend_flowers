require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const cors = require("cors");
const models = require("./models/models");
const router = require("./routes/index");
const errorHandlingMiddleware = require("./middleware/ErrorHandlingMiddleware");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router);
app.use(errorHandlingMiddleware);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server listen on port ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

start();
