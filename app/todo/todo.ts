angular.module('todo', []);

class TodoCtrl {
    todos: any[] = [
        { text: "Learning AngularJS", done: true },
        { text: "Working with AngularJS", done: false }
    ];
    todoText: string;

    addTodo() {
        this.todos.push(
            { text: this.todoText, done: false }
        );
        this.todoText = '';
    }

    completedItems(): number {
        let n = 0;
        this.todos.forEach( function(x) {
            if(x.done === true) {
                n++;
            }
        });
        return n;
    }

    deleteTodo(ind: number) {
        this.todos.splice(ind, 1);
    }
}

angular.module('todo').controller("TodoCtrl", TodoCtrl);