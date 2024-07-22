class UsersController {
  /**
   * index - GET para listar varios registros
   * show - GET par aum registro especifico
   * create - POST para criar um registro
   * update - PUT para atualizar um registro
   * delete - DELETE para remover um registro
   */

  create(request, response) {
    const { name, email, password } = request.body;
    response.status(201).json({ name, email, password });
  }
}

module.exports = UsersController;
