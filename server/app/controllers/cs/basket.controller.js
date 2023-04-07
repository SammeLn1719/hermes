const connection = require('../../db')

class BasketController {
    BasketController() {

    }
    async createBasket(req, res) {
        const { id, id_product, quantity } = req.body
        var sql = "INSERT INTO Basket( id, id_product, quantity VALUES (?)";
        var values = [id, id_product, quantity];
        connection.query(sql, [values], function (err, result) {
            if (err) throw err;
            res.json(result)
        });
    }
    async getBaskets(req, res) {
        var sql = "SELECT *  from Basket";
        connection.query(sql, function (err, result) {
            if (err) throw err;
            res.json(result)
        });
    }
    async getOneBasket(req, res) {
        const { id } = req.body
        var sql = "SELECT * from Basket where id=?";
        var values = [id];
        connection.query(sql, [values], function (err, result) {
            if (err) throw err;
            res.json(result)
        });
    }
    async updateBasket(req, res) {
        const { id, password } = req.body
        var sql = "UPDATE Basket SET password = ? WHERE id = ?;";
        var values = [password, id];
        connection.query(sql, [password, id], function (err, result) {
            if (err) throw err;
            res.json(result)
        });
    }
    async deleteBasket(req, res) {
        const { id } = req.body
        var sql = "SELECT * from Basket where id=?";
        var values = [id];
        connection.query(sql, [values], function (err, result) {
            if (err) throw err;
            res.json(result)
        });
    }
}
module.exports = new BasketController()