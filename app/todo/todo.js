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
        // this.todoItems.push(new TodoItem("Learning Typescript"));
        // this.todoItems.push(new TodoItem("Learning AngularJS"));
        this.todoItems = [];
        this.newMsg = '';
    }
    TodoCtrl.prototype.addNewItem = function () {
        this.todoItems.push(new TodoItem(this.newMsg));
        this.newMsg = '';
    };
    TodoCtrl.prototype.doneItems = function () {
        var n = 0;
        for (var i = 0; i < this.todoItems.length; i++) {
            if (this.todoItems[i].status) {
                n++;
            }
        }
        return n;
    };
    return TodoCtrl;
}());
angular.module('todo').controller("TodoCtrl", TodoCtrl);
