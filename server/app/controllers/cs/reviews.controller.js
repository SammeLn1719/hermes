const connection = require('../../db')

class ReviewsController {
    ReviewsController() {

    }
    async createReview(req, res) {
        const { id, id_user, id_product, content } = req.body
        var sql = "INSERT INTO reviews(id, id_user, id_product, content) VALUES (?)";
        var values = [id, id_user, id_product, content];
        connection.query(sql, [values], function (err, result) {
            if (err) throw err;
            res.json(result)
        });
    }
    async getReviews(req, res) {
        var sql = "SELECT *  from reviews";
        connection.query(sql, function (err, result) {
            if (err) throw err;
            res.json(result)
        });
    }
    async getOneReview(req, res) {
        const { id } = req.body
        var sql = "SELECT * from reviews where id=?";
        var values = [id];
        connection.query(sql, [values], function (err, result) {
            if (err) throw err;
            res.json(result)
        });
    }
    async updateReview(req, res) {
        const { id,password } = req.body
        var sql = "UPDATE reviews SET password = ? WHERE id = ?;";
        var values = [password,id];
        connection.query(sql, [password,id], function (err, result) {
            if (err) throw err;
            res.json(result)
        });
    }
    async deleteReview(req, res) {
        const { id } = req.body
        var sql = "SELECT * from reviews where id=?";
        var values = [id];
        connection.query(sql, [values], function (err, result) {
            if (err) throw err;
            res.json(result)
        });
    }
}
module.exports = new ReviewsController()