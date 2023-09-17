exports.getuser = (req, res) => {
  res.json(req.body);
  console.log(req.body);
  res.end();
}