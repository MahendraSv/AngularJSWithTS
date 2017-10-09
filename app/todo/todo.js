angular.module('todo', []);
var TodoCtrl = (function () {
    function TodoCtrl() {
        this.todos = [
            { text: "Learning AngularJS", done: true },
            { text: "Working with AngularJS", done: false }
        ];
    }
    TodoCtrl.prototype.addTodo = function () {
        this.todos.push({ text: this.todoText, done: false });
        this.todoText = '';
    };
    TodoCtrl.prototype.completedItems = function () {
        var n = 0;
        this.todos.forEach(function (x) {
            if (x.done === true) {
                n++;
            }
        });
        return n;
    };
    TodoCtrl.prototype.deleteTodo = function (ind) {
        this.todos.splice(ind, 1);
    };
    return TodoCtrl;
}());
angular.module('todo').controller("TodoCtrl", TodoCtrl);
