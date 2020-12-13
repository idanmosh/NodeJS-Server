const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const userService = require("../user/user.service");
const saltRounds = 10;
const JWT_SECRET = process.env.JWT_SECRET;

const signup = async (groupId, email, password, fireBaseToken) => {
  const userToSave = {
    email,
    groupId,
    fireBaseToken,
    isLogin: false,
    isAdmin: false,
    lastSignIn: null,
    isGroupApproved: false,
  };

  // Check if user already exist with same email
  const isExist = await userService.getByUsername(email);
  if (isExist) {
    throw new Error("User already exist");
  }
  // Encrypt passwords
  const hash = await bcrypt.hash(password, saltRounds);
  return userService.add({
    ...userToSave,
    createdAt: Date.now(),
    password: hash,
  });
};

// *****************************************************************************
const login = async (username, password) => {
  if (!username || !password) throw new Error("Username & Password required");
  // Check if user is exist
  const user = await userService.getByUsername(username);
  if (!user) throw new Error("Username is not exist");
  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new Error("password is incorrect");

  return new Promise((res, rej) => {
    jwt.sign(user, JWT_SECRET, {  }, (e, token) => {
      if (e) {
        rej(() => {
          throw new Error(e.message);
        });
      }
      res({token, user});
    });
  });
};

const validatePassword = async (user, oldPass) => {
  if (!user || !oldPass) {
    throw new Error("Pass Validate Error: Username & Password required");
  }
  const match = await bcrypt.compare(oldPass, user.password);
  return match;
};

const hashPwd = async (password) => {
  try {
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
  } catch (e) {
    console.log("Error while hash password:", e);
    res.status(401).send(e.message);
  }
};

const generateToken = async () => {
try{

}catch(e){
  throw e.message
}
}

module.exports = {
  signup,
  login,
  hashPwd,
  validatePassword,
  generateToken
};
