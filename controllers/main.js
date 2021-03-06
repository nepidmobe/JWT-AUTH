const jwt = require("jsonwebtoken");
const { CustomAPIError, UnAuthorizedError, BadRequest } = require("../errors");
const login = async (req, res) => {
  //mongoose validation
  //JOI pckage
  //check in the controller
  const { username, password } = req.body;
  if (!username || !password) {
    throw new BadRequest("u or p not provided"); //this works because og express-async-error packsge
  }
  const id = new Date().getDate();
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({ msg: "token created", token });
};

const dashboard = async (req, res) => {
  //   console.log(req.headers);
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnAuthorizedError("not allowed, no token provided"); //this works because og express-async-error packsge
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const luckyNumber = Math.floor(Math.random() * 100);
    return res.status(200).json({
      msg: `hello ${decoded.username}`,
      tokensecret: `${luckyNumber}`,
    });
  } catch (error) {
    throw new UnAuthorizedError("not authorized to access this route"); //this works because og express-async-error packsge
  }
};

module.exports = { login, dashboard };
