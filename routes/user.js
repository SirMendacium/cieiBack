const express = require('express')
const router = express.Router()
const controller = require('../controllers/index')

router.post("/register", controller.register)
router.get("/getAll", controller.getAll)


module.exports=router