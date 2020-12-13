const groupService = require('./group.service')

const initGroupEmail = async (req ,res) => {
const {email} = req.body
try{
    const group = await groupService.add(email)
    res.status(200).send(group)
}catch(e){
    console.log('Error while initGroupEmail', e.message);
    res.status(500).send('Cannot add new camera:', e.message)
}
}
module.exports = {
    initGroupEmail
}