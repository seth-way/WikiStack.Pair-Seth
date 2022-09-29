const express = require("express");
const app = express();
const morgan = require("morgan");
const {
  addPage,
  editPage,
  main,
  userList,
  userPages,
  wikiPage,
} = require("./views");
const { db } = require("./models");

app.use(morgan("dev"));
app.use(express.static("./Public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(main(""));
});

db.authenticate().then(() => {
  console.log("connected to the database");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
