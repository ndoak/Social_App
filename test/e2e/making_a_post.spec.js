var expect = require('chai').expect

describe('making a post', function () {
  it('creates an account and a new post', function () {
    browser.get('http://localhost:3001')

    // click login
    element(by.css('nav .login')).click()

    // fill out and submit login form
    element(by.model('username')).sendKeys('ndoak')
    element(by.model('password')).sendKeys('pass')
    element(by.css('form .btn')).click()

    // submit a new post on the posts page
    var post = 'my new post' + Math.random()
    element(by.model('postBody')).sendKeys(post)
    element(by.css('form .btn')).click()

    expect(element.all(by.css('ul.posts li')).first().getText()).to.eventually.contain(post)
    })
  })

})
