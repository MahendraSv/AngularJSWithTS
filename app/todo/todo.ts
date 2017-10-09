class TodoItem {
    msg: string;
    status: boolean;

    constructor(msg) {
        this.msg = msg;
        this.status = false;
    }
}

angular.module('todo', []);

class TodoCtrl {
    todoItems: TodoItem[] = [];

    constructor() {
        this.todoItems.push(new TodoItem("Learning Typescript"));
        this.todoItems.push(new TodoItem("Learning AngularJS"));
    }
}

angular.module('todo').controller("TodoCtrl", TodoCtrl);