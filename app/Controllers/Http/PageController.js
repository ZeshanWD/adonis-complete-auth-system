'use strict'

class PageController {

  showHome({ view }) {
    return view.render('home');
  }

  showSignup({ view }) {
    return view.render('signup');
  }

}

module.exports = PageController
