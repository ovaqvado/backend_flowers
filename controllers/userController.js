const apiError = require("../error/ApiError");

class userController {
  async registration(req, res) {}
  async login(req, res) {}
  async checkAuth(req, res, next) {
    const { id } = req.query;
    if (!id) {
      return next(apiError.badRequest("не задан id"));
    }
    res.json(id);
  }
}

module.exports = new userController();
