var expect = require('chai').expect
var api = require('../../support/api')
var Post = require('../../../../models/post')

describe('controllers.api.posts', function () {
  beforeEach(function (done) {
    Post.remove({}, done)
  })

  describe('GET /api/posts', function () {
    beforeEach(function (done) {
      var posts = [
        {body: 'post1', username: 'ndoak'},
        {body: 'post2', username: 'ndoak'},
        {body: 'post3', username: 'ndoak'}
      ]
      Post.create(posts,done)
    })

  it(has 3 posts, function (done) {
    api.get('api/posts')
    .expect(200)
    .expect(function (response) {
      expect(response.body).to.have.length(3)
    })
    .end(done)
    })
  })
})

var ctrl = require('../../../../controllers/api/posts')

describe('controllers.api.posts', function () {
  it('exists', function () {
    expect(ctrl).to.exist
  })
})
