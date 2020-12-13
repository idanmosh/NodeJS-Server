const dbService = require('../../services/mongo.service')
const ObjectId = require('mongodb').ObjectId
const COLLECTION = 'localserv'

const query = async (pos) => {
    console.log('INSIDE');
    const collection = await dbService.getCollection(COLLECTION)
    const radius = 500 // IN KM
    try{
        const servers = await collection.find({
            location: 
                {
                    $geoWithin:
                        { $centerSphere: [[parseInt(pos.lat), parseInt(pos.lng)], radius / 6371.0710] }
                }
        }).toArray()
        return servers
    }catch(e){
        console.log('Error while query');
        throw e.message
    }
}

const queryByGroupId = async (gid) => {
    const collection = await dbService.getCollection(COLLECTION)
    console.log('Query by GID:', gid);
    try{
        const isServExists = await collection.find({"gid": gid}).toArray()
        return isServExists
    }catch(e){
        throw e.message
    }
}

const add =  async(server) => {
    const collection = await dbService.getCollection(COLLECTION)
    const servToAdd = {
        gid: server.gid,
        pos: {lat: server.pos[0], lng: server.pos[1]},
        location: {coordinates:[server.pos[0], server.pos[1]], type: 'Point'},
        publicIp: server.publicIp,
        isInitiated: server.is_initiated,
        createdAt: Date.now()
    }
    try{
        const isServExists = await collection.find({"gid": server.gid}).toArray()
        if(isServExists.length) throw new Error('Local Server Already Exists')
        await collection.insertOne(servToAdd)
        return 
}catch(e){
    console.log('Error while add server');
    throw e.message
}
}

module.exports = {
    add,
    query,
    queryByGroupId
}