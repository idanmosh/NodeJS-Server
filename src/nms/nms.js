const NodeMediaServer = require('node-media-server');
const config = require('./streamConfig').rtmp_server;

const nms = new NodeMediaServer(config);

module.exports = nms;