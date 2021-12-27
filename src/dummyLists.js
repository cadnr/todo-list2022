'use strict';

import { listsFactory, todosFactory } from "./factories";
import { storage } from "./storage";

const dummyLists = () => {
    let list = [];
    for(let i = 0; i < 10; i++) {
        
        list.push(todosFactory('Default list item ' + i));
    }
    let listObject = listsFactory('defaultList', list);
    storage.write(listObject);

    list = [];
    for(let i = 0; i < 10; i++) {
        list.push(todosFactory('Other list item ' + i));
    }
    listObject = listsFactory('otherList', list);
    storage.write(listObject);
};

export { dummyLists };