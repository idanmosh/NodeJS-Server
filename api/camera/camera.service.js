const dbService = require('../../services/mongo.service')
const ObjectId = require('mongodb').ObjectId
const COLLECTION = 'camera'

const add = async (camera) => {
    const collection = await dbService.getCollection(COLLECTION)
    try{
        await collection.insertOne(camera);
        return camera;
    }catch(e){
        throw e
    }
}

const queryById = async (id) => {
    const collection = await dbService.getCollection(COLLECTION)
    try{
        const cameras = await collection.find({"groupId": id}).toArray();
        return cameras;
    }catch(e){
        throw e
    }
}

const remove = async (id) => {
    const collection = await dbService.getCollection(COLLECTION)
    const camId = ObjectId(id)
    try{
        await collection.deleteOne( {"_id": camId} );
        return ;
    }catch(e){
        throw e
    }
}

const update = async (camera) => {
    const collection = await dbService.getCollection(COLLECTION)
    camera._id = ObjectId(camera._id)
    try{
        await collection.replaceOne({ "_id": camera._id }, { ...camera })
        return camera;
    }catch(e){
        throw e
    }
}

module.exports = {
    add,
    queryById,
    remove,
    update
}