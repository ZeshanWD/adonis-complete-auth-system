'use strict'

class PageController {

  showHome({ view }) {
    return view.render('home');
  }

}

module.exports = PageController
