'use strict';

const listsFactory = (name, todos) => {
    return { name, todos }
};

const todosFactory = (title, description, dueDate, priority, notes, checklist) => {
    return { title, description, dueDate, priority, notes, checklist };
};

export { listsFactory, todosFactory };