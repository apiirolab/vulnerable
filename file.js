
module.exports.index = async function (req, res) {
  const value = req.query.value;

  res.setHeader("Set-Cookie", value);  // Noncompliant
  res.cookie("connect.sid", value);  // Noncompliant
};

module.exports.index2 = async function (req, res) {
  const value = req.query.value;

  res.setHeader("Set-Cookie", value);  // Noncompliant
  res.cookie("connect.sid", value);  // Noncompliant
};

module.exports.index3 = async function (req, res) {
  const value = req.query.value;

  res.setHeader("Set-Cookie", value);  // Noncompliant
  res.cookie("connect.sid", value);  // Noncompliant
};

module.exports.index4 = async function (req, res) {
  const value = req.query.value;

  res.setHeader("Set-Cookie", value);  // Noncompliant
  res.cookie("connect.sid", value);  // Noncompliant
};
