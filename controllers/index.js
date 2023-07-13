const { User } = require('../models')

console.log(User)
module.exports = {
  index: async (req, res) => {
    res.send('a')
  },
  register: async (req, res) => {
    try {
      const newUser = await User.create({
        firstname: 'ads',
        lastname: "asdsa",
        email: "asd",
        password: "asd"
      })

      res.status(201).json({
        user: {
          email: newUser.email,
        }
      }
      )
    }
    catch (err) {
      console.log(err)
    }
  },

  getAll: async (req, res) => {
    // console.log(await User.findALl())
  }
};