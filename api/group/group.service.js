const dbService = require('../../services/mongo.service')
const ObjectId = require('mongodb').ObjectId
const COLLECTION = 'group'
const { uuid } = require('uuidv4');
const {sendGroupId} = require('../../services/mailerService')

const add = async (email) => {
    const collection = await dbService.getCollection(COLLECTION)
    const groupId = uuid()
    const group = {
        groupId,
        recoveryEmail: email,
        createdAt: Date.now()
    }
    try{
        const isGroupExists = await collection.find({"recoveryEmail": email}).toArray()
        if(isGroupExists.length){
            let existingGroup = isGroupExists[0]
            await sendGroupId(existingGroup.groupId, existingGroup.recoveryEmail)
            return existingGroup
        }
        await collection.insertOne(group)
        await sendGroupId(groupId, email)
        return group
    }catch(e){
        console.log('Error while Add new group', e.message);
        throw e.message
    }
}

module.exports = {
    add
}