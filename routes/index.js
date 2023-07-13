const web = require('./web.js')
const user = require('./user.js')
module.exports = (app) => {
    app.use(web)
    app.use(user)
  }