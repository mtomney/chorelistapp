angular.module('ToDo', []).
controller('todoController', ['$scope', function($scope){
	$scope.todolist = [];
	$scope.addToDo = function(){
		$scope.todolist.push({'title': $scope.newTodo, 'done': false})
		$scope.newTodo = ''
	};
	$scope.clearCompleteTask = function(){
		$scope.todolist = $scope.todolist.filter(function(item){
			return !item.done;
		});
	};
}]);