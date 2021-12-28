'use strict';

import { storage } from "./storage";

const divList = document.getElementById('list');

let dom = {

    clearList: () => {
        divList.replaceChildren();
    },
    
    updateList: () => {
    
        divList.replaceChildren();
        const lists = storage.read();
        let currentList = [];
        lists.forEach((element) => {
            if(element.name == 'defaultList') {
                currentList = element.todos;
            };
        });
    
        console.log(currentList);
    
        
        const genList = document.createElement('div');
        const addButton = document.createElement('button');
        addButton.textContent = 'Add';
        genList.appendChild(addButton);
    
        currentList.forEach((element, index) => {
            const tempDiv = document.createElement('div');
            tempDiv.setAttribute('data-index', index);
            tempDiv.textContent = element.title;
            
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete-button');
            tempDiv.appendChild(deleteButton);
    
            genList.appendChild(tempDiv);
            
        });
        divList.appendChild(genList);

        
    },
    eventListener: () => {
        window.addEventListener('click', e => {
            console.log(e);
            console.log(e.target);
            if (e.target.classList.contains('delete-button')) {
                const lists = storage.read();
                const index = e.path[1].getAttribute('data-index');
                lists[1].todos.splice(index, 1);
                console.log('clicked delete button');
                console.log(lists);
                storage.write(lists[1]);
        
                dom.clearList();
                dom.updateList();
            }
        });
    },
};

export { dom }
