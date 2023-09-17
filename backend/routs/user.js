const app = require('../index');
const express = require('express');
const getuser = require('../Controller/getuser')
const router = express.Router();


router.route('/sucsess').post(getuser.getuser);


module.exports = router;