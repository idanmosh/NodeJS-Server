const authService = require("./auth.service");
const userService = require("../user/user.service");
const { initNotification } = require("../notification/notification.service");
const { uuid } = require("uuidv4");
const { update } = require("../user/user.service");
const {queryByGroupId} = require("../localserv/localserv.service")
var socket = require("socket.io-client")(`http://localhost:5000`);

const signup = async (req, res) => {
  const { groupId, email, password, fireBaseToken } = req.body;
  try {
    //Check if server exists:
    const servers = await queryByGroupId(groupId)
    if(!servers.length) throw new Error('GroupId not found')
    const user = await authService.signup(
      groupId,
      email,
      password,
      fireBaseToken
    );
    req.session.user = user;
    if (!user.isAdmin) {
      userService.getGroupAdmin(groupId).then((res) => {
        if (res) {
          const adminEmail = res.email;
          userService
            .getByUsername(adminEmail)
            .then((res) => {
              let notification = {
                _id: uuid(),
                createdAt: Date.now(),
                content: `You have new group request from ${user.email}`,
                isRead: false,
                sender: user,
              };
              if (!res.notifications) {
                res.notifications = [];
              }
              res.notifications.push(notification);
              update(res)
                .then(res => socket.emit("userUpdated", res))
                .catch((e) => {
                  throw new Error("update user failed:", e.message);
                });
              initNotification(
                res.fireBaseToken,
                "PoolOff",
                "You have new join group request!",
                user,
                "PoolOff-Message"
              );
            })
            .catch((e) => console.log("Error while getting admin", e.message));
        }
      });
    }
    res.send(user).status(200);
  } catch (e) {
    console.log("Error while sign-up!", e);
    res.status(401).send(e.message);
  }
};

// ****************************************************************************************

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const userData = await authService.login(username, password);
    userData.user.isLogin = true;
    const updatedUser = await userService.update(userData.user);
    req.session.user = updatedUser;
    res.status(200).send({token:userData.token, user: updatedUser})
  } catch (err) {
    console.log(err.message);
    res.status(401).send(err.message);
  }
};

// ****************************************************************************************

const logout = async (req, res) => {
  const userId = req.body.username;
  console.log(userId);
  try {
    const user = await userService.getByUsername(userId);
    user.isLogin = false;
    await userService.update(user);
    req.session.destroy();
    res.status(200).send();
  } catch (e) {
    console.log(e);
    res.status(500).send(e.message);
  }
};

const refreshToken = async (req, res) => {
  try{
    const refreshedToken = await authService.generateToken()
    res.status(200).send(refreshedToken)
  }catch(e){
    console.log('Error while refresh token', e.message);
    res.status(500).send(e.message);
  }
}

module.exports = {
  signup,
  login,
  logout,
  refreshToken
};
