const sequelize = require("../config/connection");
const { Book, User } = require("../models");

const bookData = require("./bookData.json");
const userData = require("./userData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const username = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const book of bookData) {
    await Book.create({
      ...book,
      user_id: username[Math.floor(Math.random() * username.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
