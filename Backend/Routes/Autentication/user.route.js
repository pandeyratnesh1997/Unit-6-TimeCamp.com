// write login signup route here

const express = require('exrpess')

const {} = require('../controllers/userControllers')

const router = express.Router()

router.route("/").post(registerUser)

module.exports = router;



