import stores from '../services/Stores.js'
import transactions from '../services/Transactions.js'
import uploadHelper from '../helpers/uploadHelper.js'

let storesList = {}
class UploadController {

    static getStoreByName = (name, objs) => {
        let ret = this.storesList.find(o => o.Name === name);
        if (ret)
            return ret.Id

        ret = objs.find(o => o.Name === name);
        if (ret)
            return ret.Id

        return false
    }

    static upload = async (req, res) => {

        this.storesList = await stores.findAll()

        if (!req.files || Object.keys(req.files).length === 0) {
            res.status(400).send('No files were uploaded.');
            return
        }


        const file = req.files.file.data.toString('utf8')

        const fileArray = file.split('\n')

        let recordIds = []
        let inserteds = []

        for (const line of fileArray) {

            if (line.trim().length === 0)
                return

            let newStore
            let storeId = this.getStoreByName(line.slice(62), inserteds)
            if (storeId)
                recordIds.push(storeId)
            else {
                newStore = await stores.insert({
                    Owner: line.slice(48, 61),
                    Name: line.slice(62)
                })
                recordIds.push(newStore.insertId)
                inserteds.push({ Name: line.slice(62), Id: newStore.insertId })
            }
        }


        fileArray.forEach((line, i) => {
            if (line.trim().length === 0)
                return



            transactions.insert({
                "Type": line.slice(0, 1),
                "Value": uploadHelper.getEfffect(line.slice(0, 1),line.slice(9, 18)),
                "Cpf": line.slice(19, 29),
                "Card": line.slice(30, 41),
                "Datetime": uploadHelper.formatDatetime(line.slice(1, 8), line.slice(42, 47)),
                "Fk_Store": recordIds[i]
            })
        })

        res.status(200).send({ message: "file uploaded" })



    }


}

export default UploadController