interface ITodoItem {
    msg: string;
    status: boolean;
}

class TodoItem implements ITodoItem {
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
    newMsg: string;

    constructor() {
        // this.todoItems.push(new TodoItem("Learning Typescript"));
        // this.todoItems.push(new TodoItem("Learning AngularJS"));

        this.newMsg = '';
    }

    addNewItem() {
        this.todoItems.push(new TodoItem(this.newMsg));
        this.newMsg = '';
    }

    doneItems(): number {
        let n = 0;
        for(let i = 0; i < this.todoItems.length; i ++) {
            if(this.todoItems[i].status) {
                n++;
            }
        }
        return n;
    }
}

angular.module('todo').controller("TodoCtrl", TodoCtrl);