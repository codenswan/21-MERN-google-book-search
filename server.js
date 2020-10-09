const express = require("express");
const logger = require("morgan");
const compression = require("compression");
const mongoose = require("mongoose");

//*middleware
const app = express();
app.use([
  express.urlencoded({ extended: true }),
  express.json(),
  compression(),
  logger("dev"),
]);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//*mongoose config
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/books", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

//*mongo setup
const mongodb = mongoose.connection;
mongodb.on("error", console.error.bind(console, "connection error:"));
mongodb.once("open", () => console.log("Connected to database."));

//* Link API Routes here


//*port config
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(
    "🚀  Server server now on port",
    PORT,
    "👻 React App on port 3000"
  );
});
