'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', 'PageController.showHome');
Route.get('/dashboard', 'PageController.showDashboard');
Route.get('/signup', 'PageController.showSignup');
Route.get('/login', 'PageController.showLogin');
Route.get('/confirm/resend', 'PageController.showResendConfirm');

Route.group(() => {
  Route.post('signup', 'AuthController.signup');
  Route.post('login', 'AuthController.login');
  Route.post('logout', 'AuthController.logout');
  Route.get('confirm/:token', 'AuthController.confirmAccount');
  Route.post('confirm/resend', 'AuthController.resendConfirmationEmail');
}).prefix('api/');