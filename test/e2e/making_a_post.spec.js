describe('making a post', function () {
  it('creates an account and a new post', function () {
    browser.get('http://localhost:3001')

    // click 'register'
    element(by.css('nav .register')).click()

    // fill out and submit registration form
    element(by.model('username')).sendKeys('ndoak')
    element(by.model('password')).sendKeys('pass')
    element(by.css('form .btn')).click()

    // Navigate to the posts page
    element(by.css('nav .posts')).click();

    // submit a new post on the posts page
    var post = 'my new post' + Math.random()
    element(by.model('postBody')).sendKeys(post)
    element(by.css('form .btn')).click()
