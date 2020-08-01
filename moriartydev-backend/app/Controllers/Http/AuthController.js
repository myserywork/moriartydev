'use strict'

const User = use('App/Models/User');

class AuthController {
  async register({ request, response }) {
    const { key } = request.all();
    if (key !== 'smok1234') return response.status(401).send('Não autorizado.');

    const data = request.only(['username', 'email', 'password']);

    let user = await User.query().where({ username: data.username }).first();
    if (user) return response.status(400).send('Username indisponível.');

    user = await User.query().where({ email: data.email }).first();
    if (user) return response.status(400).send('E-mail indisponível.');

    return await User.create(data);
  }

  async authenticate({ request, auth, response }) {
    const { email, password } = request.all();

    const user = await User.findBy('email', email);

    if (!user) return response.status(401).send();

    const token = await auth.attempt(email, password);

    return token;
  }

  async user({ auth, response }) {
    if (!auth.user) return response.status(401).send();
    return auth.user;
  }
}

module.exports = AuthController
