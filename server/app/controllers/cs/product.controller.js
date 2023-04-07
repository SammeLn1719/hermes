const connection = require('../../db')

class ProductController {
    ProductController() {

    }
    async createProduct(req, res) {
        const { id,name,information,cost,compound } = req.body
        var sql = "INSERT INTO product(id,name,information,cost,compound) VALUES (?)";
        var values = [id,name,information,cost,compound];
        connection.query(sql, [values], function (err, result) {
            if (err) throw err;
            res.json(result)
        });
    }
    async getProducts(req, res) {
        var sql = "SELECT *  from product";
        connection.query(sql, function (err, result) {
            if (err) throw err;
            res.json(result)
        });
    }
    async getOneProduct(req, res) {
        const { id } = req.body
        var sql = "SELECT * from product where id=?";
        var values = [id];
        connection.query(sql, [values], function (err, result) {
            if (err) throw err;
            res.json(result)
        });
    }
    async updateProduct(req, res) {
        const { id,password } = req.body
        var sql = "UPDATE product SET password = ? WHERE id = ?;";
        var values = [password,id];
        connection.query(sql, [password,id], function (err, result) {
            if (err) throw err;
            res.json(result)
        });
    }
    async deleteProduct(req, res) {
        const { id } = req.body
        var sql = "SELECT * from product where id=?";
        var values = [id];
        connection.query(sql, [values], function (err, result) {
            if (err) throw err;
            res.json(result)
        });
    }
}
module.exports = new ProductController()