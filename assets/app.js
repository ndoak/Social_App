angular.module("app",[]);var app=angular.module("app",[]);app.controller("PostsCtrl",["$scope","PostsSvc",function(t,s){t.addPost=function(){t.postBody&&s.create({username:"ndoak",body:t.postBody}).success(function(s){t.posts.unshift(s),t.postBody=null})},s.fetch().success(function(s){t.posts=s})}]),app.service("PostsSvc",["$http",function(t){this.fetch=function(){return t.get("/api/posts")},this.create=function(s){return t.post("/api/posts",s)}}]),anuglar.module("app").controller("PostsCtrl",function(t,s){t.addPost=function(){t.postBody&&s.create({username:"ndoak",body:t.postBody}).success(function(s){t.posts.unshift(s),t.postBody=null})},s.fetch().success(function(s){t.posts=s})}),angular.module("app").service("PostsSvc",["$http",function(t){this.fetch=function(){return t.get("/api/posts")},this.create=function(s){return t.post("/api/posts",s)}}]);