module.exports = connectSockets;

function connectSockets(io) {
  // Identify of how many clients online real-time
  let connectedClients = [];
  io.on("connection", (socket) => {
    connectedClients.push(socket);
    console.log("User Connected, Active users: ", connectedClients.length);
    const userId = socket.request._query["userId"];
    console.log(userId);
    io.emit("active-users-changed", connectedClients.length);
    // --------------------------------------------------
    socket.on('userUpdated', (user) => {
      console.log('USER UPDATED', user._id);
      socket.broadcast.emit(`updateUser-${user._id}`, user);
    });

    socket.on("newCamera", (camData) => {
      console.log('newCamera', camData);
      socket.broadcast.emit(`addCamera-${camData.groupId}`, camData);
    });

    socket.on("newCameraSuccess", (camData) => {
      console.log('newCameraSuccess', camData);
      socket.broadcast.emit(`addCameraSuccess-${camData.groupId}`, camData);
    });

    socket.on("removeCamera", (camData) => {
      socket.broadcast.emit(`deleteCamera-${camData.groupId}`, camData);
    });

    socket.on("removeCameraSuccess", (camData) => {
      socket.broadcast.emit(`deleteCameraSuccess-${camData.groupId}`, camData);
    });

    socket.on("editCamera", (camData) => {
      socket.broadcast.emit(`replaceCamera-${camData.groupId}`, camData);
    });

    socket.on("editCameraSuccess", (camData) => {
      socket.broadcast.emit(`replaceCameraSuccess-${camData.groupId}`, camData);
    });

    socket.on("requestFirstFrame", (camData) => {
      socket.broadcast.emit(`reqfirstFrame-${camData.groupId}`, camData);
    });

    socket.on("returnFirstFrame", (camData) => {
      socket.broadcast.emit(`retFirstFrame-${camData.groupId}`, camData);
    });

    socket.on("startStreaming", (camData) => {
      const data = {
        camData,
        viewerId: userId,
      };
      socket.broadcast.emit(`startStream-${camData.groupId}`, data);
    });

    socket.on("stopStreaming", (camData) => { 
      const data = {
        camData,
        viewerId: userId,
      };
      socket.broadcast.emit(`stopStream-${camData.groupId}`, data);
    });

    socket.on("onInitAdmin", (user) => {
      console.log('onInitAdmin', user.groupId, user.isAdmin);
      socket.broadcast.emit(`oninit-${user.groupId}`, {user});
    });

    socket.on("onInitAdminSuccess", (response) => {
      console.log('onInitAdminSuccess', response);
      socket.broadcast.emit(`onInitAdminSuccess-${response.groupId}`, response);
    });
    
    socket.on("onCheckIfLocalServerUp", (groupId) => {
      console.log('onCheckIfLocalServerUp', groupId);
      socket.broadcast.emit(`onCheckIfLocalServerUp-${groupId}`, groupId);
    });
    
    socket.on("onCheckIfLocalServerUpSuccess", (groupId) => {
      console.log('onCheckIfLocalServerUpSuccess', groupId);
      socket.broadcast.emit(`onCheckIfLocalServerUpSuccess-${groupId}`, groupId);
    });

    socket.on("serverStarted", () => {
      socket.broadcast.emit(`onServerLoad`);
    });

    socket.on('disconnect', () => {
      let socketIdx = connectedClients.findIndex(
        (_socket) => _socket.id === socket.id
      );
      if (socketIdx != -1) {
        connectedClients.splice(socketIdx, 1);
      }
      console.log("User DC, Active users: ", connectedClients.length);
      io.emit("active-users-changed", connectedClients.length);
    });
  });
}
