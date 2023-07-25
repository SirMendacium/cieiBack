module.exports = async function runSeeders() {
  await require("./user.seeder")();
};
