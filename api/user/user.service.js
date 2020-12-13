const dbService = require('../../services/mongo.service')
// const { delete } = require('../auth/auth.routes')
const ObjectId = require('mongodb').ObjectId
const COLLECTION = 'user'

// Query all users that accept filter params ---------------------
const query = async (filterBy) => {
    // TODO: Filtering
    const collection = await dbService.getCollection(COLLECTION)
    try{
        const users = await collection.find().toArray();
        users.forEach(user => delete user.password)
        return users

    }catch(e){
        console.log('Error while Query users:', e);
        throw e
    }
}
// ----------------------------------------------------------------

// User cleanup
const userCleanUp = async () => {
    try{
        const users = await query();
        users.map(user => {
            user.isLogin = false ;
        })
        // console.log(users);
    }catch(e){
        console.log(e);
        throw e.message
    }
}

// Query users by groupId -----------------------------------------
const getByGroupId = async (groupId) => {
    const collection = await dbService.getCollection(COLLECTION)
    try{
        const users = await collection.find({"groupId": groupId}).toArray();
        users.forEach(user => delete user.password)
        return users

    }catch(e){
        console.log('Error while get users by groupId:', e);
        throw e
    }
}
// ----------------------------------------------------------------

// Get group admin
const getGroupAdmin = async(groupId) => {
    const collection = await dbService.getCollection(COLLECTION)
    try{
        const admin = await collection.findOne({"groupId": groupId, "isAdmin": true})
        return admin
    }catch(e){
        console.log('Error while getting group Admin', e.message);
        throw e.message
    }
}

//Get user by email -----------------------------------------------
const getByUsername = async (email) => {
    const collection = await dbService.getCollection(COLLECTION)
    try {
        const user = await collection.findOne({ "email": email })
        return user
    } catch (e) {
        console.log(`ERROR: while finding user ${email}`)
        throw e;
    }
}
// ----------------------------------------------------------------

const add = async (user) => {

    const collection = await dbService.getCollection(COLLECTION)
    try {
        const users = await collection.find({"groupId": user.groupId}).toArray();
        if(!users.length){
            user.isAdmin = true;
            user.isGroupApproved = true;
        }
        await collection.insertOne(user);
        return user;
    } catch (e) {
        console.log(`ERROR: cannot insert user`)
        throw e;
    }
}
// ---------------------------------------------------------------
const update = async(user) => {
    const collection = await dbService.getCollection(COLLECTION)
    user._id = ObjectId(user._id);

    try {
        await collection.replaceOne({ "_id": user._id }, { ...user })
        return user;
    } catch (err) {
        console.log(`ERROR: cannot update user ${user._id}`)
        throw err;
    }
}

module.exports = {
    query,
    getByUsername,
    add,
    getByGroupId,
    update,
    userCleanUp,
    getGroupAdmin
}