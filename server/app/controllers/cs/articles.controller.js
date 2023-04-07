const connection = require('../../db')

class ArticlesController {
    ArticlesController() {

    }
    async createArticles(req, res) {
        const { id,name, info } = req.body
        var sql = "INSERT INTO articles( id,name, info) VALUES (?)";
        var values = [ id,name, info];
        connection.query(sql, [values], function (err, result) {
            if (err) throw err;
            res.json(result)
        });
    }
    async getArticles(req, res) {
        var sql = "SELECT *  from articles";
        connection.query(sql, function (err, result) {
            if (err) throw err;
            res.json(result)
        });
    }
    async getOneArticle(req, res) {
        const { id } = req.body
        var sql = "SELECT * from articles where id=?";
        var values = [id];
        connection.query(sql, [values], function (err, result) {
            if (err) throw err;
            res.json(result)
        });
    }
    async updateArticles(req, res) {
        const { id,password } = req.body
        var sql = "UPDATE articles SET password = ? WHERE id = ?;";
        var values = [password,id];
        connection.query(sql, [password,id], function (err, result) {
            if (err) throw err;
            res.json(result)
        });
    }
    async deleteArticles(req, res) {
        const { id } = req.body
        var sql = "SELECT * from articles where id=?";
        var values = [id];
        connection.query(sql, [values], function (err, result) {
            if (err) throw err;
            res.json(result)
        });
    }
}
module.exports = new ArticlesController()