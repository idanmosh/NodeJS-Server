const moment = require("moment");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const validateToken = async (req, res, next) => {
  const header = req.headers["authorization"];

  if (typeof header !== "undefined") {
    const bearer = header.split(" ");
    const token = bearer[1];
    jwt.verify(token, JWT_SECRET, (e, authData) => {
      if (e) {
        if (e.message == "jwt expired") {
            console.log('JWT EXPIREDDDDD');
            res.status(405).send("jwt expired");
        } else res.status(403).send("token is not valid");
      } else {
        next();
      }
    });
  } else res.status(403).send("JWT is not valid");
};

module.exports = {
  validateToken,
};
