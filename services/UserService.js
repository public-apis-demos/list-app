const User = require("../model/emp");

class UserService {
  async getUsers() {
    return await User.findAll();
  }
}

module.exports = new UserService();
