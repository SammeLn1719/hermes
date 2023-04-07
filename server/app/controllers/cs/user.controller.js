const connection = require('../../db')

class UserController {
    UserController() {

    }
    async createUser(req, res) {
        const { login, password } = req.body
        var sql = "INSERT INTO users(login,password) VALUES (?)";
        var values = [login, password];
        connection.query(sql, [values], function (err, result) {
            if (err) throw err;
            res.json(result)
        });
    }
    async getUsers(req, res) {
        var sql = "SELECT *  from users";
        connection.query(sql, function (err, result) {
            if (err) throw err;
            res.json(result)
        });
    }
    async getOneUser(req, res) {
        const { id } = req.body
        var sql = "SELECT * from users where id=?";
        var values = [id];
        connection.query(sql, [values], function (err, result) {
            if (err) throw err;
            res.json(result)
        });
    }
    async updateUser(req, res) {
        const { id,password } = req.body
        var sql = "UPDATE users SET password = ? WHERE id = ?;";
        var values = [password,id];
        connection.query(sql, [password,id], function (err, result) {
            if (err) throw err;
            res.json(result)
        });
    }
    async deleteUser(req, res) {
        const { id } = req.body
        var sql = "SELECT * from users where id=?";
        var values = [id];
        connection.query(sql, [values], function (err, result) {
            if (err) throw err;
            res.json(result)
        });
    }
}
module.exports = new UserController()