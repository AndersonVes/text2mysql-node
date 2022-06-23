import stores from '../services/Stores.js'

class StoresController {

    static listStores = async (req, res) => {
       
        let ret = await stores.findAll()
        res.status(200).send(ret)
    }
    
    static insertStore = async (req, res) => {
        
        let ret = await stores.insert(req.body)
        res.status(200).send(ret)
    }
}

export default StoresController