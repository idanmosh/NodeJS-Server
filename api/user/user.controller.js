const userService = require("./user.service");
const authService = require("../auth/auth.service");

const getUsers = async (req, res) => {
  const params = req.params;
  try {
    const users = await userService.query(params);
    res.send(users);
  } catch (e) {
    console.log("Error While Getting Users", e);
    res.status(500).send(e.message)
  }
};

const getByEmail = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userService.getByUsername(id);
    res.send(user);
  } catch (e) {
    console.log("Error while getting user by email");
    res.status(500).send(e.message)
  }
};

const updateUser = async (req, res) => {
  const updatedUser = req.body.user;
  try{
    const user = await userService.update(updatedUser)
    res.status(200).send(user)
  }catch(e){
    console.log('Error while updateUser:', e.message);
    res.status(500).send(e.message)
  }
}

const updateUserPassword = async (req, res) => {
  const userId = req.body.email;
  const newPwd = req.body.password;
  try {
    const user = await userService.getByUsername(userId);
    if(!user) throw new Error('User does not exist')
    const hashedPwd = await authService.hashPwd(newPwd);
    user.password = hashedPwd;
    const updatedUser = await userService.update(user);
    res.status(200).send(updatedUser)
  } catch (e) {
    console.log("Error while update password:", e);
    res.status(400).send(e.message)
  }
};

const changeUserPassword = async (req,res) => {
  const userId = req.body.email
  const userOldPass = req.body.oldPass
  const userNewPass = req.body.newPass
  console.log(userId, userOldPass, userNewPass);
  try{
    const user = await userService.getByUsername(userId);
    if(!user) throw new Error('User does not exist')

    const isOldPassValid = await authService.validatePassword(user,userOldPass)
    if(!isOldPassValid) throw new Error('Error while validate old pass: Password is incorrect');

    const hashedPwd = await authService.hashPwd(userNewPass);
    user.password = hashedPwd;
    const updatedUser = await userService.update(user);
    res.status(200).send(updatedUser)

  }catch(e){
    console.log('Error while change user password:', e.message);
    res.status(401).send(e.message)
  }
}

module.exports = {
  getUsers,
  getByEmail,
  updateUserPassword,
  changeUserPassword,
  updateUser
};
