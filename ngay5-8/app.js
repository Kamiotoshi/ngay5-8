var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope){
    console.log("My controller....");

    $scope.users=[
        {name:"THi", email:"dangkimthi@gmail.com", fullname:"dang Kim Thi"},
        {name:"ThiDk",email:"thi@gmail.com", fullname:"thi Dk"},
        {name:"CodeLean", email:"codelean@gmail.com", fullname:"code lean"}
    ];
    $scope.addUser= function(){
        $scope.users.push($scope.newUser);
        $scope.newUser={};
        $scope.message="New USer Add successfully";
    };
    $scope.selectUser= function(user){
        console.log(user);
        $scope.clickedUser= user;
    };
    $scope.deleteUser= function(){
        //$scope.user.splice($scope.users.indexOf($scope.clickedUser));
        $scope.users.splice($scope.users.indexOf($scope.clickedUser), 1);
        $scope.message="User deleted successfully";
    };
    $scope.clearMessage=function(){
        $scope.message="";
    };
});