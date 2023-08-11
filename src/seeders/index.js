module.exports = async function runSeeders() {
  await require("./user.seeder")();
  await require("./carned.seeder")();
};
