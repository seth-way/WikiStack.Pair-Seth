const express = require('express');
const app = express();
const morgan = require('morgan');
const {
  addPage,
  editPage,
  main,
  userList,
  userPages,
  wikiPage,
} = require('./views');
const { db, User, Page } = require('./models');
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/users');
const PORT = 3000;

//// MIDDLEWARE
app.use(morgan('dev'));
app.use(express.static('./Public'));
app.use(express.urlencoded({ extended: false }));

//// ROUTES
app.use('/wiki', wikiRouter);
app.use('/users', userRouter);

app.get('/', (req, res) => {
  res.redirect('/wiki');
});

db.authenticate().then(() => {
  console.log('connected to the database');
});

const init = async () => {
  // await db.sync();
  await db.sync({ force: true });
  await Page.sync();
  await User.sync();
  // make sure that you have a PORT constant
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });
};

init();
