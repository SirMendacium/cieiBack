const { User } = require("../models");
const bcrypt = require("bcryptjs");

async function hashPassword(password) {
  return await bcrypt.hash(password, 10);
}

module.exports = async () => {
  const users = [];

  users.push({
    firstname: "María",
    lastname: "Pérez",
    email: "root@gmail.com",
    password: await hashPassword("root"),
    role: "teacher",
  });

  users.push({
    firstname: "María",
    lastname: "Pérez",
    email: "roo1t@gmail.com",
    password: await hashPassword("root"),
    role: "student",
  });

  await User.bulkCreate(users);

  console.log("[Database] Se corrió el seeder de Users.");
};
