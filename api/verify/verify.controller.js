const verifyService = require('./verify.service')

const email = async (req,res) => {
    let userEmail = req.body.email
    console.log(userEmail);
    try{
        let verificationCode = await verifyService.sendVerifyPin(userEmail)
        console.log('V code received@@2', verificationCode);
        res.send({'pinCode':verificationCode, 'createdAt': Date.now()})
    }catch(e){
        console.log('Error at verify email controller');
        res.status(500).send(e.message)
    }

}

module.exports = {
    email
}