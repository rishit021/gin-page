

exports.getuser = async (res, req) => {
  res.json(req.body);
  console.log(req.body);
  res.end();
}