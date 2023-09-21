const app = require('../index');
const express = require('express');
const {getuser} = require('../Controller/getuser')
const {signinuser} = require('../Controller/signinuser')
const {getapp} = require('../Controller/getapp')
const router = express.Router();

router.route('/Register').post(getuser);
router.route('/Login').post(signinuser);
router.route('/signed').get(getapp);

module.exports = router;