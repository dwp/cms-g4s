const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
// copy the const name and the file path to new version
const g4s = require('./routes/g4s');;

//copy the router use and update the sprint version
router.use(g4s);

module.exports = router
