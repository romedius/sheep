angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $timeout) {

    $scope.image = "/img/sheep/lieb.gif";
    $scope.count = 0;

    var song = new Audio('schaflied.wav');
    var audio = new Audio('audio.wav');

    $scope.click = function() {

      if($scope.lock == true) {
        return;
      }

      if ($scope.count === 0) {
        song.play();
      }


      $scope.count++;

      var max = 8;
      var min = 3;
      var number = Math.floor(Math.random() * (max - min) + min);

      var tmp = angular.copy($scope.count);
      if ((tmp % number == 0) && tmp > 8) {

        $scope.lock = true;

        $timeout(function(){
          $scope.lock = false;
        }, 2000);

        $scope.image = "/img/sheep/evil.gif";
        audio.play();

        $timeout(function(){
          $scope.$apply();
        });
      } else {
        $scope.image = "/img/sheep/lieb.gif";
        $timeout(function(){
          $scope.$apply();
        });
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
