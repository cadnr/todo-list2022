'use strict';

import { dom } from "./dom";
import { listsFactory } from "./factories";

let storage = {
    
    write: function(listObject) {
        const strList = JSON.stringify(listObject);
        localStorage.setItem(listObject.name, strList);
    },
    read: function() {
        let arr = [];
        for (let i = 0; i < localStorage.length; i++)   {
            arr.push(JSON.parse(
                localStorage.getItem(localStorage.key(i))
            ));
        }
        return arr;
    },
    newList: (listName) => {
        const listObject = listsFactory(listName);
        storage.write(listObject);
    },
    fetchList: (listName) => {
        const arr = storage.read();
        for (let i = 0; i < arr.length; i++)   {
            let item = arr[i];
            if(item.name == listName) {
                return item;
            };
        }
    },
};

export { storage };