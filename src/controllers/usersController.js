const AppError = require("../utils/AppError");
const sqliteConnection = require("../databases/sqlite");

class UsersController {
  /**
   * index - GET para listar varios registros
   * show - GET par aum registro especifico
   * create - POST para criar um registro
   * update - PUT para atualizar um registro
   * delete - DELETE para remover um registro
   */

  async create(request, response) {
    const { name, email, password } = request.body;

    const database = await sqliteConnection();

    const checkUserExist = await database.get(
      "SELECT * FROM users WHERE email = (?)",
      [email]
    );

    if (checkUserExist) {
      throw new AppError("Este email ja esta em uso");
    }

    await database.run(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, password]
    );

    response.status(201).json();
  }
}

module.exports = UsersController;
