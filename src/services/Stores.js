import db from '../config/dbConnect.js'

class Stores {

    static findAll = () => {
        var sql = 'SELECT * from desafio_dev.store'

        return new Promise(data => {
            db.query(sql, function (error, results) {
                if (error) throw error
                else {
                    data(results)
                    console.log("Select All Stores");
                }
            });
        })
    }

    static insert = (object) => {
        var sql = 'INSERT INTO desafio_dev.store SET ?'
        return new Promise(data => {
            db.query(sql, object, function (error, results, fields) {
                if (error) throw error;
                else {
                    data({ insertId: results.insertId })
                    console.log({ storeInsertId: results.insertId });
                }
            });
        })
    }
}

export default Stores