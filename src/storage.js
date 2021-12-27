'use strict';

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
};

export { storage };