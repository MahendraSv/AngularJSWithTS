var TodoItem = (function () {
    function TodoItem(msg) {
        this.msg = msg;
        this.status = false;
    }
    return TodoItem;
}());
angular.module('todo', []);
var TodoCtrl = (function () {
    function TodoCtrl() {
        this.todoItems = [];
        this.todoItems.push(new TodoItem("Learning Typescript"));
        this.todoItems.push(new TodoItem("Learning AngularJS"));
    }
    return TodoCtrl;
}());
angular.module('todo').controller("TodoCtrl", TodoCtrl);
