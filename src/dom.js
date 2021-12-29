'use strict';

import { todosFactory } from "./factories";
import { storage } from "./storage";

const divList = document.getElementById('list');

let dom = {
    selectedList: 'defaultList',

    clearList: () => {
        divList.replaceChildren();
    },
    
    updateList: () => {
    
        divList.replaceChildren();
        const lists = storage.read();
        let currentList = [];
        lists.forEach((element) => {
            if(element.name == dom.selectedList) {
                currentList = element.todos;
            };
        });
    
        // console.log(currentList);
    
        
        const genList = document.createElement('div');
        const addButton = document.createElement('button');
        addButton.textContent = 'Add';
        addButton.classList.add('add-button');
        const addForm = document.createElement('input');
        addForm.classList.add('add-form');
        genList.appendChild(addButton);
        genList.appendChild(addForm);
    
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
            } else if(e.target.classList.contains('add-button')) {
                const input = document.querySelector('.add-form');
                console.log(input.value);
                const lists = storage.read();
                const index = e.path[1].getAttribute('data-index');
                lists[1].todos.push(todosFactory(input.value));
                storage.write(lists[1]);
                dom.updateList();
            };
        });
    },
};

export { dom }
