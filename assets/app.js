//create app module
  var app = angular.module('app', [])

//create the PostsCtrl module
//dependency inject $scope
  app.controller('PostsCtrl', function ($scope, $http) {
    //this function runs when the add post button is clicked
    $scope.addPost = function() {
      //only add post if the post has body text
      if ($scope.postBody) {
        $scope.posts.unshift({
          username:'ndoak',
          body: $scope.postBody
        })
      //clear input field
      $scope.postBody = null
     }
    }
    //starting data
    $http.get('http://localhost:3000/api/posts')
    .success(function (posts) {
      $scope.posts = posts
    })
  })

app.service('PostsSvc', function ($http) {
  this.fetch = function () {
    return $http.get('/api/posts')
  }
})
