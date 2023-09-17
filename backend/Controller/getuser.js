<<<<<<< HEAD
exports.getuser = (req, res) => {
=======


exports.getuser = async (res, req) => {
>>>>>>> origin
  res.json(req.body);
  console.log(req.body);
  res.end();
}