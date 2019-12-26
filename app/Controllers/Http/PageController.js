'use strict'

class PageController {

  showHome({ view }) {
    return view.render('home');
  }

  showSignup({ view }) {
    return view.render('signup');
  }

  showLogin({ view }) {
    return view.render('login');
  }

  showResendConfirm({ view }) {
    return view.render('resend_confirm');
  }

  showDashboard({ view }) {
    return view.render('dashboard');
  }

  showForgotPassword({ view }) {
    return view.render('forgot_password');
  }

  showPasswordReset({ view, params }) {
    return view.render('reset_password', {
      token: params.token,
    });
  }
}

module.exports = PageController
