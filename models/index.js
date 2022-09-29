const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
  logging: false,
});

const Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true,
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  status: {
    type: Sequelize.ENUM('open', 'closed'),
  },
});

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true,
    unique: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
});

module.exports = {
  db,
  Page,
  User,
};
