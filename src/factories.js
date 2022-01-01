'use strict';

const listsFactory = (name, todos) => {
    if(todos == undefined) {
        return { name, todos: [] }
    };
    return { name, todos }
};

const todosFactory = (title, description, dueDate, priority, notes, checklist) => {
    return { title, description, dueDate, priority, notes, checklist };
};

export { listsFactory, todosFactory };