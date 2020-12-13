// Requires
require('dotenv').config()
// Imports -----------------------------------
const firebase = require("./src/firebase");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const app = express();
const port = process.env.PORT || 5000;
const http = require("http").createServer(app);
const io = require("socket.io")(http);
// const redisAdapter = require('socket.io-redis');
// io.adapter(redisAdapter({ host: 'localhost', port: 6379 }));
const cors = require("cors");
const nms = require("./src/nms/nms");
const userService = require("./api/user/user.service");
var socket = require("socket.io-client")(`http://localhost:${port}`);
// ------------------------------------------

// MiddleWares ------------------------------
const {validateToken} = require('./middlewares/validateToken')
// ------------------------------------------

// Express config ###########################
if (process.env.NODE_ENV === "production") {
  app.use(express.static("public"));
} else {
  const corsOptions = {
    origin: ["*", "http://127.0.0.1:8000", "http://localhost:8000"],
    credentials: true,
  };
  app.use(cors(corsOptions));
}
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  session({
    secret: "SECRETE3943738937462",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
// ###########################################

// User cleanup on server load:
const cleanUp = async () => {
  await userService.userCleanUp();
  socket.emit("serverStarted");
};
cleanUp();

// restfulAPI ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// Routes
const userAuth = require("./api/auth/auth.routes");
const cameraRoutes = require("./api/camera/camera.routes");
const userRoutes = require("./api/user/user.routes");
const notificationRoutes = require("./api/notification/notification.routes");
const verifyRoutes = require("./api/verify/verify.routes");
const groupRoutes = require("./api/group/group.routes");
const localServRoutes = require("./api/localserv/localserv.routes");
const connectSockets = require("./api/socket/socket.routes");

// Endpoints
app.use("/api/user", validateToken, userRoutes);
app.use("/api/camera", validateToken, cameraRoutes);
app.use("/api/auth", userAuth);
app.use("/api/notification", validateToken, notificationRoutes);
app.use("/api/verify", verifyRoutes);
app.use("/api/group", validateToken, groupRoutes);
app.use("/api/localserv", localServRoutes)
connectSockets(io);
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// Set server port
nms.run();

http.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
