'use strict'

const User = use('App/Models/User');

class AuthController {
    async register({ request, response }) {
        const data = request.only(['username', 'email', 'password']);

        const user = await User.create(data);
        //console.log(user);
        response.status(200).send(user);
    }

    async authenticate() {

    }
}

module.exports = AuthController
