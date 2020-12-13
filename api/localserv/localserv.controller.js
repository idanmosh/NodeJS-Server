const {add, query, queryByGroupId} = require("./localserv.service")
const { uuid } = require('uuidv4');

const getLocalServ = async (req, res) => {
    const {lat, lng, publicIp} = req.query
    const pos = {lat, lng}
    console.log(pos);
    try{
        const serversInRadius = await query(pos)
        const matchedServer = serversInRadius.find(server => server.publicIp == publicIp)
        console.log('Found Matched Server:', matchedServer);
        if(!matchedServer) throw new Error('Could not found matched server')
        res.status(200).send(matchedServer.gid)
    }catch(e){
        console.log('Error while get local serv');
        res.status(500).send('Error while get local serv '.concat(e))
    }
} 

const addLocalServ = async (req, res) => {
  const localServer = req.body;
  console.log(localServer);
  console.log(localServer.gid, localServer.pos[0]);
  try {
    await add(localServer)
    res.status(200).send();
  } catch (e) {
    console.log("Error while addLocalServ", e.message);
    res.status(500).send("Error while add local serv ".concat(e));
  }
};

const getGroupId = async (req, res) => {
  const validateGroupId = async () => {
  let gid = uuid()
    try{
      let servers = await queryByGroupId(gid);
      if(!servers.length) res.status(200).send(gid)
      else validateGroupId();
    }catch(e){
      res.status(500).send("Error while get groupId ".concat(e));
    }
  }
  validateGroupId()
}

module.exports = {
  addLocalServ,
  getLocalServ,
  getGroupId
};
