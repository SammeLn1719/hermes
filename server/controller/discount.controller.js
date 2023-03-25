const connection = require('../db')

class DiscountController {
    DiscountController() {

    }
    async createDiscount(req, res) {
        const { id,id_product,percent } = req.body
        var sql = "INSERT INTO discount( id,id_product,percent) VALUES (?)";
        var values = [ id,id_product,percent];
        connection.query(sql, [values], function (err, result) {
            if (err) throw err;
            res.json(result)
        });
    }
    async getDiscounts(req, res) {
        var sql = "SELECT *  from discount";
        connection.query(sql, function (err, result) {
            if (err) throw err;
            res.json(result)
        });
    }
    async getOneDiscount(req, res) {
        const { id } = req.body
        var sql = "SELECT * from discount where id=?";
        var values = [id];
        connection.query(sql, [values], function (err, result) {
            if (err) throw err;
            res.json(result)
        });
    }
    async updateDiscount(req, res) {
        const { id,password } = req.body
        var sql = "UPDATE discount SET password = ? WHERE id = ?;";
        var values = [password,id];
        connection.query(sql, [password,id], function (err, result) {
            if (err) throw err;
            res.json(result)
        });
    }
    async deleteDiscount(req, res) {
        const { id } = req.body
        var sql = "SELECT * from discount where id=?";
        var values = [id];
        connection.query(sql, [values], function (err, result) {
            if (err) throw err;
            res.json(result)
        });
    }
}
module.exports = new DiscountController()