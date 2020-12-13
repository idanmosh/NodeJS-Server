const userService = require("../user/user.service");
const {initNotification} = require('./notification.service')

const pushNotification = async (req, res) => {
  const { groupId, channelId} = req.body;
  // TODO add title, body to req.body
  const tokens = [];
  
  try {
    const groupUsers = await userService.getByGroupId(groupId);
    groupUsers.map((user) => {
      let token = user.fireBaseToken;
      tokens.push(token);
    });
    // FireBase Push Function --------------------------------
    await initNotification(tokens, 'test', 'test', {}, channelId)
    
    // -------------------------------------------------------     
    res.send().status(200);
  } catch (e) {
    console.log("Error while push notification", e);
    res.status(500).send(e.message)
  }
};

module.exports = {
  pushNotification,
};
