const { user } = require("../models/user");

exports.getuser =(req, res) => {
  res.json();
  const newuser = new user(req.body);
  newuser.save();

  res.end();
}