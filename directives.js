var app= angular.module('my-app', []);

// 1) hello directive
app.directive('hello', function(){

return {
// scope: {
//   // 'hello': '@'
// },
  template: '<h1>Hello World</h1>'
};


});

// 2) hello Directive Part 2
app.directive('hello2', function(){

return {
scope: {
  'subject': '@'
},
  template: '<h1>Hello {{subject}}</h1>'
};


});

// 3) hello Directive Part 3
app.directive('hello3', function(){

return {
scope: {
  'subject': '@'
},
controller: function($scope) {
  $scope.subject= "";
  if($scope.subject=== "") {
    $scope.subject = "World!";
  }
},
  template: '<h1>Hello {{subject}}</h1>'

};
});

// 4) bootstrap button directive
app.directive('btButton', function(){

return {
  transclude: true,
scope: {
  'typee': '@'
},
controller: function($scope) {
  if(!$scope.typee) {
    $scope.typee = "default";
  }
},
  template: '<button class="btn btn-{{typee}}" ng-transclude></button>'

};
});

app.directive('form', function(){
return {}



});


template:
