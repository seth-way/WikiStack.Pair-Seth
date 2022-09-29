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

app.use(morgan("dev"));
app.use(express.static("./Public"));
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send(main(""));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
