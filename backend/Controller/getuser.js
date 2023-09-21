const { user } = require("../models/user");

exports.getuser = async (req, res) => {
  let newuser = new user(req.body);

 await newuser.save()
  .then((user)=>{
    res.status(200).json({
      'success' : true,
      user
    });
  })
  .catch((Error)=>{
    res.status(403).json({
      "success" : false,
      "massage" : Error
  })
  })
  res.end();
}