//create app module
  var app = angular.module('app', [])

//create the PostsCtrl module
//dependency inject $scope
  app.controller('PostsCtrl', function ($scope, PostsSvc) {
    //this function runs when the add post button is clicked
    $scope.addPost = function() {
      //only add post if the post has body text
      if ($scope.postBody) {
        PostsSvc.create({
          username:'ndoak',
          body: $scope.postBody
        }).success(function (post) {
          $scope.posts.unshift(post)
          $scope.postBody = null
        })
      }
    }
    PostsSvc.fetch().success(function (posts) {
      $scope.posts = posts
    })
  })

app.service('PostsSvc', function ($http) {
  this.fetch = function () {
    return $http.get('/api/posts')
  }
  this.create = function (post) {
    return $http.post('/api/posts', post)
  }
})
