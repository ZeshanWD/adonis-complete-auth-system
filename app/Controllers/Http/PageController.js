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

}

module.exports = PageController
