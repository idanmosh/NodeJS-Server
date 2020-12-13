const cameraService = require('./camera.service')

const addCamera = async (req, res) => {
    const cameraToSave = req.body.camera
    try{
        const addedCamera = await cameraService.add(cameraToSave);
        res.status(200).send(addedCamera)
    }catch(e){
        console.log('Error while adding camera:', e.message);
        res.status(500).send()
    }
}

const getByGroupId = async (req, res) => {
    const {id} = req.params
    console.log('Getting cameras with GID:', id)
    try{
        const cameras = await cameraService.queryById(id);
        res.status(200).send(cameras)
    }catch(e){
        console.log('Error while adding camera:', e.message);
        res.status(500).send()
    }
}

const delCamera = async (req, res) => {
    const {id} = req.params
    console.log(id);
    try{
        await cameraService.remove(id);
        res.status(200).send('Camera Deleted!')
    }catch(e){
        console.log('Error while adding camera:', e.message);
        res.status(500).send()
    }
}

const updateCamera = async (req, res) => {
    const {camera} = req.body
    try{
        const updatedCamera = await cameraService.update(camera);
        res.status(200).send(updatedCamera)
    }catch(e){
        console.log('Error while adding camera:', e.message);
        res.status(500).send()
    }
}

module.exports = {
    addCamera,
    getByGroupId,
    delCamera,
    updateCamera
}