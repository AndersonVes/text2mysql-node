import db from '../config/dbConnect.js'

class Transactions {

    static findAll = () => {
        let sql = 'SELECT * FROM desafio_dev.transactions INNER JOIN desafio_dev.store ON desafio_dev.store.Id = desafio_dev.transactions.Fk_Store'

        return new Promise(data => {
            db.query(sql, function (error, results) {
                if (error) throw error
                else {
                    data(results)
                }
            });
        })
    }

    static insert = (object) => {
        let sql = 'INSERT INTO desafio_dev.transactions SET ?'
        return new Promise(data => {
            db.query(sql, object, function (error, results, fields) {
                if (error) throw error;
                else {
                    data({ insertId: results.insertId })
                }
            });
        })
    }

    static getBalances = () => {
        let sql = 'SELECT desafio_dev.store.Name, SUM(desafio_dev.transactions.Value) AS Value FROM desafio_dev.transactions INNER JOIN desafio_dev.store on desafio_dev.store.Id = desafio_dev.transactions.Fk_Store GROUP BY desafio_dev.transactions.Fk_Store'
        
        return new Promise(data => {
            db.query(sql, function (error, results) {
                if (error) throw error
                else {
                    data(results)
                }
            });
        })
    }
}

export default Transactions