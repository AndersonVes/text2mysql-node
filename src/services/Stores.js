import db from '../config/dbConnect.js'

class Stores {

    static findAll = () => {
        var sql = 'SELECT * from desafio_dev.store'

        return new Promise(data => {
            db.query(sql, function (error, results) {
                if (error) throw error
                data(results)
            });
        })

    }
}

export default Stores