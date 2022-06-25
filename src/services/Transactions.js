import db from '../config/dbConnect.js'

class Transactions {

    static findAll = () => {
        var sql = 'SELECT * FROM desafio_dev.transaction INNER JOIN desafio_dev.store ON desafio_dev.store.Id = desafio_dev.transaction.Fk_Store'

        return new Promise(data => {
            db.query(sql, function (error, results) {
                if (error) throw error
                else {
                    data(results)
                    console.log("Select All Transactions");
                }
            });
        })
    }

    static insert = (object) => {
        var sql = 'INSERT INTO desafio_dev.transaction SET ?'
        return new Promise(data => {
            db.query(sql, object, function (error, results, fields) {
                if (error) throw error;
                else {
                    data({ insertId: results.insertId })
                }
            });
        })
    }
}

export default Transactions