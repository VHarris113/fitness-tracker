const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const apiRoutes = require("./routes/apiRoutes");
const userRoutes = require("./routes/userRoutes");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitness-tracker-project",
  {
    useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
    useFindAndModify: false
  }
);

app.use(apiRoutes);
app.use(userRoutes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});