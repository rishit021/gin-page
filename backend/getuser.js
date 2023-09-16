const app = require('./index');
const express = require('express');

const router = express.router();

router.route()


exports.userdata = (req, res) => {
  //res.json(req.body);
  console.log(req.body);
  res.end();
}
