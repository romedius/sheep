angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $timeout) {

    $scope.image = "/img/sheep/lieb.jpg";
    $scope.count = 0;

    var audio = new Audio('audio.wav');

    $scope.click = function() {

      if($scope.lock == true) {
        return;
      }


      $scope.count++;

      //var number = Math.floor(Math.random() * ((15-8)+1) + 8);
      var number = Math.floor(Math.random() * 15) + 8;

      var tmp = angular.copy($scope.count);
      if (tmp % number == 0) {



        $scope.lock = true;

        $timeout(function(){
          $scope.lock = false;
        }, 1000);

        $scope.image = "/img/sheep/evil.jpg";
        audio.play();
      } else {
        $scope.image = "/img/sheep/lieb.jpg";
      }
    }

  })

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
