const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
// copy the const name and the file path to new version

const telephonytool = require('./routes/telephonytool');;

//copy the router use and update the sprint version
router.use(telephonytool);

module.exports = router
