var expect = require('chai').expect

describe('making a post', function () {
  it('creates an account and a new post', function () {
    browser.get('http://localhost:3001')

    // click login
    element(by.css('nav .login')).click()

    // click 'register'
    element(by.css('nav .register')).click()

    // fill out and submit login form
    element(by.model('username')).sendKeys('ndoak')
    element(by.model('password')).sendKeys('pass')
    element(by.css('form .btn')).click()

    // submit a new post on the posts page
    var post = 'my new post' + Math.random()
    element(by.model('postBody')).sendKeys(post)
    element(by.css('form .btn')).click()

    element.all(by.css('ul.list-group li')).first().getText().then(function (text) {
      expect(text).to.contain(post)
    })
  })

})
