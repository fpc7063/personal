class LivroDao {
    constructor(db) {
        this._db = db
    }

    listaLivros(callback) {
        this._db.all(
            'SELECT * FROM livros',
            (err, res) => {
                callback(err, res)
            }
        
        )
    }
}


module.exports = LivroDao