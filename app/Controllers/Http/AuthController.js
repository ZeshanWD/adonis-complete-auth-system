'use strict'

const { validate } = use('Validator');
const { flashAndRedirect } = use('App/Helpers');
const User = use('App/Models/User');
const Mail = use('Mail');
const Env = use('Env');
const jwt = require('jsonwebtoken');

class AuthController {

  async signup({ session, request, response }) {
    const validation = await validate(request.all(), {
      email: 'required|email',
      firstName: 'required',
      lastName: 'required',
      password: 'required|min:4',
    });

    if (validation.fails()) {
      session.withErrors(validation.messages()).flashExcept(['password']);
      return response.redirect('back');
    }

    const userFound = await User.findBy('email', request.input('email'));
    if (userFound) {
      return flashAndRedirect(
        'danger',
        'an account already exists with this email',
        'back',
        {
          session,
          response,
        }
      );
    }

    const user = await User.create({
      email: request.input('email'),
      first_name: request.input('firstName'),
      last_name: request.input('lastName'),
      password: request.input('password'),
      email_verified: false,
    });

    const token = jwt.sign({ email: user.email }, Env.get('SECRET'), {
      expiresIn: 60 * 60 * 24 * 3,
    });

    const params = {
      ...user.toJSON(),
      token,
      appUrl: Env.get('APP_URL'),
    };

    await Mail.send('emails.confirm_account', params, (message) => {
      message
        .to(user.email)
        .from(Env.get('FROM_EMAIL'))
        .subject('Confirm your Account!')
    });

    return flashAndRedirect(
      'success',
      'please check your email to confirm the account',
      '/login',
      {
        session,
        response,
      }
    );


  }

}

module.exports = AuthController
