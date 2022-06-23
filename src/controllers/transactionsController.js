import transactions from '../services/Transactions.js'

class TransactionsController {

    static listTransactions = async (req, res) => {
       
        let ret = await transactions.findAll()
        res.status(200).send(ret)
    }

    static insertTransaction = async (req, res) => {
        
        let ret = await transactions.insert(req.body)
        res.status(200).send(ret)
    }
}

export default TransactionsController