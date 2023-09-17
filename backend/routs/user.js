const app = require('../index');
const express = require('express');
<<<<<<< HEAD
const getuser = require('../Controller/getuser')
const router = express.Router();


router.route('/sucsess').post(getuser.getuser);

=======
const {getuser} = require('../Controller/getuser')
const router = express.Router();


router.route('/sucsess').post(getuser)
>>>>>>> origin

module.exports = router;